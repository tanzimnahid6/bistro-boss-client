import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Home from "../pages/Home/Home"
import Menu from "../pages/Home/Menu/Menu"
import Order from "../pages/Order/Order"
import Login from "../pages/Login"
import SignUp from "../pages/Shared/SignUp"
import Secret from "../pages/Secret"
import PrivetRout from "./PrivetRout"
import Dashboard from "../Layout/DashBoard/Dashboard"
import MyCart from "../pages/Dashboard/MyCart"
import AllUsers from "../Layout/DashBoard/AllUsers/AllUsers"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: (
          <PrivetRout>
            <Secret></Secret>
          </PrivetRout>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRout>
        <Dashboard></Dashboard>
      </PrivetRout>
    ),
    children: [
      {
        path: "myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
export default router
