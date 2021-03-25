import firebase from "firebase/app";
import "firebase/firestore";

// Configuração da Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAVX1zyeGC_DAkvgIMn2gt1ymFhWnQwwCo",
    authDomain: "ademilar-451a0.firebaseapp.com",
    projectId: "ademilar-451a0",
    storageBucket: "ademilar-451a0.appspot.com",
    messagingSenderId: "362382868107",
    appId: "1:362382868107:web:f42170256ab3afe2591e8e",
    measurementId: "G-3GS7PHJV31"
};

// Checa se já existe uma aplicação firebase
if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

// Firebase - Database
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;
