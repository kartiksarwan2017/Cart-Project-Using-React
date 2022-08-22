import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';

// // Your web app's firebase configuration
// const firebaseConfig = {
//   apiKey: `${process.env.apiKey}`,
//   authDomain:`${process.env.authDomain}` ,
//   projectId: `${process.env.projectId}`  ,
//   storageBucket: `${process.env.storageBucket}`,
//   messagingSenderId: `${process.env.messagingSenderId}`,
//   appId: `${process.env.appId}`
// };


// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app); //create instance of firebase access and export it 

import { initializeApp } from 'firebase/app';
import { collection } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5l1fI2geny8MjYWk6pzULLWuUkREcorM",
    authDomain: "cart-24d44.firebaseapp.com",
    projectId: "cart-24d44",
    storageBucket: "cart-24d44.appspot.com",
    messagingSenderId: "16028521341",
    appId: "1:16028521341:web:49ac487ec70091bba13214"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// console.log(db);
// const a = collection(db, 'products');
// console.log(a);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App />
  
  </React.StrictMode>
);







