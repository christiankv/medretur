import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCv6eSI2BlfdFNBN9UR44iGSPLwrZGCdUs",
  authDomain: "medretur-b42e3.firebaseapp.com",
  projectId: "medretur-b42e3",
  storageBucket: "medretur-b42e3.appspot.com",
  messagingSenderId: "548546343345",
  appId: "1:548546343345:web:f09b04627c64bd10fb4d90",
  measurementId: "G-7GEFXNYZ9Q"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);