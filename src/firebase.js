import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import dotenv from "dotenv";

dotenv.config();
var firebaseConfig = {
  // apiKey: process.env.FIREBASE_APIKEY,
  // authDomain: process.env.FIREBASE_AUTHDOMAIN,
  // projectId: process.env.FIREBASE_PROJECTID,
  // storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  // appId: process.env.FIREBASE_APPID,
  apiKey: "AIzaSyALhTvDF2OU7wo7nJqT03OTQj5TEttsT4A",
  authDomain: "expense-manager-f83b3.firebaseapp.com",
  projectId: "expense-manager-f83b3",
  storageBucket: "expense-manager-f83b3.appspot.com",
  messagingSenderId: "578884303828",
  appId: "1:578884303828:web:cec89285e06ed339d2b441",
  measurementId: "G-DBZGHXKR1G",
};
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const timeStamp = firebase.firestore.Timestamp();
