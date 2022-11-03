import React from 'react'
import logo from "../images/cinema.jpg"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt=""></img>
        </div>
        <div className="middle">
        <button>
          SEARCH
          <SearchIcon />
        </button>
        </div>
        <div className="right">
          <div className="cart">
            <ShoppingCartIcon className='icon'/>
            <span>CART</span>
          </div>
          <div className="login">
            <AccountCircleIcon className='icon'/>
            <span>LOGIN</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar