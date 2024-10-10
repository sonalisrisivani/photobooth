Project : Photo booth project.
feature 1:  make web application for photobooth that allows people to take pictures and type whatsapp number and that picture is sent to that whatsapp number

feature 2: add fileters and imer option , collage, water marks, display words on pic,etc.

feature 3: make an actual photobooth by connecting display to web app .

feature 4: integrate printing on paper feature by connecting to printer .

feature 5: integrate background display by connecting led display in a box of 3 sides portable led  display where we can choose the background image.

feature 5:  suggest more possible features



Now implementing :-

Feature 1: Web Application for Photobooth
Description:

Build a web application that allows users to take pictures and enter their WhatsApp number. The picture will then be automatically sent to the specified WhatsApp number.
Implementation Details:

Camera Integration: Use the browser’s getUserMedia API to access the webcam for taking photos.
Form for WhatsApp Number: Add an input field where users can type in their WhatsApp number.
Image Capture and Storage: Once the photo is taken, save it temporarily on the server or browser using JavaScript and HTML canvas.
Sending the Photo via WhatsApp:
Firebase to interact with the WhatsApp Business API or other third-party services like Twilio that support WhatsApp messaging.
Ensure the message contains the photo as an attachment and is sent to the entered number.
Technologies:

Frontend: HTML, CSS, JavaScript (with frameworks like React or Vanilla JS).
Backend: Firebase.
API Integration: WhatsApp Business API or Twilio API.






Steps:

Firebase console : created project named "photobooth" with project id name "photoboothsss"

Clicked web sdk </> to register app with name  "photobooth" and copied firebase sdk which is the connection string from frontend to firebase

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCWhzMHSSNyBJILjy0ELy2WCdiwjc84SJ8",
    authDomain: "photobooth-sss.firebaseapp.com",
    projectId: "photobooth-sss",
    storageBucket: "photobooth-sss.appspot.com",
    messagingSenderId: "893599274396",
    appId: "1:893599274396:web:a1454f34acbd380890a459",
    measurementId: "G-3B9BXBCZPG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

In product category : selected firestore database and created database and collection named  "photos" with fields - "phonenumber" ,"imageURL","timestamp" in test mode.