import { initializeApp } from "firebase/app";
import { getAuth, 
        signInWithPopup, 
        GoogleAuthProvider, 
        FacebookAuthProvider, 
        TwitterAuthProvider, 
        GithubAuthProvider } from "firebase/auth";

// firebase app config data
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase auth
const auth = getAuth();

// All different platforms provider access from firebase
const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const githubProvider = new GithubAuthProvider();

// Popup functions for all different platforms
export const signInWithGoogle = () =>  signInWithPopup(auth, googleProvider)
export const signInWithFb = () => signInWithPopup(auth, fbProvider)
export const signInWithTwitter = () => signInWithPopup(auth, twitterProvider)
export const signInWithGithub = () => signInWithPopup(auth, githubProvider)
