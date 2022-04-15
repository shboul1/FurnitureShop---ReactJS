import { initializeApp } from "firebase/app";
const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "ecommercereact-d9c6a.firebaseapp.com",
  projectId: "ecommercereact-d9c6a",
  storageBucket: "ecommercereact-d9c6a.appspot.com",
  messagingSenderId: "1081541352738",
  appId: "1:1081541352738:web:46bc725be39b84fe17597b",
  measurementId: "G-VFFDJ1JYD2",
};

const app = initializeApp(firebaseConfig);
