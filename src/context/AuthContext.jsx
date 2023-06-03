import { createContext, useEffect, useState } from "react";
import { signInWithPopup, signInWithRedirect, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, provider } from '../firebase/config'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        email: null,
        logged: false
    })

    console.log(user)

    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
            const { user } = userCredential

            setUser({
                email: user.email,
                logged: true
            })
        })
    }

    const loginWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result)
        })
    }

    const register = (values) => {
        // receives auth
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .catch(e => console.log(e.message))
    }

    const logout = () => {
        signOut(auth)
    }

    useEffect(() => {    
        onAuthStateChanged(auth, (user) => {
            console.log(user)
            if (user) {
                setUser({
                    email: user.email,
                    logged: true
                })
            } else {
                setUser({
                    email: null,
                    logged: null
                })
            }
        })
    },[])

    return (

        <AuthContext.Provider value={{
            user,
            login,
            register,
            logout,
            loginWithGoogle
        }}>
            {children}
        </AuthContext.Provider>
    )
}