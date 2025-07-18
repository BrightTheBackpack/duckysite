const express = require('express');
const cors = require('cors');

const initializeApp = require('firebase/app').initializeApp;
const getDatabase = require('firebase/database').getDatabase;
const ref = require('firebase/database').ref;
const get = require('firebase/database').get;
const set = require('firebase/database').set;
const update = require('firebase/database').update;
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
app.use(cors())
const port = 3000;
const database = getDatabase(firebaseApp);


app.get('/', (req, res) => {
    const databaseref = ref(database, 'ducks');
    const snapshot =  get(databaseref).then((snapshot) => {
        res.send(snapshot.val())

    })
});
app.get('/notfound', (req, res) => {
    const databaseref = ref(database, 'ducks');
    const snapshot =  get(databaseref).then((snapshot) => {
        const data = snapshot.val();
        const notFound = Object.values(data).filter(ducky => !ducky.status);
        res.send(notFound);
    });
});
app.get('/updatestate', (req, res) => {
    const { id, status, name } = req.query;
    const databaseref = ref(database, `ducks/${id}`);
    update(databaseref, { status, name }).then(() => {
        res.send({ success: true });
    }).catch((error) => {
        res.status(500).send({ error: error.message });
    });
});
app.get('/foundcount', (req, res) => {
    const databaseref = ref(database, 'ducks');
    get(databaseref).then((snapshot) => {
        const data = snapshot.val();
        const foundCount = Object.values(data).filter(ducky => ducky.status).length;
        res.send({ foundCount });
    }).catch((error) => {
        res.status(500).send({ error: error.message });
    });
});
app.listen(port, () => {
    console.log('listening!');
});
module.exports = app;
