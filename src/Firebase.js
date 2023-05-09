import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// connect to firebase database 
const firebaseConfig = {
    apiKey: "AIzaSyCejG6BEIdU1ElteQSCmDakR3jrSygxFBg",
    authDomain: "impact-extension.firebaseapp.com",
    databaseURL: "https://impact-extension-default-rtdb.firebaseio.com",
    projectId: "impact-extension",
    storageBucket: "impact-extension.appspot.com",
    messagingSenderId: "619926946727",
    appId: "1:619926946727:web:81d17b1b7a183a86392c82",
    measurementId: "G-3QJKPRJ1J0"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();