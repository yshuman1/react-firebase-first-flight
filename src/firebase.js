import firebase from "firebase";

var config = {
  apiKey: "AIzaSyBgKeNEObUbc7oE36GlBNraHtXGdYD6ug8",
  authDomain: "first-flight-with-friend-8809d.firebaseapp.com",
  databaseURL: "https://first-flight-with-friend-8809d.firebaseio.com",
  projectId: "first-flight-with-friend-8809d",
  storageBucket: "first-flight-with-friend-8809d.appspot.com",
  messagingSenderId: "399540043357"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
