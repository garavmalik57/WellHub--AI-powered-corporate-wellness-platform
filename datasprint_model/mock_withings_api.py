from flask import Flask, jsonify, request
from datetime import datetime, timedelta
import random

app = Flask(__name__)

def generate_activity_data(days=30):
    today = datetime.now().date()
    data = []
    for i in range(days):
        day = today - timedelta(days=i)
        data.append({
            "date": day.strftime("%Y-%m-%d"),
            "steps": random.randint(3000, 15000),
            "calories": random.randint(1800, 3500),
            "distance": round(random.uniform(2.0, 12.0), 2),
            "elevation": random.randint(0, 30)
        })
    return data

def generate_sleep_data(days=30):
    today = datetime.now().date()
    data = []
    for i in range(days):
        day = today - timedelta(days=i)
        total_sleep = random.randint(6, 9) * 3600  # 6–9 hours
        deep = int(total_sleep * random.uniform(0.2, 0.3))
        light = int(total_sleep * random.uniform(0.4, 0.6))
        rem = total_sleep - (deep + light)
        data.append({
            "date": day.strftime("%Y-%m-%d"),
            "totalsleepduration": total_sleep,
            "wakeupcount": random.randint(0, 3),
            "deepsleepduration": deep,
            "lightsleepduration": light,
            "remsleepduration": rem
        })
    return data

@app.route("/v2/measure", methods=["POST", "GET"])
def measure():
    action = request.form.get("action") or request.args.get("action")
    if action == "getactivity":
        return jsonify({
            "status": 0,
            "body": {
                "activities": generate_activity_data(30),
                "more": False,
                "offset": 0
            }
        })
    return jsonify({"status": 503, "error": "Invalid action"})

@app.route("/v2/sleep", methods=["POST", "GET"])
def sleep():
    action = request.form.get("action") or request.args.get("action")
    if action == "getsummary":
        return jsonify({
            "status": 0,
            "body": {
                "series": generate_sleep_data(30),
                "more": False,
                "offset": 0
            }
        })
    return jsonify({"status": 503, "error": "Invalid action"})

if __name__ == "__main__":
    app.run(port=5001, debug=True)
