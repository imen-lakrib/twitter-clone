

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
        apiKey: "AIzaSyCqJyY41me4DJdeodSnYIPainiSQ-6sZGA",
        authDomain: "twitter-clone-b9c5f.firebaseapp.com",
        projectId: "twitter-clone-b9c5f",
        storageBucket: "twitter-clone-b9c5f.appspot.com",
        messagingSenderId: "307899459253",
        appId: "1:307899459253:web:c9dd983ea27050399bc0fc"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export default  db ;