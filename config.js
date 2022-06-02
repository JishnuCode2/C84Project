import firebase from "firebase";
//require("@firebase/firestore");

var firebaseConfig = { 

  apiKey: "AIzaSyB68UfZQJ7cqAyks22sEd1F9Exbufud8MQ",
  authDomain: "e-ride-stage-4-d2006.firebaseapp.com",
  projectId: "e-ride-stage-4-d2006",
  storageBucket: "e-ride-stage-4-d2006.appspot.com",
  messagingSenderId: "348479372444",
  appId: "1:348479372444:web:bba722047198f8c8728159"

};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
