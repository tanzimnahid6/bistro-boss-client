import { createContext, useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged,  signInWithEmailAndPassword, signOut } from "firebase/auth"
import app from "../../firebase.config"

const auth = getAuth(app)

export const AuthContext = createContext(null)
const AuthProvide = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  //create user method ==================================
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  //sign in method=======================================
  const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)

  }
  //logout method =======================================
  const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
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
