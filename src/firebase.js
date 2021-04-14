import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBUhUquhzLmJB6W1R9fB4f64dpg2LPSLB4",
  authDomain: "project-3-30e16.firebaseapp.com",
  projectId: "project-3-30e16",
  storageBucket: "project-3-30e16.appspot.com",
  messagingSenderId: "577345270579",
  appId: "1:577345270579:web:efa144f41b87a082478446",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
