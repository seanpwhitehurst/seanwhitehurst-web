import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJOcDj6uVoJiO02D1I40Zsh6dPGudBHEU",
  authDomain: "seanwhitehurst-core.firebaseapp.com",
  projectId: "seanwhitehurst-core",
  storageBucket: "seanwhitehurst-core.appspot.com",
  messagingSenderId: "749533092785",
  appId: "1:749533092785:web:1b7b764ecba03ef0367b90",
  measurementId: "G-SMG4JDG0H0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
