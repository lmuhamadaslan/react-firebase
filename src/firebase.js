import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD7xWZtOCxOs8YpSG_pfYlunvzPSEd3Vqs",
    authDomain: "reactfirebase-97030.firebaseapp.com",
    projectId: "reactfirebase-97030",
    storageBucket: "reactfirebase-97030.appspot.com",
    messagingSenderId: "131248554071",
    appId: "1:131248554071:web:dd1bd67d210b54b4c22312"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)