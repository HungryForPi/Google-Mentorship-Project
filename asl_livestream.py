import mediapipe as mp
import cv2

BaseOptions = mp.tasks.BaseOptions
GestureRecognizer = mp.tasks.vision.GestureRecognizer
GestureRecognizerOptions = mp.tasks.vision.GestureRecognizerOptions
GestureRecognizerResult = mp.tasks.vision.GestureRecognizerResult
VisionRunningMode = mp.tasks.vision.RunningMode

# Create a gesture recognizer instance with the live stream mode:
result = ""

def print_result(result: GestureRecognizerResult, output_image: mp.Image, timestamp_ms: int):
  try:
    result = (result.gestures[0][0].category_name)
  except:
    result = ("no result")
  
  print(result)

def getResult():
  return result

options = GestureRecognizerOptions(
      base_options=BaseOptions(model_asset_path='asl_gesture_recognizer_v2.task'),
      running_mode=VisionRunningMode.LIVE_STREAM,
      result_callback=print_result)

def recognize(vid, timestamp):
  with GestureRecognizer.create_from_options(options) as recognizer:
    # Use OpenCV’s VideoCapture to start capturing from the webcam.
    # vid = cv2.VideoCapture(0)
    # print(vid.isOpened())
      # Capture the video frame by frame
    ret, frame = vid.read()
  #   frame_timestamp_ms = 100
    #cv2.imshow('frame', frame)
  # Convert the frame received from OpenCV to a MediaPipe’s Image object.
    mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=frame)
    recognizer.recognize_async(mp_image,timestamp)
# Create a loop to read the latest frame from the camera using VideoCapture#read()

# Convert the frame received from OpenCV to a MediaPipe’s Image object.
# mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=numpy_frame_from_opencv)
# recognizer.recognize_async(mp_image, frame_timestamp_ms)
