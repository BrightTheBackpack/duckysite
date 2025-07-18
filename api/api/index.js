const express = require('express');
const initializeApp = require('firebase/app').initializeApp;
const getDatabase = require('firebase/database').getDatabase;
const ref = require('firebase/database').ref;
const get = require('firebase/database').get;
const set = require('firebase/database').set;
const firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

const firebaseApp = initializeApp(firebaseConfig);
const app = express()
const port = 3000;
const database = getDatabase(firebaseApp);


app.get('/', (req, res) => {
    const databaseref = ref(database, 'ducks');
    const snapshot =  get(databaseref).then((snapshot) => {
        res.send(snapshot.val())

    })
});

app.listen(port, () => {
    console.log('listening!');
});
module.exports = app;
