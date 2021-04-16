import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAkzD8lKvNaqbO_Oh52xsN--xiPqIVyK1w",
  authDomain: "c-71-27007.firebaseapp.com",
  projectId: "c-71-27007",
  storageBucket: "c-71-27007.appspot.com",
  messagingSenderId: "325107183729",
  appId: "1:325107183729:web:86f37b5ad373c882d96bd0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();