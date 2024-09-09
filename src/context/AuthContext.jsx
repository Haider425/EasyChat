import { createContext, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"; // Updated import for signInWithPopup

import { auth } from '../firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Updated to use signInWithPopup
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const userCred = await signInWithPopup(auth, provider);  // Using signInWithPopup instead of signInWithRedirect
            setCurrentUser(userCred.user); // Optional: Update state with the signed-in user
        } catch (error) {
            console.error("Error signing in with Google: ", error); // Handle errors
        }
    };

    const logout = () => signOut(auth);

    const value = {
        currentUser,
        setCurrentUser,
        signInWithGoogle,
        logout,
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const userAuth = () => {
    return useContext(AuthContext);
};
