import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyARi2cil_2IyuU5Nfm-CHwpfQIwZ1t6xt4",
    authDomain: "netflix-clone-50cfd.firebaseapp.com",
    projectId: "netflix-clone-50cfd",
    storageBucket: "netflix-clone-50cfd.firebasestorage.app",
    messagingSenderId: "753442774809",
    appId: "1:753442774809:web:072541d52d10dc51c2af88",
    measurementId: "G-ND2KQ2VN8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Sign Up
const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;

        // Save user info in Firestore
        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });

        console.log("User signed up and saved to Firestore!");
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

// Login
const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

// Logout
const logout = () => {
    signOut(auth);
}

export { auth, db, login, signup, logout };
