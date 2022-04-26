import React, { createContext, useEffect, useState } from 'react';

import { app } from '../services/firebaseConfig'

import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from 'react-router-dom';

import { Flip, toast } from 'react-toastify';

const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({})

export function AuthGoogleProvider({ children }) {
    const [user, setUser] = useState(null)

    const auth = getAuth(app);

    useEffect(() => {
        const loadStoreAuth = () => {
            const sessionToken = sessionStorage.getItem('@AuthFireBase:token')
            const sessionUser = sessionStorage.getItem('@AuthFireBase:user')

            if (sessionToken && sessionUser) {
                setUser(sessionUser)
            }
        }
        loadStoreAuth();
    }, [])

    const signInGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUser(user)
                sessionStorage.setItem("@AuthFireBase:token", token)
                sessionStorage.setItem("@AuthFireBase:user", JSON.stringify(user))
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    const signInEmail = (auth, email, password) => {
        const notifyErrorAuth = () => toast.error('Senha ou e-mail inválidos', {
            transition: Flip,
        })

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
                sessionStorage.setItem("@AuthFireBase:user", JSON.stringify(user))
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                notifyErrorAuth()
            });
    }


    function signOut() {
        sessionStorage.clear()
        setUser(null)

        return <Navigate to="/" />
    }

    return (
        <AuthGoogleContext.Provider
            value={{ signInGoogle, signed: !!user, user, signOut, signInEmail, auth }}
        >
            {children}
        </AuthGoogleContext.Provider>
    );
}
