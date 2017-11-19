import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBoPaRTqNCMV1An4_nKIWU3ycpCGFTIppw",
  authDomain: "coupletest2-86369.firebaseapp.com",
  databaseURL: "https://coupletest2-86369.firebaseio.com",
  projectId: "coupletest2-86369",
  storageBucket: "",
  messagingSenderId: "171737948717"
};

var fire = firebase.initializeApp(config);

export default fire;
