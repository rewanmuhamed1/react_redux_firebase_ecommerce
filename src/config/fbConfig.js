import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDOm_iGD7LZ2RavGcJf_UIBX4BSGWlX7Ww",
    authDomain: "ecommerce-2e324.firebaseapp.com",
    databaseURL: "https://ecommerce-2e324.firebaseio.com",
    projectId: "ecommerce-2e324",
    storageBucket: "ecommerce-2e324.appspot.com",
    messagingSenderId: "987885019854",
    appId: "1:987885019854:web:23f9ded2f6c1a31756669f",
    measurementId: "G-SYP12RM9HG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  
  export { storage, firebase as default }; 
