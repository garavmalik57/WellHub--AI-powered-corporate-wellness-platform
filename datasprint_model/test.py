import requests
import json

# Local services
MOCK_BASE = "http://127.0.0.1:5001"
API_BASE = "http://127.0.0.1:5002"


def print_section(title):
    print("\n" + title)
    print("-" * len(title))


def main():
    # Hit mock endpoints (for visibility)
    url_activity = f"{MOCK_BASE}/v2/measure"
    url_sleep = f"{MOCK_BASE}/v2/sleep"
    res_activity = requests.post(url_activity, data={"action": "getactivity"})
    res_sleep = requests.post(url_sleep, data={"action": "getsummary"})

    print_section("Mock Activity (truncated)")
    act = res_activity.json()
    print(json.dumps({"status": act.get("status"), "first": act.get("body", {}).get("activities", [None])[0]}, indent=2))

    print_section("Mock Sleep (truncated)")
    slp = res_sleep.json()
    print(json.dumps({"status": slp.get("status"), "first": slp.get("body", {}).get("series", [None])[0]}, indent=2))

    # Call wellness API using mock
    url_predict = f"{API_BASE}/predict_from_mock"
    res_pred = requests.get(url_predict)
    print_section("Wellness Prediction (from mock)")
    print(json.dumps(res_pred.json(), indent=2))


if __name__ == "__main__":
    main()
