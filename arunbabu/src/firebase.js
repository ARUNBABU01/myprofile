import {initializeApp}  from 'firebase/app'
import {getDatabase} from 'firebase/database';
import * as base from './Base'


const firebaseConfig = {
    apiKey: base.FIREBASE_API_KEY,
    authDomain: base.FIREBASE_AUTH_DOMAIN,
    databaseURL: base.FIREBASE_DATABASE_URL,
    projectId: base.FIREBASE_PROJECT_ID,
    storageBucket: base.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: base.FIREBASE_MESSAGING_SENDER_ID,
    appId: base.FIREBASE_APP_ID,
    measurementId: base.FIREBASE_MEASUREMENT_ID,
  };

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp)
export default database;