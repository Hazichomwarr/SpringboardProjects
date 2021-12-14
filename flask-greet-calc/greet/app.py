from flask import Flask, request

app = Flask(__name__)

@app.route('/welcome')
def welcome():
    """welcome message"""
    return '<h1>Welcome!</h1>'


@app.route('/welcome/home')
def welcome_home():
    """welcome home greeting"""
    return '<h1>Welcome back</h1>'


@app.route('/welcome/back')
def welcome_back():
    """welcome back message"""
    return '<h1>Welcome back</h1>'