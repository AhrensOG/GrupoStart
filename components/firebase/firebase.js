// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const apiKey = process.env.NEXT_PUBLIC_APIKEY_FIREBASE;
const authDomain = process.env.NEXT_PUBLIC_AUTHDOMAIN_FIREBASE;
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID_FIREBASE;
const storageBucket = process.env.NEXT_PUBLIC_STORAGE_BUCKET_FIREBASE;
const messagingSenderId = process.env.NEXT_PUBLIC_MESSAGIN_SENDER_ID_FIREBASE;
const appId = process.env.NEXT_PUBLIC_APP_ID_FIREBASE;
const measurementId = process.env.NEXT_PUBLIC_MEASUREMENT_ID_FIREBASE;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
let analytics;

if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

 
export { firestore, analytics };

