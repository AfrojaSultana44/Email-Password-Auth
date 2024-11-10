import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCAKD0I2svcLtpwgyMdL_U2lBtnXlsNNAY",
  authDomain: "email-password-auth-b550c.firebaseapp.com",
  projectId: "email-password-auth-b550c",
  storageBucket: "email-password-auth-b550c.firebasestorage.app",
  messagingSenderId: "264337370117",
  appId: "1:264337370117:web:f69955b1de585d9d7f406c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;