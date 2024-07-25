import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const creatUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LogInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userLogOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
            console.log('currentUser is', currentUser);
        })
        return ()=>{
            return unSubscribe()
        }
    },[auth])


    const authValue = {
        user,
        loading,
        creatUser,
        LogInUser,
        userLogOut
    }
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;