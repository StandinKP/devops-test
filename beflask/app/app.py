from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True)


@app.route("/flask/hello")
def hello():
    return "Hello from Flask!"


if __name__ == "__main__":
    app.run(host="localhost", port=8000, debug=True)
