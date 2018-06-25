import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCw1aIO1L75JCLOG3lrrtlmUloBEu4jH94",
    authDomain: "reading-cc609.firebaseapp.com",
    databaseURL: "https://reading-cc609.firebaseio.com",
    projectId: "reading-cc609",
    storageBucket: "reading-cc609.appspot.com",
    messagingSenderId: "1010201202100"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();