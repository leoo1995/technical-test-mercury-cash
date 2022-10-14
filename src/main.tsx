import React from "react"
import ReactDOM from "react-dom/client"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import "normalize.css"
import "./styles/global.css"
import { LoginPage } from "@components/pages"
import { RegisterPage } from "./components/pages/RegisterPage/index"
import { AnimatePresence } from "framer-motion"

const routes = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AnimatePresence>
        <Routes>
          {routes.map(route => (
            <Route key={route.path} element={route.element} path={route.path} />
          ))}
        </Routes>
      </AnimatePresence>
    </Router>
  </React.StrictMode>,
)
