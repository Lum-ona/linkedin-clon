import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSyMWBqgTHLhXgyOr5bQXjvf7dqHWSjbE",
  authDomain: "linkedin-clone-60248.firebaseapp.com",
  projectId: "linkedin-clone-60248",
  storageBucket: "linkedin-clone-60248.appspot.com",
  messagingSenderId: "324233440043",
  appId: "1:324233440043:web:e23ca137c85dcb3a5d736e",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
