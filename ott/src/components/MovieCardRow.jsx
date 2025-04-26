import React, { useState, useRef } from 'react';
import MovieCard from './MovieCard';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const MovieDetailPanel = ({ movie, onClose, onWatchClick, showVideo }) => (
  <div className="fixed right-0 top-0 w-[400px] h-full bg-white shadow-xl z-20 overflow-y-auto">
    <div className="p-6">
      <h3 className="text-2xl font-bold">{movie.name}</h3>
      <img src={movie.image} alt={movie.name} className="w-full h-48 object-cover my-4 rounded-lg" />
      <button
        onClick={onWatchClick}
        className="mt-4 bg-blue-500 text-white p-2 rounded-full w-full"
      >
        Watch Trailer
      </button>

      {showVideo && (
        <div className="my-4">
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${movie.videoId}`}
            title={`${movie.name} Trailer`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl"
          />
        </div>
      )}

      <button
        onClick={onClose}
        className="mt-4 bg-red-500 text-white p-2 rounded-full w-full"
      >
        Close
      </button>
      <p className="text-lg">{movie.description}</p>
      <p className="text-sm mt-2"><strong>Release Date:</strong> {movie.releaseDate}</p>
      <p className="text-sm mt-2"><strong>Director:</strong> {movie.director}</p>
      <p className="text-sm mt-2"><strong>Genre:</strong> {movie.genre}</p>

     
    </div>
  </div>
);

const MovieCardRow = ({ genre, movies }) => {
 
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showVideo, setShowVideo] = useState(false)
  const scrollRef = useRef();

  const scroll = (direction) => {
    const distance = direction === 'left' ? -300 : 300;
    scrollRef.current?.scrollBy({ left: distance, behavior: 'smooth' })
  }

  return <>
    <h1 className="text-2xl font-bold text-black mb-4 ml-4 ">{genre}</h1>
    <div className="px- relative">
     

     
    <button
  onClick={() => scroll('left')}
  className="absolute h-16 left-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white p-2 rounded-full z-10 shadow-lg hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
>
  <IoIosArrowBack />
</button>


<button
  onClick={() => scroll('right')}
  className="absolute h-16 right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-blue-400 via-purple-500 to-pink-500 text-white p-2 rounded-full z-10 shadow-lg hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
>
  <IoIosArrowForward />
</button>


  
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth px-12"
      >
        {movies.map((movie) => (
          <div key={movie.id} onClick={() => { setSelectedMovie(movie); setShowVideo(false); }}>
            <MovieCard name={movie.name} image={movie.image} />
          </div>
        ))}
      </div>

   
      {selectedMovie && (
        <MovieDetailPanel
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          onWatchClick={() => setShowVideo(true)}
          showVideo={showVideo}
        />
      )}
    </div>
  ;
  </>};

export default MovieCardRow;
