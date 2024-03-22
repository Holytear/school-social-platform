
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC5fpGREyTlIZBXpBQdUzEnjAt7k583eLg",
    authDomain: "school-social-media-platform.firebaseapp.com",
    projectId: "school-social-media-platform",
    storageBucket: "school-social-media-platform.appspot.com",
    messagingSenderId: "906698668808",
    appId: "1:906698668808:web:3cb6e259f20668b1ba4abd",
    measurementId: "G-WH3LQ4J4GG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
  
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      
      // Optionally, store additional user data (name, username) in a database (Firestore)
      // ... your database logic here
  
      alert(`You have signed up successfully, ${name}!`);  
  
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);  // Display error message to the user
    }
  });

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      alert("Login successful!");
      
      // Redirect user to a different page or display a success message
  
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);  // Display error message to the user
    }
  });
  
  
