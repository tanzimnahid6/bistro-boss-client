import { createContext, useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged,  signInWithEmailAndPassword, signOut } from "firebase/auth"
import app from "../../firebase.config"
import { setLogLevel } from "firebase/app"
const auth = getAuth(app)

export const AuthContext = createContext(null)
const AuthProvide = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  //create user =========================================
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(email,password,auth)
  }

  //sign in method=======================================
  const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(email,password,auth)

  }
  //logout method ==============================
  const logOut = ()=>{
    setLogLevel(true)
    return signOut()
  }
  //on auth state change=================================
  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        console.log(currentUser);
        setLoading(false)
    })
    return ()=>unsubscribe()
  },[])

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    logOut
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvide
