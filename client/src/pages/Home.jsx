import batman from "../images/batman.jpeg"
import coda from "../images/coda.jpeg"
import dumbledore from "../images/dumbledore.jpeg"
import arrow from "../images/arrow.png"
import { useState } from "react"
const Home = () => {
    const [slide, setSlide] = useState(0);
    
  return (
    <div className="frame">
        <div className="arrows">
            <div>
                <img src={arrow} className="arrow left" alt="" />
            </div>
            <div>
                <img src={arrow} className="arrow right" alt="" onClick={() => setSlide(slide + 1)}/>
            </div>
        </div>
        <div className="bottom">
        </div>
        <div className="slider" style={{ transform: `translateX(-${slide * 1440}px)` }}>
            <img className="image" src={batman} alt="" />
            <img className="image" src={dumbledore} alt="" />
        </div>
        
    </div>
  )
}

export default Home