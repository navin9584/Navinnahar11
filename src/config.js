import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
export const firebaseConfig = {
  apiKey: "AIzaSyAzODz8NV4LOaYvWZsIx1lIxfBAlQ9vvNI",
  authDomain: "crud-a659b.firebaseapp.com",
  projectId: "crud-a659b",
  storageBucket: "crud-a659b.appspot.com",
  messagingSenderId: "640023868163",
  appId: "1:640023868163:web:b13654d22e6ca1a6aaaf36",
  measurementId: "G-L36L99R26Y"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export {firebase};
