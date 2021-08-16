import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBy5YdOsAiN4z_pJqqXcPDdQ_PZAj0bv_s",
    authDomain: "ueno-clone.firebaseapp.com",
    projectId: "ueno-clone",
    storageBucket: "ueno-clone.appspot.com",
    messagingSenderId: "1083148281715",
    appId: "1:1083148281715:web:3718869556e246ea408706"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };