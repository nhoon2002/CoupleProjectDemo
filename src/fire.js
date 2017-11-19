import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD7LM-C250G8THaI3w7BV-9Zn1WVBBf7-k",
  authDomain: "testingupload-22761.firebaseapp.com",
  databaseURL: "https://testingupload-22761.firebaseio.com",
  projectId: "testingupload-22761",
  storageBucket: "testingupload-22761.appspot.com",
  messagingSenderId: "422317099707"
};

var fire = firebase.initializeApp(config);

export default fire;
