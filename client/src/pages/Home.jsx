import batman from "../images/batman.jpeg"
import coda from "../images/coda.jpeg"
import dumbledore from "../images/dumbledore.jpeg"
import arrow from "../images/arrow.png"
import { useState, useRef } from "react"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Home = () => {
    const [slide, setSlide] = useState(1);
    const ref = useRef();

    const prev = () => {
        if(slide > 1) {
            ref.current.style.transform = `translateX(-${(slide - 2) * ref.current.offsetWidth}px)`;
            setSlide(prev => prev - 1);
        } else {
            ref.current.style.transform = `translateX(-${(3 - 1) * ref.current.offsetWidth}px)`;
            setSlide(3);
        }
    }

    const next = () => {
        if(slide < 3) {
            ref.current.style.transform = `translateX(-${slide * ref.current.offsetWidth}px)`;
            setSlide(prev => prev + 1);
        } else {
            ref.current.style.transform = 'translateX(0px)';
            setSlide(1);
        }
    }

  return (
    <div className='w-full h-3/6 overflow-hidden relative flex'>
        <div ref={ref} className='flex ease-in-out duration-1000'>
            <img className='min-w-full object-cover' src={batman} alt="" />
            <img className='min-w-full object-cover' src={dumbledore} alt="" />
            <img className='min-w-full object-cover' src={coda} alt="" />
        </div>
        <div className='absolute left-0 right-0 top-0 bottom-0 flex justify-between items-center z-50'>
            <div>
                <ArrowForwardIosIcon className="rotate-180 text-white opacity-70 cursor-pointer hover:opacity-100" onClick={prev}/>
            </div>
            <div>
                <ArrowForwardIosIcon className="text-white opacity-70 cursor-pointer hover:opacity-100" onClick={next}/>

            </div>
        </div>
    </div>
  )
}

export default Home