// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyzs-0bMeMUjG1DjoGJo4vZjUvbW48IcE",
  authDomain: "reactnativechat-15227.firebaseapp.com",
  projectId: "reactnativechat-15227",
  storageBucket: "reactnativechat-15227.appspot.com",
  messagingSenderId: "354878615968",
  appId: "1:354878615968:web:bd1de78decad090cef34c5",
  measurementId: "G-MMHEZTSZ0V"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };