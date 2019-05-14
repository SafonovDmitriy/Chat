import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCvlyq6Hp45TZaLq35_Jb-hZb_7rrpd3_A",
  authDomain: "chat-f7576.firebaseapp.com",
  databaseURL: "https://chat-f7576.firebaseio.com",
  projectId: "chat-f7576",
  storageBucket: "chat-f7576.appspot.com",
  messagingSenderId: "1067512734171",
  appId: "1:1067512734171:web:76eaad8ab9f05bf0"
};

firebase.initializeApp(config);

// export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const ref = firebase.database();
export const firebaseAuth = firebase.auth();
export const firebaseApp = firebase;
