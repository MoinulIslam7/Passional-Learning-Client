import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/firebase.init'


export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark'? true : false);
    useEffect(() =>{
        if(darkMode){
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
        else{
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }

    },[darkMode])

    const toggleDarkMode = () =>{
        setDarkMode(!darkMode);
    }

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signInWithGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log("Auth state change", currentUser);
        })

        return () => {
            unSubscribe();
        }

    }, [])

    const authInfo = { user, loading, darkMode,toggleDarkMode, createUser, signIn, signInWithGoogle, signInWithGitHub, logOut , updateUserProfile}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;