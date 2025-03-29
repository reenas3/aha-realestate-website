import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  // Replace with your Firebase config
    apiKey: "AIzaSyD9wVZFXC_LhezpX2TQxKxAWzrXMePphEA",
  authDomain: "ahmed-company.firebaseapp.com",
  projectId: "ahmed-company",
  storageBucket: "ahmed-company.firebasestorage.app",
  messagingSenderId: "289086303389",
  appId: "1:289086303389:web:f082c7b40eb28fcad8b874"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); 