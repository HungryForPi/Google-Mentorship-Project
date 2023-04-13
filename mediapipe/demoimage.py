import mediapipe as mp
from mediapipe.tasks import python
from mediapipe.tasks.python.components import processors
from mediapipe.tasks.python import vision

BaseOptions = mp.tasks.BaseOptions
ImageClassifier = mp.tasks.vision.ImageClassifier
ImageClassifierOptions = mp.tasks.vision.ImageClassifierOptions
VisionRunningMode = mp.tasks.vision.RunningMode
# STEP 2: Create an ImageClassifier object.
base_options = python.BaseOptions(model_asset_path='exported_model/demo_gesture_recognizer.task')
options = vision.ImageClassifierOptions(
    base_options=base_options, max_results=4)
classifier = vision.ImageClassifier.create_from_options(options)

images = []
predictions = []
# for image_name in IMAGE_FILENAMES:
# STEP 3: Load the input image.
image = mp.Image.create_from_file('asl_alphabet_test/asl_alphabet_test/A_test.jpg')

# STEP 4: Classify the input image.
classification_result = classifier.classify(image)

# STEP 5: Process the classification result. In this case, visualize it.
images.append(image)
top_category = classification_result.classifications[0].categories[0]
predictions.append(f"{top_category.category_name} ({top_category.score:.2f})")

print(predictions)
# display_batch_of_images(images, predictions)