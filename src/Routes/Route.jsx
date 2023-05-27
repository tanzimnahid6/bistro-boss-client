import { createBrowserRouter} from "react-router-dom"
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Home/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login";
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
          path:'login',
          element:<Login></Login>
        }
      ]
    },
  ]);
  export default router