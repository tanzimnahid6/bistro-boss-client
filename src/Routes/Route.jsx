import { createBrowserRouter} from "react-router-dom"
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Home/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login";
import SignUp from "../pages/Shared/SignUp";
import Secret from "../pages/Secret";
import PrivetRout from "./PrivetRout";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'secret',
          element:<PrivetRout><Secret></Secret></PrivetRout>
        }
      
      ]
    },
  ]);
  export default router