import { initializeApp } from "firebase/app";
import{
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA965oDtmqutG7di_5_247r6Gn1EsljbQE",
  authDomain: "twitter-api-mash.firebaseapp.com",
  projectId: "twitter-api-mash",
  storageBucket: "twitter-api-mash.appspot.com",
  messagingSenderId: "464216096036",
  appId: "1:464216096036:web:cbc0eafecea60831f807b1"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

const registerWithEmailAndPassword = async (email,password) => {
    try
    {
       await createUserWithEmailAndPassword(auth,email,password);
       console.log(auth)
    }
    catch(error)
    {
      console.log(error);
      alert(error.message);
    }
}


 const loginWithEmailAndPassword = async (email,password) => {
    try
    {
       await signInWithEmailAndPassword(auth,email,password);
    }
    catch(error)
    {
      console.log(error);
    }
}

const logout = () => {
    signOut(auth);
}


export
{
    auth,
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    logout
}