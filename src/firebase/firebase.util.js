import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC47RiFj6sT25B5YE6wMWY3Am8qf0gtsng",
    authDomain: "crwn-db-f0aee.firebaseapp.com",
    databaseURL: "https://crwn-db-f0aee.firebaseio.com",
    projectId: "crwn-db-f0aee",
    storageBucket: "crwn-db-f0aee.appspot.com",
    messagingSenderId: "404992955957",
    appId: "1:404992955957:web:a0b745ceacc6eba9a0437c",
    measurementId: "G-WK59ZQ617Y"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;