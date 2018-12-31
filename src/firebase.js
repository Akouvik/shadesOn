import * as firebase from "firebase";
const config = {
  apiKey: "AIzaSyDPvZumBTF4PJLs4mL6Ngvp_xzjfMuexbA",
  authDomain: "mixedwb.firebaseapp.com",
  databaseURL: "https://mixedwb.firebaseio.com",
  projectId: "mixedwb",
  storageBucket: "mixedwb.appspot.com",
  messagingSenderId: "667950003068"
};
firebase.initializeApp(config);
//creating a table in the db

export const database = firebase.database().ref("/posts");
