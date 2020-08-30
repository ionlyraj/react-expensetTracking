import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABSE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase , database as default };

// database.ref('expenses').push({
//     description: 'coffee',
//     amount: 50,
//     note: 'normal filter cofee',
//     createdAt: 107347773
// });

//   firebase.database().ref().set({
//       name: 'Rajeev Kumar',
//       age: 36,
//       stressLevel: 6,
//       job: {
//           title: 'Software Engineer',
//           company: 'Google'
//       },
//       location: {
//           city: 'Bangalore',
//           country: 'India'
//       }
//   }).then( () => {
//       console.log('Data written to db');
//   }).catch((e)=>{
//       console.log('Error: ', e);
//   });

// firebase.database().ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }).then(()=>{
//     console.log('Data removed from db');
// }).catch((e)=>{
//     console.log('Error: ',e);
// });