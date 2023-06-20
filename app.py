from flask import Flask, render_template, send_file, Response
from flask_wtf import FlaskForm
from wtforms import FileField, SubmitField
from werkzeug.utils import secure_filename
import os
from wtforms.validators import InputRequired
import mediapipe as mp

import asl_recognizer
import asl_livestream
import cv2

import logging
log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)

app = Flask(__name__)
app.config['SECRET_KEY'] = 'supersecretkey'
app.config['UPLOAD_FOLDER'] = 'static/files'

class UploadFileForm(FlaskForm):
    file = FileField("File", validators=[InputRequired()])
    submit = SubmitField("Upload File")

@app.route('/', methods=['GET',"POST"])
@app.route('/home', methods=['GET',"POST"])
def home():
    form = UploadFileForm()
    if form.validate_on_submit():
        file = form.file.data # First grab the file
        file.save(os.path.join(os.path.abspath(os.path.dirname(__file__)),app.config['UPLOAD_FOLDER'],secure_filename(file.filename))) # Then save the file
        return render_template('results.html', results = asl_recognizer.recognize_image(file.filename), filename = file.filename)
    return render_template('index.html', form=form)

@app.route('/livestream')
def livestream():
    return render_template('livestream.html')

@app.route('/video')
def video():
    return Response(generate_frames(),mimetype='multipart/x-mixed-replace; boundary=frame')

import random
camera=cv2.VideoCapture(0)
@app.route('/fps')
def fps():
    return asl_livestream.resultsArr[-1] if len(asl_livestream.resultsArr)>0 else 'Nothing yet!'

def generate_frames():
    timestamp = 0
    while True:
        
        ## read the camera frame
        success,frame=camera.read()
        if not success:
            break
        else:
            ret,buffer=cv2.imencode('.jpg',frame)
            frame=buffer.tobytes()
            timestamp += 1
            result = asl_livestream.recognize(camera, timestamp)
            answer = asl_livestream.print_result(result, mp.Image,timestamp)
        yield(b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

if __name__ == '__main__':
    app.run(debug=True)