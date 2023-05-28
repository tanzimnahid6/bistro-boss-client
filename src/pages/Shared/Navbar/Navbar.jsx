import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../../providers/AuthProvide"
import Swal from "sweetalert2"

import { AiOutlineShoppingCart } from "react-icons/ai"
import useCart from "../../../Hooks/useCart"
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const [,cart] = useCart()
  
  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        Swal.fire("Log Out successfully done")
      })
      .catch((error) => {
        // An error happened.
        console.log(error)
      })
  }
  const navOption = (
    <>
      <li>
        <Link link="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <Link to="/secret">Privet route</Link>
      </li>
      <li>
        <Link to="/">
          <button className=" flex items-center">
            <AiOutlineShoppingCart size={24}></AiOutlineShoppingCart>
            <div className="badge badge-secondary">
              {cart ? cart.length : 0}
            </div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          <li>
            <div onClick={handleLogout} className="btn btn-ghost">
              Log out
            </div>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  )
  return (
    <>
      <div className="navbar fixed bg-opacity-80 z-10 max-w-screen-xl mx-auto bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
