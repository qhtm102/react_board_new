import firebase from 'firebase/app';
import 'firevase/firestore';

const firebaseConfig = {
    // apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "boardproject-8b9e5",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "912576416022",
    appId: "YOUR_APP_ID"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Initialize Firestore
  const db = firebase.firestore();
  
  export { db };