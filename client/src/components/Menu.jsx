import React from 'react'


const Menu = () => {
  return (
    <div className='flex justify-around shadow-xl'>
      <div className='flex'>
        <ul className='list-none text-black font-normal border-none text-lg px-2 py-3 cursor-pointer hover:bg-brightRed hover:text-white'>
          <li>HOME</li>
        </ul>
        <ul className='list-none text-black font-normal border-none text-lg px-2 py-3 cursor-pointer hover:bg-brightRed hover:text-white'>
          <li>WHAT'S ON?</li>
        </ul>
        <ul className='list-none text-black font-normal border-none text-lg px-2 py-3 cursor-pointer hover:bg-brightRed hover:text-white'>
          <li>EVENTS</li>
        </ul>
        <ul className='list-none text-black font-normal border-none text-lg px-2 py-3 cursor-pointer hover:bg-brightRed hover:text-white'>
          <li>FOODS & DRINKS</li>
        </ul>
        <ul className='list-none text-black font-normal border-none text-lg px-2 py-3 cursor-pointer hover:bg-brightRed hover:text-white'>
          <li>ABOUT US</li>
        </ul>
      </div>
      <div>
        <button className='bg-brightRed text-white font-medium text-lg border-none px-2 py-3 cursor-pointer hover:bg-white hover:text-brightRed'>BOOK NOW</button>
      </div> 
    </div>
  )
}

export default Menu