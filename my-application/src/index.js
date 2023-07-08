import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import Initial from './Initial';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2MycxPS2PzIo5nkzYTgpgAbq6gKZr9cM",
  authDomain: "react-message-c7a4d.firebaseapp.com",
  projectId: "react-message-c7a4d",
  storageBucket: "react-message-c7a4d.appspot.com",
  messagingSenderId: "315964066363",
  appId: "1:315964066363:web:dc11108235c1fe7803ea1e",
  measurementId: "G-YJCL35H463",
  databaseURL: 'https://react-message-c7a4d-default-rtdb.asia-southeast1.firebasedatabase.app/'

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <Initial />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
