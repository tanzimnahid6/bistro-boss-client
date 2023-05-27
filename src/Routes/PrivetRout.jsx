import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvide"
import { Navigate, useLocation } from "react-router-dom"

const PrivetRout = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  if(loading){
    return <div className="m-8"><progress className="progress w-56"></progress></div>
  }
  if(!user){
    return <Navigate to="/login" state={{from:location}}></Navigate>
  }
  return <>{children}</>
}

export default PrivetRout
