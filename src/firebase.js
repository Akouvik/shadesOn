import * as firebase from "firebase";
var config = {
  apiKey: "AIzaSyA4NHVlD6ioXTcXcYQ9oU51w_JoP1L-Uwk",
  authDomain: "shadeson-8cecd.firebaseapp.com",
  databaseURL: "https://shadeson-8cecd.firebaseio.com",
  projectId: "shadeson-8cecd",
  storageBucket: "shadeson-8cecd.appspot.com",
  messagingSenderId: "723231391683"
};
firebase.initializeApp(config);

export const database = firebase.database().ref("/posts");
