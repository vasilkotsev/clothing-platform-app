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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  /* checks if user is authenticated */
  if (!userAuth) return;

  /* make a query request to Firestore */
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  /* get snapshot object where we can get details about the actual data in this location */
  const snapShot = await userRef.get();

  /* checks if user data doesn't exists at this location and store new data */
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* Create an instance of the Google provider object */
const provider = new firebase.auth.GoogleAuthProvider();
/* Specify additional custom OAuth provider parameters */
provider.setCustomParameters({ prompt: "select_account" });
/* Authenticate with Firebase using the Google provider object, sign in with a pop-up window */
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
