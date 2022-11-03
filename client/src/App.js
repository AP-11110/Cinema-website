import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import Register from "./pages/Register"
import "./style.scss"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Menu />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // {
      //   path: "/",
      //   element: <Home />
      // },
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
])

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
