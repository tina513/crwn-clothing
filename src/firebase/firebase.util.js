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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };  

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;