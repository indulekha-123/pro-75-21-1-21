import * as firebase from 'firebase'
require ('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyAfEAAT9BCiyM5vUqF3_x1zEKCxv3BegaU",
    authDomain: "newsletter-70579.firebaseapp.com",
    databaseURL: "https://newsletter-70579-default-rtdb.firebaseio.com",
    projectId: "newsletter-70579",
    storageBucket: "newsletter-70579.appspot.com",
    messagingSenderId: "200192697515",
    appId: "1:200192697515:web:5280fe05ab59a6e234c3ee"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore ();

