import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const appFirebase = firebase.initializeApp({
    apiKey: "AIzaSyAWVyEqVK_3dHYofmgZS4nUgiDhEH9aleo",
    authDomain: "figuro-widget.firebaseapp.com",
    projectId: "figuro-widget",
    storageBucket: "figuro-widget.appspot.com",
    messagingSenderId: "73121794775",
    appId: "1:73121794775:web:61f36c5090468307bcbe92"
});
export const auth = firebase.auth();


export default appFirebase;
export const firestore = firebase.firestore();
