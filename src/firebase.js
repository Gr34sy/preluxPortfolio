import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjXWxBz-46XuyDnQuvR5b1crQSgAYvEU0",
  authDomain: "preluxportfolio-e6557.firebaseapp.com",
  projectId: "preluxportfolio-e6557",
  storageBucket: "preluxportfolio-e6557.appspot.com",
  messagingSenderId: "263399150206",
  appId: "1:263399150206:web:88e1ed9619a6db7c6d7e2f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;