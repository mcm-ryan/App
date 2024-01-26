from flask import Flask

app = Flask(__name__)


if __name__ == "__main__":
    app.run(debug = True)

@app.route("/")
def home():
    return "home page boiiii"

@app.route("/profile")
def profile() :
    return "Hello WOrld"