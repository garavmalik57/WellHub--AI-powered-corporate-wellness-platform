from flask import Flask, request, jsonify
import requests
from datetime import datetime
from statistics import mean

app = Flask(__name__)


def normalize(value, min_value, max_value):
    if max_value == min_value:
        return 0.0
    clipped = max(min(value, max_value), min_value)
    return (clipped - min_value) / (max_value - min_value)


def compute_sleep_score(sleep_entry):
    total_hours = sleep_entry.get("totalsleepduration", 0) / 3600.0
    wakeups = sleep_entry.get("wakeupcount", 0)
    deep = sleep_entry.get("deepsleepduration", 0) / 3600.0
    rem = sleep_entry.get("remsleepduration", 0) / 3600.0

    duration_score = normalize(total_hours, 5.0, 9.0)  # prefer 7-8h
    wakeup_penalty = 1.0 - normalize(wakeups, 0, 5)
    deep_score = normalize(deep, 0.8, 2.0)
    rem_score = normalize(rem, 1.0, 2.5)

    sleep_score = (
        0.45 * duration_score + 0.25 * wakeup_penalty + 0.15 * deep_score + 0.15 * rem_score
    )
    return max(0.0, min(1.0, sleep_score))


def compute_activity_score(activity_entry):
    steps = activity_entry.get("steps", 0)
    calories = activity_entry.get("calories", 0)
    distance = activity_entry.get("distance", 0.0)

    steps_score = normalize(steps, 3000, 12000)
    calories_score = normalize(calories, 1600, 3200)
    distance_score = normalize(distance, 2.0, 10.0)

    activity_score = 0.6 * steps_score + 0.2 * calories_score + 0.2 * distance_score
    return max(0.0, min(1.0, activity_score))


def infer_mood(sleep_score, activity_score, hydration_ratio=None, journaling_sentiment=None):
    hydration_score = 0.5 if hydration_ratio is None else max(0.0, min(1.0, hydration_ratio))
    sentiment_score = 0.5 if journaling_sentiment is None else max(0.0, min(1.0, journaling_sentiment))

    composite = 0.4 * sleep_score + 0.4 * activity_score + 0.1 * hydration_score + 0.1 * sentiment_score

    if composite >= 0.75:
        return "Energetic"
    if composite >= 0.6:
        return "Happy"
    if composite >= 0.45:
        return "Neutral"
    if composite >= 0.30:
        return "Tired"
    return "Stressed"


def compute_readiness_index(sleep_score, activity_score, recent_trend=0.5, stress_penalty=0.0):
    readiness = 0.55 * sleep_score + 0.35 * activity_score + 0.10 * recent_trend
    readiness = readiness * (1.0 - 0.25 * stress_penalty)
    return max(0.0, min(1.0, readiness))


def goal_probabilities(activity_entry, hydration_ratio=None):
    steps = activity_entry.get("steps", 0)
    steps_target = 10000
    steps_prob = max(0.0, min(1.0, steps / steps_target))

    hydration_prob = 0.5 if hydration_ratio is None else max(0.0, min(1.0, hydration_ratio))
    return {
        "steps_goal": steps_prob,
        "hydration_goal": hydration_prob
    }


def recommendations(mood, readiness, goal_probs, context):
    recs = []
    if readiness < 0.4:
        recs.append("Prioritize recovery today: 20–30 min walk, early bedtime, hydrate.")
        if context.get("poor_sleep_streak", 0) >= 2:
            recs.append("Try a relaxing routine: 10 min breathing + no screens 1h before bed.")
    elif readiness < 0.6:
        recs.append("Go for light-to-moderate activity: 20 min walk or gentle yoga.")
    else:
        recs.append("You’re ready! Consider a 30–45 min workout or a new challenge.")

    if goal_probs.get("steps_goal", 0) < 0.6:
        recs.append("Low chance to hit steps. Take 2 short walks: morning and afternoon.")
    if goal_probs.get("hydration_goal", 0) < 0.6:
        recs.append("Keep a water bottle nearby; set 2 reminders before lunch.")

    if mood in ("Stressed", "Tired"):
        recs.append("Try a 5–10 min meditation to reset.")
    if context.get("sedentary_week", False):
        recs.append("Join a light activity challenge to re-engage.")

    return recs[:5]


def aggregate_daily(activity_series, sleep_series, hydration_ratio=None, journaling_sentiment=None):
    if not activity_series or not sleep_series:
        return None

    latest_date = max(activity_series[0]["date"], sleep_series[0]["date"])  # both sorted desc in mock

    activity_today = activity_series[0]
    sleep_today = sleep_series[0]

    sleep_score = compute_sleep_score(sleep_today)
    activity_score = compute_activity_score(activity_today)
    mood = infer_mood(sleep_score, activity_score, hydration_ratio, journaling_sentiment)

    # Trend: average of last 7 days vs last 3 days
    last3 = activity_series[:3]
    last7 = activity_series[:7]
    mean3 = mean([compute_activity_score(x) for x in last3]) if last3 else activity_score
    mean7 = mean([compute_activity_score(x) for x in last7]) if last7 else activity_score
    trend = 0.5 + 0.5 * (mean3 - mean7)  # >0.5 improving, <0.5 declining
    trend = max(0.0, min(1.0, trend))

    poor_sleep_streak = 0
    for s in sleep_series[:7]:
        if compute_sleep_score(s) < 0.45:
            poor_sleep_streak += 1

    sedentary_week = mean([compute_activity_score(x) for x in last7]) < 0.45 if last7 else False

    readiness = compute_readiness_index(
        sleep_score=sleep_score,
        activity_score=activity_score,
        recent_trend=trend,
        stress_penalty=1.0 if mood == "Stressed" else (0.5 if mood == "Tired" else 0.0)
    )

    goals = goal_probabilities(activity_today, hydration_ratio)
    recs = recommendations(mood, readiness, goals, {"poor_sleep_streak": poor_sleep_streak, "sedentary_week": sedentary_week})

    return {
        "date": latest_date,
        "sleep_score": round(sleep_score, 3),
        "activity_score": round(activity_score, 3),
        "readiness_index": round(readiness, 3),
        "mood": mood,
        "goal_probabilities": {k: round(v, 3) for k, v in goals.items()},
        "recommendations": recs
    }


@app.route("/predict", methods=["POST"])
def predict():
    payload = request.get_json(force=True, silent=True) or {}
    activity_series = payload.get("activities", [])
    sleep_series = payload.get("sleep", [])
    hydration_ratio = payload.get("hydration_ratio")
    journaling_sentiment = payload.get("journaling_sentiment")

    result = aggregate_daily(activity_series, sleep_series, hydration_ratio, journaling_sentiment)
    if result is None:
        return jsonify({"error": "Missing activity or sleep data"}), 400
    return jsonify(result)


@app.route("/predict_from_mock", methods=["GET"])
def predict_from_mock():
    base = request.args.get("base", "http://127.0.0.1:5001")
    try:
        act = requests.post(f"{base}/v2/measure", data={"action": "getactivity"}).json()
        slp = requests.post(f"{base}/v2/sleep", data={"action": "getsummary"}).json()
    except Exception as e:
        return jsonify({"error": f"Failed to reach mock: {e}"}), 502

    activities = act.get("body", {}).get("activities", [])
    sleep = slp.get("body", {}).get("series", [])

    result = aggregate_daily(activities, sleep)
    if result is None:
        return jsonify({"error": "Mock did not return data"}), 502
    return jsonify(result)


if __name__ == "__main__":
    app.run(port=5002, debug=True)


