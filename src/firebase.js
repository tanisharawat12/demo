import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAfK_DNGp_N7zQCBeh2k-IpSTqBrFD33tE",
    authDomain: "chitchat-f8f52.firebaseapp.com",
    projectId: "chitchat-f8f52",
    storageBucket: "chitchat-f8f52.appspot.com",
    messagingSenderId: "318685362267",
    appId: "1:318685362267:web:3be9e3d42d7e16de0e277e",
    measurementId: "G-QHKRL1XECV"
  };
  const app = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = app.firestore();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
export {auth,googleProvider};
  export default db;
