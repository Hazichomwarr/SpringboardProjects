from flask import Flask, redirect, render_template, flash, request
from flask_debugtoolbar import DebugToolbarExtension
from logging import debug
import convert_stuff


app = Flask(__name__)


app.config['SECRET_KEY'] = "secretword"
debug = DebugToolbarExtension(app)
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False


@app.route('/')
def index():
    return render_template('home_page.html')


@app.route('/', methods=['POST'])
def handler():
    origin = request.form['from']
    origin = origin.upper()

    dest = request.form['to']
    dest = dest.upper()

    amount = request.form['amount']
    amount = int(amount)

    check = convert_stuff.check_entries(origin, dest)

    if check == True:
        messag = convert_stuff.right_data_handler(origin, dest, amount)
        flash(messag)
    else:
        flash(check)

    return render_template('home_page.html')



