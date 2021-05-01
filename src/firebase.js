import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAoiUaxxOIbS-Vb8uudIoJze_V3lJhzEMI',
  authDomain: 'tender-a1b16.firebaseapp.com',
  projectId: 'tender-a1b16',
  storageBucket: 'tender-a1b16.appspot.com',
  messagingSenderId: '991046193502',
  appId: '1:991046193502:web:442b2447c19bf22451bfcf',
  measurementId: 'G-X7BGLFXEMR',
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = app.auth();
const storage = app.storage();

export { db, auth, storage };
