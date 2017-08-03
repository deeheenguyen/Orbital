import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAFY6szGYnACt4MBwzneigOz2RNnORIBXA",
    authDomain: "nuswhere.firebaseapp.com",
    databaseURL: "https://nuswhere.firebaseio.com",
    storageBucket: "nuswhere.appspot.com",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const database = firebase.database();
export const storage = firebase.storage();
export default firebase;
