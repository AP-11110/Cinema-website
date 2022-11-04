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
          <select name="movies">
            <option value="" selected disabled>SELECT A FILM</option>
            <option value="superman">SUPERMAN</option>
            <option value="shrek">SHREK</option>
            <option value="inception">INCEPTION</option>
            <option value="avatar">AVATAR</option>
          </select>
          <select name="date">
            <option value="" selected disabled>SELECT A DATE</option>
          </select>
          <select name="time">
            <option value="" selected disabled>SELECT A TIME</option>
          </select>
          <button>
            SEARCH
            <SearchIcon />
          </button>
        </div>
        <div className="right">
          <div className="item">
            <ShoppingCartIcon className='icon'/>
            <span>CART</span>
          </div>
          <div className="item">
            <AccountCircleIcon className='icon'/>
            <span>LOGIN</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar