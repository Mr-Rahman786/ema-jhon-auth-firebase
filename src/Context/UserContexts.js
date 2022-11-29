import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContexts = ({ children }) => {
    const [user, setUser] = useState(null);

    // create new
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign in
    const singIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // sign out / log out
    const logOut = () => {
        return signOut(auth)
    }
    // 
    useEffect(() => {
        const unsubsCribe = onAuthStateChanged(auth, currentUser => {
            console.log('current use :', currentUser)
            setUser(currentUser);
        })
        return ()=> unsubsCribe();
    }, [])



    const authInfo = { user, creatUser, singIn, logOut };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContexts;