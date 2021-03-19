import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-2KAHGzQuMujqkBIEk_HH2NAiR8u0o4E",
  authDomain: "clothing-platform-db-dd973.firebaseapp.com",
  projectId: "clothing-platform-db-dd973",
  storageBucket: "clothing-platform-db-dd973.appspot.com",
  messagingSenderId: "308605301220",
  appId: "1:308605301220:web:ef88e8fbaee975a47957f1",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
