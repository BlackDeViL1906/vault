from roboflow import Roboflow

rf = Roboflow(api_key="MeqIAerEsfqqP0iUlZj6")
project = rf.workspace().project("desc-jams")
model = project.version(1).model

# infer on a local image
print(model.predict("ind-doc.jpg", confidence=40, overlap=30).json())

# visualize your prediction


model.predict("ind-doc.jpg", confidence=40, overlap=30).save("prediction.jpg")

# infer on an image hosted elsewhere
# print(model.predict("URL_OF_YOUR_IMAGE", hosted=True, confidence=40, overlap=30).json())

# from roboflow import Roboflow
# from PIL import Image, ImageDraw, ImageFont

# # Initialize Roboflow and load the model
# rf = Roboflow(api_key="MeqIAerEsfqqP0iUlZj6")
# project = rf.workspace().project("desc-jams")
# model = project.version(1).model

# # Infer on a local image
# response = model.predict("ind-doc.jpg", confidence=40, overlap=30)
# predictions = response.json()["predictions"]

# # Load the image using Pillow
# image = Image.open("ind-doc.jpg")

# # Check if there are no predictions
# if not predictions:
#     print("Invalid Document !!")

# # If there are predictions, save the original image as JPEG
# else:
#     image.save("prediction.jpg")

# # Print the response
# print(response.json())
