import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvide";
import { useLocation, useNavigate } from "react-router-dom";

const Social = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { loginGoogle } = useContext(AuthContext);
  const handleLoginGoogle = () => {
    return loginGoogle()
      .then((result) => {
        const loggedInUser = result.user;
         const saveUser = {
           name: loggedInUser.displayName,
           email: loggedInUser.email,
         };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
           navigate(from, { replace: true });
          });
       
        console.log(loggedInUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <div className="divider"></div>
      <button
        onClick={handleLoginGoogle}
        className="btn btn-circle btn-outline"
      >
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default Social;
