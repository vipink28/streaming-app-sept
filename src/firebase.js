// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaLjO-34yWqL5dd0wtDvoL4l0ANKIL8VI",
    authDomain: "streaming-application-4cefb.firebaseapp.com",
    projectId: "streaming-application-4cefb",
    storageBucket: "streaming-application-4cefb.firebasestorage.app",
    messagingSenderId: "602387951896",
    appId: "1:602387951896:web:46d35e8e45452da306ae6d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);