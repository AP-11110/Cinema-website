import React from 'react'
import topgun from "../images/topgun.png";
import doctorstrange from "../images/strange.png";
import theinnocents from "../images/innocents.png";
import ComingSoonMovie from "./ComingSoonMovie"
// temp
const movies = [
    
    {
        movie: doctorstrange,
        title: 'Doctor Strange in the Multiverse of Madness',
        genre: 'Action | Adventure | Fantasy',
        desc: "Dr. Stephen Strange casts a forbidden spell that opens the door to the multiverse and an alternate version of Strange, whose threat to humanity is too great for the combined forces of Strange, Wong, and Wanda Maximoff / Scarlet ",
        from: 'FROM 05/05/22'  
    },
    {
        movie: topgun,
        title: 'Top Gun: Maverick',
        genre: 'Action | Drama',
        desc: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
        from: 'FROM 27/05/22'  
    },
    {
        movie: theinnocents,
        title: 'The Innocents',
        genre: 'Horror | Drama | Mystery',
        desc: "During the bright Nordic summer, a group of children reveal their dark and mysterious powers when the adults aren't looking. In this original and gripping supernatural thriller, playtime takes a dangerous turn.",
        from: 'FROM 20/05/22'  
    }
]

const ComingSoon = () => {
  return (
    <div className="w-full bg-brightOrange mt-10 pb-14">
            <div className='flex justify-center'>
                <div className='container'>
                    <h1 className="text-4xl font-semibold pt-10 pb-5">COMING SOON</h1>
                    <div className='flex justify-between'>
                        {movies.map(movie => (
                            <ComingSoonMovie movie={movie} />
                        ))}
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ComingSoon