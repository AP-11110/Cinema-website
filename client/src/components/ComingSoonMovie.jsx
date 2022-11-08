import React from 'react'



const ComingSoonMovie = ({movie}) => {
  return (
    <div className='flex w-[31%] flex-col'>
        <img src={movie.movie} className="h-96 object-fill" />
        <div className='bg-white h-full p-5 shadow-lg flex flex-col gap-2'>   
            <span className='block font-medium text-lg'>{movie.title}</span>
            <span className='block text-xs'>{movie.genre}</span>
            <span className='text-xs'><span className="font-semibold">Description </span>{movie.desc}</span>
        </div>
    </div>
  )
}

export default ComingSoonMovie