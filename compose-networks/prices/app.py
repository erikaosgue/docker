import json, requests
from flask import Flask, jsonify
from collections.abc import Mapping


app = Flask(__name__)
@app.route('/')
def prices():
    try:
        data = requests.get('http://apparel/').json()
        print("Here")

        for i in range(len(data)):
            data[i]['price'] = i * 5 + 1

        return jsonify(data)
    except requests.exceptions.HTTPError as error:
        print(error)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
