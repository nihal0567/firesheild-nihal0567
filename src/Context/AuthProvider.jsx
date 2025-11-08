import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import app from '../firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  signInWithEmailAndPassword,  signOut, updateProfile } from "firebase/auth";






const AuthProvider = ({ children }) => {
    const [userName, setUserName] = useState(null)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);
    const [email, setEmail] = useState("")

 

 
    const updateUser=(updateData)=>{
        return updateProfile(auth.currentUser , updateData)
    }
    
    // const handleForgotPassword=(email)=>{
    //     return sendPasswordResetEmail(auth, email)
    // }
    
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const logOut = () => {
        return signOut(auth)
    }
    
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
  


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
         //   console.log(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUser,
        userName,
        setUserName,
        email,
        setEmail
    }
    return (

        <AuthContext value={authData} >
            {children}
        </AuthContext>
    );
};

export default AuthProvider;