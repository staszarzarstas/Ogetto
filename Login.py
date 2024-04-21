from flask import Flask, redirect, url_for
from flask_dance.contrib.google import make_google_blueprint, google

app = Flask(__name__)
app.secret_key = "secret_key"  # Замените это на свой секретный ключ

# Настройки Google OAuth
google_blueprint = make_google_blueprint(
    client_id="YOUR_CLIENT_ID",
    client_secret="YOUR_CLIENT_SECRET",
    scope=["profile", "email"]
)
app.register_blueprint(google_blueprint, url_prefix="/login")

@app.route("/")
def index():
    return "<a href='/login/google'>Login with Google</a>"

@app.route("/login/google")
def login():
    if not google.authorized:
        return redirect(url_for("google.login"))
    resp = google.get("/oauth2/v2/userinfo")
    assert resp.ok, resp.text
    return f"You are {resp.json()['email']} on Google"

if __name__ == "__main__":
    app.run(debug=True)
