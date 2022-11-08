import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div className='w-1/4 min-h-min flex flex-col shadow-md'>
        
    <img className='h-5/6 object-fit' src={movie.movie}></img>
        <div className='p-3 relative'>
            <span className='absolute bg-brightOrange py-1.5 px-5 -mt-20 text-sm font-medium text-white shadow-md'>NEW</span>
            <h1 className='text-2xl font-medium'>{movie.title}</h1>
            <div className='flex justify-between items-center pb-2'>
                <span className=' text-xs'>{movie.genre}</span>
                <span className="bg-red-600 text-white p-2 rounded-full">{movie.age}</span>
            </div>
            <div className='flex justify-start gap-6'>
                {movie.showing.map(show => (
                    <button className=' border-solid border-black border-2 px-5'>{show}</button>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default MovieCard