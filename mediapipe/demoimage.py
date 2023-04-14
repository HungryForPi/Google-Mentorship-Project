import mediapipe as mp
from mediapipe.tasks import python
from mediapipe.tasks.python.components import processors
from mediapipe.tasks.python import vision
import cv2
import math
import sys

# BaseOptions = mp.tasks.BaseOptions
# ImageClassifier = mp.tasks.vision.ImageClassifier
# ImageClassifierOptions = mp.tasks.vision.ImageClassifierOptions
# VisionRunningMode = mp.tasks.vision.RunningMode
base_options = python.BaseOptions(model_asset_path='exported_model/rps_gesture_recognizer.task')
options = vision.GestureRecognizerOptions(base_options=base_options)
recognizer = vision.GestureRecognizer.create_from_options(options)
# STEP 3: Load the input image.
image = mp.Image.create_from_file('mediapipe/asl_alphabet_test/asl_alphabet_test/A_test.jpg')

# STEP 4: Classify the input image.
recognition_result = recognizer.recognize(image)

# STEP 5: Process the classification result. In this case, visualize it.
# images.append(image)
top_gesture = recognition_result.gestures
print(top_gesture)
# hand_landmarks = recognition_result.hand_landmarks
# results.append((top_gesture, hand_landmarks))

print(recognition_result)
# display_batch_of_images(images, predictions) this is a google colab thing