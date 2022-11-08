import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import "./index.css"
import ComingSoon from "./components/ComingSoon"

const Layout = () => {
  return (
    <>
    <div className='flex justify-center'>
      <div className='container h-fit'>
        <Navbar />
        <Menu />
        <Outlet />
        </div>
      </div>
      <ComingSoon />
      <Footer />
    </>
    
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
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
      <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
