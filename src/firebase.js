import firebase from 'firebase/app'
import 'firebase/auth'

const appFirebase = firebase.initializeApp({
    apiKey: "AIzaSyBph_PeGtla3w7mf9qUrTcrtvq4RI-di14",
    authDomain: "lab-notes-e341c.firebaseapp.com",
    projectId: "lab-notes-e341c",
    storageBucket: "lab-notes-e341c.appspot.com",
    messagingSenderId: "775294461321",
    appId: "1:775294461321:web:776602ab2b4f847eef2d58",
    measurementId: "G-23TS0WE6XR"
});
export const auth = firebase.auth();


export default appFirebase;
