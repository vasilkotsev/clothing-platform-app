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

/* Create an instance of the Google provider object */
const provider = new firebase.auth.GoogleAuthProvider();
/*Specify additional custom OAuth provider parameters */
provider.setCustomParameters({ prompt: "select_account" });
/* Authenticate with Firebase using the Google provider object, sign in with a pop-up window */
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
