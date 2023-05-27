// import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"
import { RouterProvider } from "react-router-dom"
import router from "./Routes/Route.jsx"
import AuthProvide from "./providers/AuthProvide"

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <AuthProvide>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </AuthProvide>
  // </React.StrictMode>
)
