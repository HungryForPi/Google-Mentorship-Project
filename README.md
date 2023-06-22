# Google-Mentorship-Project (2023)

*Authors: Aditya Pahuja, Amber Shen, Calvin Zhang, Sophia Dasser*
*Mentor: Vijay Bharadwaj*

This project is a website that translates the American Sign Language alphabet into English. The user signs the letters into a live streaming video on the website, and the corresponding English letters are shown in real-time. The user can also upload an image of an ASL alphabet letter, and that will be recognized. 

## Directions
- Make sure you have Flask and Python downloaded!
Run *python3 app.py* in your terminal, then open the IP Address that is given (127.0.0.1:5000).
That's the website!

## ASL GESTURE RECOGNITION
### **MediaPipe**
**What it is**: *a framework by Google for building machine-learning pipelines to process time-series data (video, audio, etc)*

**Usage**: We trained our own model using the MediaPipe Gesture Recognizer task on the American Sign Language Dataset by @ayuraj on Kaggle.

## Website
We programmed the website using **HTML** and **CSS**. The backend was done using Flask, which was how we added the image uploading as well as the livestream. We also used the OpenCV library to cut the livestream into frames for our model to recognize. 

## Problems encountered 
- We initially planned to have two different models, one trained using TensorFlow and the other using MediaPipe but decided to focus on MediaPipe after facing troubles with TensorFlow.
- We had trouble training the model locally, so we switched to google colab
- Google colab didn't support web cameras/opencv so we had to switch back to local machines after training the model

**Project Demonstration Slides at the Stuy/Google final presentations meeting**
https://docs.google.com/presentation/d/1r2m9Ih0FDBoaFsI1TKZNHNaNCeh4jdWtHoTPpEMDUl4/edit?usp=sharing
