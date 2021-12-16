from flask import Flask, request, render_template, flash, redirect
from flask_debugtoolbar import DebugToolbarExtension
from stories import story


app = Flask(__name__)

app.config['SECRET_KEY'] = "secretword"
debug = DebugToolbarExtension(app)

@app.route("/")
def home_page():
    prompts = story.prompts
    return render_template('story_page.html', prompts=prompts)

@app.route("/old")
def old_route():
    return redirect("/")


@app.route("/answer")
def generate_story():
    text = story.generate(request.args)
    flash("Here is your storie")
    return render_template('story_renderer.html', text=text)