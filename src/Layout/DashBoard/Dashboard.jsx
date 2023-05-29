import { NavLink, Outlet } from "react-router-dom"
import { BsCartPlusFill, BsFillCalendarCheckFill } from "react-icons/bs"
import { FaWallet } from "react-icons/fa"
import { AiOutlineHome } from "react-icons/ai"
import { BsMenuButtonWide } from "react-icons/bs"

import { MdOutlineBorderColor } from "react-icons/md"
import useCart from "../../Hooks/useCart"

const Dashboard = () => {
    const [,cart] = useCart()
  return (
    <div className="drawer drawer-mobile  my-2 rounded-md">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80  bg-yellow-600 text-base-content">
          <li>
            <NavLink to="/dashboard/home">
              <AiOutlineHome></AiOutlineHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myCart">
              <BsCartPlusFill></BsCartPlusFill> My Cart 
              <div className="badge badge-secondary">
              {cart ? cart.length : 0}
            </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaWallet></FaWallet> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservations">
              <BsFillCalendarCheckFill></BsFillCalendarCheckFill> Reservation
            </NavLink>
          </li>

          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <AiOutlineHome></AiOutlineHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <BsMenuButtonWide></BsMenuButtonWide> Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <MdOutlineBorderColor></MdOutlineBorderColor> Order food
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard
