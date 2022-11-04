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
            ref.current.style.transform = `translateX(-${(slide - 2) * 1440}px)`;
            setSlide(prev => prev - 1);
        } else {
            ref.current.style.transform = `translateX(-${(3 - 1) * 1440}px)`;
            setSlide(3);
        }
    }

    const next = () => {
        if(slide < 3) {
            ref.current.style.transform = `translateX(-${slide * 1440}px)`;
            setSlide(prev => prev + 1);
        } else {
            ref.current.style.transform = 'translateX(0px)';
            setSlide(1);
        }
    }

  return (
    <div className="frame">
        <div>

        </div>
        <div ref={ref} className="slider">
            <img className="image" src={dumbledore} alt="" />
            <img className="image" src={batman} alt="" />
            <img className="image" src={coda} alt="" />
        </div>
        <div className="arrows">
            <div>
                <ArrowForwardIosIcon className="arrow left" onClick={prev}/>
            </div>
            <div>
                <ArrowForwardIosIcon className="arrow" onClick={next}/>

            </div>
        </div>
        <div className="bottom">
        </div>
    </div>
  )
}

export default Home