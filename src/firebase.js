import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT-ID",
  storageBucket: "YOUR_STORAGE-BUCKET-LOCATION",
  messagingSenderId: "YOUR_MESSAGING-ID",
  appId: "YOUR_APP-ID",
  measurementId: "YOUR_MEASUREMENT-ID"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();

export { db };