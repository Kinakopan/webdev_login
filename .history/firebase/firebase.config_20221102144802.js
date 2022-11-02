import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // apiKey: "AIzaSyChoXqfva42ziSxyQTRgxDKC2V1-n8Q8-g",
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: "login-with-firebase-8dd28.firebaseapp.com",
  projectId: "login-with-firebase-8dd28",
  storageBucket: "login-with-firebase-8dd28.appspot.com",
  messagingSenderId: "234966019141",
  appId: "1:234966019141:web:b5d4d804b90397e259472c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
