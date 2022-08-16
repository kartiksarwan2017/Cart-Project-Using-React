import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
// import * as firebase from 'firebase';

import 'firebase/firestore';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.apiKey}`,
  authDomain:`${process.env.authDomain}` ,
  projectId: `${process.env.projectId}`  ,
  storageBucket: `${process.env.storageBucket}`,
  messagingSenderId: `${process.env.messagingSenderId}`,
  appId: `${process.env.appId}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


