import { useState } from 'react'
import logo from "../images/croppedlogo.png"
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  const [email, setEmail] = useState('');
  return (
    <>
      <div className="w-full bg-black left-0 text-white flex justify-center py-10">
        <div className='container flex'>
          <div className="w-1/4 flex flex-col">
            <img src={logo} className="w-3/4 pb-10" alt="" />
            <h1 className="text-3xl pb-5">SUBSCRIBE</h1>
            <span className="text-xs pb-5">Subscribe to our newsletter, so that you can be the first to know about new offers and promotions.</span>
            <div className='pt-1'>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className='w-3/5 py-2 px-3 text-black' placeholder='Enter Email Address'/>
              <button className='bg-brightOrange text-black py-2 px-3 font-medium'>SUBSCRIBE</button>
            </div>
          </div>
          <div className="w-2/4 flex justify-around">
            <div className='flex flex-col'>
                <h1 className='text-3xl font-medium pb-6 pt-2'>MAIN PAGES</h1>
                <ul className='leading-10'>
                  <li>Home</li>
                  <li>What's on?</li>
                  <li>Events</li>
                  <li>Food & Drink</li>
                  <li>About us</li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-medium pb-6 pt-2'>POLICY</h1>
                <ul className='leading-10'>
                  <li>Terms of Usage</li>
                  <li>Privacy Policy</li>
                  <li>Return Policy</li>
                  <li>Contact us</li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-medium pb-6 pt-2'>MEMBER</h1>
                <ul className='leading-10'>
                  <li>Login</li>
                  <li>Sign up</li>
                  <li>Price</li>
                </ul>
            </div>
          </div>
          <div className="w-1/4 gap-10 flex justify-center items-end pb-5">
            <div className='bg-white p-3 flex justify-center rounded-full'>
              <GoogleIcon className='text-black' sx={{ fontSize: 38 }} />
            </div>
            <div className='bg-white p-3 flex justify-center rounded-full'>
              <TwitterIcon className='text-black' sx={{ fontSize: 38 }} />
            </div>
            <div className='bg-white p-3 flex justify-center rounded-full'>
              <FacebookIcon className='text-black' sx={{ fontSize: 38 }} />
            </div>
          </div>
        </div>

      
      </div>
    </>
    
  )
}

export default Footer