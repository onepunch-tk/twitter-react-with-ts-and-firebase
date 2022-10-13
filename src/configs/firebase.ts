import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {AUTH_ERROR_CODES} from "./auth-error-code";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APPID
};

const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);

export const signIn = async (email: string, password: string) => {
    let success: boolean = true;
    try {
        const userCredential = await signInWithEmailAndPassword(authService, email, password);
        return success;

    } catch ({message, code}) {

        switch (code) {
            case AUTH_ERROR_CODES.USER_DELETED:
                return success = false;
        }
    }
};

export const signUp = async (email: string, password: string) => {
    try {
        await createUserWithEmailAndPassword(authService, email, password)
    } catch ({message, code}) {

    }
};
