import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {movies} from "../utils/Search";
import { FaSearch } from "react-icons/fa";
const Nav = () => {


  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

 
  const filteredMovie = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-purple-800/80 via-indigo-800/40 to-blue-800/40 backdrop-blur-md text-white px-4 md:px-10 shadow-sm
"
>
      <div className="flex justify-between items-center">
    
        <div className="flex items-center gap-2">
          <div className="w-20 overflow-hidden rounded-md">
            <video
              src="/White Simple Animated Gaming Team Logo (1).mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-extrabold text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 hover:from-purple-700 hover:via-pink-700 hover:to-red-600 transition-all duration-300 ease-in-out">
  View Flix
</span>


        </div>

        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <NavLink
              to="/"
              className="font-bold text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 hover:from-purple-700 hover:via-pink-700 hover:to-red-600 transition-all duration-300 ease-in-out"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movie"
              className="font-bold text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 hover:from-purple-700 hover:via-pink-700 hover:to-red-600 transition-all duration-300 ease-in-out"
            >
              Movie
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/webshows"
              className="font-bold text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 hover:from-purple-700 hover:via-pink-700 hover:to-red-600 transition-all duration-300 ease-in-out"
            >
              Web Shows
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/anime"
              className="font-bold text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 hover:from-purple-700 hover:via-pink-700 hover:to-red-600 transition-all duration-300 ease-in-out"
            >
              Anime
            </NavLink>
          </li>
          <li className="font-bold text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 hover:from-purple-700 hover:via-pink-700 hover:to-red-600 transition-all duration-300 ease-in-out">
            Categories
          </li>
          <li>
  <div className="relative w-full">
    {/* Search Icon */}
    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white">
      <FaSearch className="text-white text-lg" />
    </span>

    {/* Input Field */}
    <input
      type="text"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        setSelectedMovie(null);
        setShowVideo(false);
      }}
      placeholder="Search movies..."
      className="w-full pl-10 p-2 border border-white bg-gray-800 text-white placeholder-white placeholder-opacity-70 font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 ease-in-out hover:border-none hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 hover:placeholder-opacity-100"
    />
  </div>
</li>
        </ul>

        {/* Auth Button */}
        <div className="hidden md:block text-sm">
          <NavLink
            to="/signup"
            className="font-medium text-xl md:text-large text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-700 hover:via-pink-700 hover:to-red-600 transition-all duration-300 ease-in-out hover:font-bold"
          >
            Signup
          </NavLink>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 md:hidden bg-[#0B0D0F] bg-opacity-90 rounded-lg px-4 py-6 space-y-4">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block text-lg text-[#69a5ff] font-semibold hover:text-white"
          >
            Home
          </NavLink>
          <NavLink
            to="/movie"
            onClick={() => setMenuOpen(false)}
            className="block text-lg text-[#69a5ff] font-semibold hover:text-white"
          >
            Movie
          </NavLink>
          <NavLink
            to="/webshows"
            onClick={() => setMenuOpen(false)}
            className="block text-lg text-[#69a5ff] font-semibold hover:text-white"
          >
            Web Shows
          </NavLink>
          <NavLink
            to="/anime"
            onClick={() => setMenuOpen(false)}
            className="block text-lg text-[#69a5ff] font-semibold hover:text-white"
          >
            Anime
          </NavLink>
          <span className="block text-lg text-white cursor-pointer hover:text-red-400">
            Categories
          </span>
          <input
  type="text"
  value={search}
  onChange={(e) => {
    setSearch(e.target.value);
    setSelectedMovie(null);
    setShowVideo(false);
  }}
  placeholder="Search movies..."
  className="w-full p-2 border border-blue-500 bg-gray-800 text-white placeholder-white font-bold rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
/>



          <NavLink
            to="/signup"
            onClick={() => setMenuOpen(false)}
            className="block text-sm text-[#69a5ff] hover:text-white"
          >
            Signup
          </NavLink>
        </div>
      )}

      {/* Search Suggestions (only shown when search is non-empty) */}
      {search && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg max-w-md mx-auto px-4 py-2 z-40">
          <ul className="space-y-1">
            {filteredMovie.length > 0 ? (
              filteredMovie.map((movie) => (
                <li
                  key={movie.id}
                  onClick={() => {
                    setSelectedMovie(movie);
                    setShowVideo(false); // Reset video state when selecting a new movie
                  }}
                  className="cursor-pointer p-2 hover:bg-gray-100 rounded border text-black text-sm"
                >
                  {movie.title} ({movie.year})
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500 text-sm">No movies found</li>
            )}
          </ul>
        </div>
      )}

      {/* Selected Movie Card (only shown when a movie is selected) */}
      {selectedMovie && (
        <div className="pt-24 px-4 md:px-10 max-w-lg mx-auto z-30">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-xl">
            <img
              src={selectedMovie.poster}
              alt={selectedMovie.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {selectedMovie.title} ({selectedMovie.year})
              </h2>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                {selectedMovie.description}
              </p>
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={() => setShowVideo(!showVideo)}
                  className="flex-1 bg-[#3B82F6] text-white py-2 rounded-lg hover:bg-[#2563EB] transition duration-200 text-sm font-semibold"
                >
                  {showVideo ? "Hide Trailer" : "Watch Trailer"}
                </button>
                <button
                  onClick={() => {
                    setSelectedMovie(null);
                    setShowVideo(false);
                  }}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition duration-200 text-sm font-semibold"
                >
                  Close
                </button>
              </div>
              {showVideo && (
                <div className="mt-4">
                  <iframe
                    width="100%"
                    height="200"
                    src={`https://www.youtube.com/embed/${selectedMovie.videoId}`}
                    title={`${selectedMovie.title} Trailer`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;