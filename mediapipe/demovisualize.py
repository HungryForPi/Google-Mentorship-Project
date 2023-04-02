import mediapipe as mp
import cv2

BaseOptions = mp.tasks.BaseOptions
GestureRecognizer = mp.tasks.vision.GestureRecognizer
GestureRecognizerOptions = mp.tasks.vision.GestureRecognizerOptions
GestureRecognizerResult = mp.tasks.vision.GestureRecognizerResult
VisionRunningMode = mp.tasks.vision.RunningMode

# Create a gesture recognizer instance with the live stream mode:
def print_result(result: GestureRecognizerResult, output_image: mp.Image, timestamp_ms: int):
    print('gesture recognition result: {}'.format(result))

options = GestureRecognizerOptions(
    base_options=BaseOptions(model_asset_path='/path/to/model.task'),
    running_mode=VisionRunningMode.LIVE_STREAM,
    result_callback=print_result)
with GestureRecognizer.create_from_options(options) as recognizer:
    # Send live image data to perform gesture recognition.
    # The results are accessible via the `result_callback` provided in
    # the `GestureRecognizerOptions` object.
    # The gesture recognizer must be created with the live stream mode.
    # Use OpenCV’s VideoCapture to start capturing from the webcam.
    # Create a loop to read the latest frame from the camera using VideoCapture#read()
    vid = cv2.VideoCapture(0)
    frame_timestamp_ms = 100 #?? maybe change
    while(vid.isOpened()):
    # Capture the video frame by frame
        ret, frame = vid.read()
    # Convert the frame received from OpenCV to a MediaPipe’s Image object.
        mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=frame)
        recognizer.recognize_async(mp_image, frame_timestamp_ms)
        if cv2.waitKey(1) & 0xFF == ord('q'): #press q to stop
            break
    vid.release()
    cv2.destroyAllWindows()

