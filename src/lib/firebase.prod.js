import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyAL_Kr0uhuGJ72lQ6Qe2Q-wgVe4_j35F5w',
  authDomain: 'netflix-clone-a1fad.firebaseapp.com',
  projectId: 'netflix-clone-a1fad',
  storageBucket: 'netflix-clone-a1fad.appspot.com',
  messagingSenderId: '638019605960',
  appId: '1:638019605960:web:add0128490737597e29cfd',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
