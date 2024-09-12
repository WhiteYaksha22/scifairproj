import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBFWDitBSpBegP9W91qnXuoJtvk7YAX6ns",
  authDomain: "scifairproj-caa0a.firebaseapp.com",
  projectId: "scifairproj-caa0a",
  storageBucket: "scifairproj-caa0a.appspot.com",
  messagingSenderId: "36980914056",
  appId: "1:36980914056:web:1d36f663a8522854502c3d",
  measurementId: "G-QPGH1YQWDK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);