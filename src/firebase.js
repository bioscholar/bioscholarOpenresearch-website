import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database'; // Use getDatabase for Realtime Database
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDZRK3pQeYMQBx9yT4fPU_Lwjl8V67TtVs",
  authDomain: "bioscholar-auth.firebaseapp.com",
  projectId: "bioscholar-auth",
  storageBucket: "bioscholar-auth.appspot.com",
  messagingSenderId: "1015150112218",
  appId: "1:1015150112218:web:aa2751b9d78ea6ae0324e3",
  measurementId: "G-8LR2YCHQ7F"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const database = getDatabase(app); // For Realtime Database
const storage = getStorage(app);


export { auth, database, storage };