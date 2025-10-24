// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkdK5luIXvg7e6tiLSjc67UEao_dGAhTA",
  authDomain: "toytopia-spa.firebaseapp.com",
  projectId: "toytopia-spa",
  storageBucket: "toytopia-spa.firebasestorage.app",
  messagingSenderId: "912892688037",
  appId: "1:912892688037:web:9777702b10655176baff4c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;