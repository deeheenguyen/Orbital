import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAFY6szGYnACt4MBwzneigOz2RNnORIBXA",
    authDomain: "nuswhere.firebaseapp.com",
    databaseURL: "https://nuswhere.firebaseio.com",
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
