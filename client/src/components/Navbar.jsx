import { useState } from 'react'
import logo from "../images/cinema.jpg"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// temp movies
const MOVIES = ['SUPERMAN', 'INCEPTION', 'AVATAR', 'SHREK'];

const Navbar = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [movie, setMovie] = useState('SELECT MOVIE');
  console.log('first')
  return (
    <div>
      <div className='bg-black flex justify-between items-center'>
        <div className='flex justify-center w-1/5'>
          <img src={logo} className='w-3/5' alt=""></img>
        </div>
        <div className='w-3/5 flex justify-center gap-4'>
          <div className='group/parent relative block dropdown'>
            <button className='bg-white w-40 text-black p-2 text-base border-none cursor-pointer dropbtn'>{movie}</button>
            <div className='hidden absolute bg-white shadow-md z-10 w-40 group-hover/parent:block'>
              {MOVIES.map(movie => (
                <span onClick={() => setMovie(movie)} className='list'>{movie}</span>
              ))}
            </div>
          </div>
          <div>
            <DatePicker className='text-center py-2' selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
          <button className='bg-brightRed text-white font-medium flex items-center gap-1.5 border-0 rounded-full text-lg cursor-pointer px-3 py-1 hover:text-brightRed hover:bg-black'>
            SEARCH
            <SearchIcon />
          </button>
        </div>
        <div className='w-1/5 flex justify-start gap-10 text-white'>
          <div className='flex gap-3 cursor-pointer hover:text-brightRed'>
            <ShoppingCartIcon className='w-8'/>
            <span className='text-lg flex items-center'>CART</span>
          </div>
          <div className='flex gap-3 cursor-pointer hover:text-brightRed'>
            <AccountCircleIcon className='w-8'/>
            <span className='text-lg flex items-center'>LOGIN</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar