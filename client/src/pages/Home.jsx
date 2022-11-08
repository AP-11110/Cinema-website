import batman from "../images/batman.jpeg"
import coda from "../images/coda.jpeg"
import dumbledore from "../images/dumbledore.jpeg"
import arrow from "../images/arrow.png"
import { useState, useRef } from "react"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import MovieCard from '../components/MovieCard'
import compartiment from '../images/compartiment.jpeg'
import dumble from '../images/dumble.jpeg'
import codaPoster from '../images/codaposter.jpeg'

// temp
const movies = [
  {
      movie: compartiment,
      title: 'Compartiment N6',
      age: '15A',
      genre: 'Romance | Drama',
      showing: ['11:00', '17:30', '21:15']
  },
  {
      movie: codaPoster,
      title: 'Coda',
      age: '12A',
      genre: 'Comedy | Drama | Music',
      showing: ['19:15', '22:00']
  },
  {
      movie: dumble,
      title: 'The Secrets of Dumbledore',
      age: '12A',
      genre: 'Adventure | Fantastic',
      showing: ['10:30', '14:30', '18:00']
  }
]

// temp data
const days = ['TODAY', 'THU 7 APR', 'FRI 8 APR', 'SAT 9 APR', 'SUN 10 APR', 'MON 11 APR', 'TUE 12 APR']


const Home = () => {
    const [slide, setSlide] = useState(1);
    const [movieDay, setMovieDay] = useState(days[0]);
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
    <>
        <div className='w-full h-[40rem] overflow-hidden relative flex'>
            <div ref={ref} className='flex ease-in-out duration-1000'>
                <img className='min-w-full object-cover' src={batman} alt="" />
                <img className='min-w-full object-cover' src={dumbledore} alt="" />
                <img className='min-w-full object-cover' src={coda} alt="" />
            </div>
            <div className='absolute left-0 right-0 top-0 bottom-0 flex justify-between items-center z-9'>
                <div>
                    <ArrowForwardIosIcon sx={{ fontSize: 48 }} className="rotate-180 text-white opacity-70 cursor-pointer hover:opacity-100" onClick={prev}/>
                </div>
                <div>
                    <ArrowForwardIosIcon sx={{ fontSize: 48 }} className="text-white opacity-70 cursor-pointer hover:opacity-100" onClick={next}/>
                </div>
            </div>
        </div>
        <div className="flex justify-between items-center my-6">
            {days.map(day => (
                <button className={`text-white px-7 py-3 font-medium rounded-2xl text-lg cursor-pointer ${day === movieDay ? 'bg-brightRed' : 'bg-black hover:text-brightRed'}`} onClick={() => setMovieDay(day)}>{day}</button>
            ))}
        </div>
        <div className="flex justify-between">
            {movies.map(movie => (
                <MovieCard movie={movie} />
            ))}
        </div>

    </>
  )
}

export default Home