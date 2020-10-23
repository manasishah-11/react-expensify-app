import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey:process.env.FIREBASE_API_KEY,
    authDomain:process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL:process.env.FIREBASE_DATABASE_URL,
    projectId:process.env.FIREBASE_PROJECT_ID,
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default};

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').once('value').then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'Rent for the month of Jan',
//     amount: 3499,
//     createdAt: 0
// });
// database.ref('expenses').push({
//     description: 'Coffee',
//     note: 'Starbucks',
//     amount: 25,
//     createdAt: 12
// });
// database.ref('expenses').push({
//     description: 'Shopping',
//     note: 'Clothing and electronics',
//     amount: 467,
//     createdAt: 345
// });

// database.ref('notes').push({
//     title: 'Projects',
//     body: 'Sudoku, Speech to Text, Expensify'
// });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} works as a ${val.job.title} at ${val.job.company}.`);
// });

// database.ref().once('value').then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e) => {
//     console.log('Error fetching data ',e);
// });

// database.ref().set({
//     name: 'Manasi Shah',
//     age: 21,
//     stressLevel: 9,
//     job: {
//         title: 'Software Developer',
//         company: 'Amazon'
//     },  
//     location: {
//         city: 'Vadodara',
//         state: 'Gujarat'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed. ',e);
// });

// database.ref().remove().then(() => {
//     console.log('Data was removed');
// }).catch((e) => {
//     console.log('Data was not removed ', e);
// });

