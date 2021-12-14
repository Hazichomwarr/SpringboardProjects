# Put your app in here.
from flask import Flask, request, render_template
from operations import add, sub, mult, div

app = Flask(__name__)

operators = {
    "add": add,
    "sub": sub,
    "mult": mult,
    "div": div,
}

@app.route('/')
def index():
    return render_template('calc.html')

@app.route('/math')
def do_math():
    a = int(request.args.get("first"))
    b = int(request.args.get("second"))
    c = request.args.get("option")
    result = operators[c](a,b)

    return str(result)
    