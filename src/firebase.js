import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCEmEgQEPB21KQ0l8H4EyIdf6Xl1V1DwJI",
  authDomain: "linkedin-clone-yt-17888.firebaseapp.com",
  projectId: "linkedin-clone-yt-17888",
  storageBucket: "linkedin-clone-yt-17888.appspot.com",
  messagingSenderId: "990991651816",
  appId: "1:990991651816:web:544d14df746accb30b4a5d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth } 