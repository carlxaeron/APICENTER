// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDAxR8koHRTwu3t4u5hgjtunhTLV1lP-w",
  authDomain: "api-center-6acf0.firebaseapp.com",
  databaseURL: "https://api-center-6acf0-default-rtdb.firebaseio.com",
  projectId: "api-center-6acf0",
  storageBucket: "api-center-6acf0.appspot.com",
  messagingSenderId: "222552119966",
  appId: "1:222552119966:web:724f06daaa39aeefd0798f",
  measurementId: "G-3XQRRVJK1L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default app;
export { analytics, app, db };