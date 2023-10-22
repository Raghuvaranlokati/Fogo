import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyBsWIxDRV_Asguwfw7qt-xtLiJ_HgSaoPA",
  authDomain: "fogo-76277.firebaseapp.com",
  projectId: "fogo-76277",
  storageBucket: "fogo-76277.appspot.com",
  messagingSenderId: "681349724371",
  appId: "1:681349724371:web:edecd5495c995b78f57c26",
  measurementId: "G-HBRQ75KCRB"
};
firebase.initializeApp(firebaseConfig);
export default firebase;
