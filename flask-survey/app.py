
from logging import debug
from flask import Flask, request, render_template, redirect, url_for, Response, session
from flask.helpers import flash
from flask_debugtoolbar import DebugToolbarExtension
from surveys import surveys_list, survey_titles


app = Flask(__name__)


app.config['SECRET_KEY'] = "secretword"
app.config["DEBUG_TB_INTERCEPT_REDIRECTS"] = False
debug = DebugToolbarExtension(app)

#fake db for the eventauls responses
responses = []

#fake db for a select survey
right_one = []

SESS = "FOR_SESSION"

@app.route("/")
def home_page():
    return render_template('Survey_homepage.html', surveys=surveys_list, titles=survey_titles)

@app.route("/questions", methods=["POST"])
def home_page2():

    #finding the index of the survey in the surveys list
    indx = survey_titles.index(request.form['option'])

    #now appending the chosen survey in a list as a fake db
    right_one.append(surveys_list[indx])

    return redirect("/questions/0")

@app.route("/questions/<int:num>")
def questions(num):
    
    #Compels the user to not enter manually the routes, but to follow the orders from the get-go
    #if there is not chosen survey, the user must've entered the route manually
    try:
        right_survey = right_one[0]
    except:
        flash('This is where you should start off')
        return redirect('/')

    #Compels the user to not take the quizz out of order
    if len(responses) != num:
        flash("Okay let's continue your survey!")
        return redirect(f"/questions/{len(responses)}")

    #here we reached the end of question. redirects to a 'thanks.html' page
    if len(responses) == len(right_survey.questions):
        return redirect('/done')
    
    #OK here is the beginning with the survey the user has chosen in 'start.html' page
    question = right_survey.questions[num]

    return render_template('questions.html', question=question, question_num=num)

    

@app.route("/answers", methods=["POST"])
def collect_answers():
    try:
        #getting the answers (and the comments if any)
        ans = request.form["answers"]
        comment = request.form.get('comment', 'No Comment')

        session[SESS] = ans

        #defining a variable to keep track of the answers
        key = f'answer-{len(responses)+1}' #+1 here because don't want the user to see question-0
        # responses[key] = [ans]
        responses.append({key: ans, 'comment': comment})
        return redirect(f"/questions/{len(responses)}")

    except:
        #in here, handles the client if no answer
        flash('Please give an answer before moving to the next question!')
        return redirect(f"/questions/{len(responses)}")

@app.route("/done")
def survey_done():
    if not responses:
        return redirect(f"/questions/{len(responses)}")
    
    return render_template('thanks.html', responses=responses)



