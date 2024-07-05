import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCJ0Bdxt02Ip_lxXkpkenQwE1kA1-EjEfk",
  authDomain: "contact-df761.firebaseapp.com",
  databaseURL: "https://contact-df761-default-rtdb.firebaseio.com",
  projectId: "contact-df761",
  storageBucket: "contact-df761.appspot.com",
  messagingSenderId: "837038108447",
  appId: "1:837038108447:web:80c6348af9e770b076ca2a",
  measurementId: "G-4S0S1KSR9T"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);