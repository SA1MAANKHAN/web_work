import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYuq7C1EDcpZiZ7WogNzvqVXkuCUr4HEM",
  authDomain: "e-clone-33ffe.firebaseapp.com",
  projectId: "e-clone-33ffe",
  storageBucket: "e-clone-33ffe.appspot.com",
  messagingSenderId: "145212773421",
  appId: "1:145212773421:web:52fcec66280a45c093d4a4",
  measurementId: "G-EQTFG29PR1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
