import React from 'react'

const Menu = () => {
  return (
    <div className='menu'>
      <div className="left">
        <ul>
          <li>HOME</li>
        </ul>
        <ul>
          <li>WHAT'S ON?</li>
        </ul>
        <ul>
          <li>EVENTS</li>
        </ul>
        <ul>
          <li>FOODS & DRINKS</li>
        </ul>
        <ul>
          <li>ABOUT US</li>
        </ul>
      </div>
      <div className="right">
        <button>BOOK NOW</button>
      </div>
    </div>
  )
}

export default Menu