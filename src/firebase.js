import firebase from "firebase/app";
import "firebase/auth";

const config = {
  //   apiKey: process.env.API_KEY,
  //   authDomain: process.env.AUTH_DOMAIN,
  //   databaseURL: process.env.DATABASE_URL,
  //   projectId: process.env.PROJECT_ID,
  //   storageBucket: process.env.STORAGE_BUCKET,
  //   messagingSenderId: process.env.MESSAGING_SENDER_ID,
  //   appId: process.env.APP_ID,
  apiKey: "AIzaSyALhTvDF2OU7wo7nJqT03OTQj5TEttsT4A",
  authDomain: "expense-manager-f83b3.firebaseapp.com",
  projectId: "expense-manager-f83b3",
  storageBucket: "expense-manager-f83b3.appspot.com",
  messagingSenderId: "578884303828",
  appId: "1:578884303828:web:cec89285e06ed339d2b441",
  measurementId: "G-DBZGHXKR1G",
};
firebase.initializeApp(config);
export const auth = firebase.auth();
