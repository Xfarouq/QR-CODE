import requests

def start():
    try:
        response = requests.get('https://worldtimeapi.org/api/timezone/America/New_York')
        response.raise_for_status()  # Check for HTTP errors
        result = response.json()
        print(result['timezone'])  # Use 'datetime' key from the JSON response
    except requests.exceptions.HTTPError as http_err:
        print(f"HTTP error occurred: {http_err}")
    except Exception as err:
        print(f"Other error occurred: {err}")

start()
