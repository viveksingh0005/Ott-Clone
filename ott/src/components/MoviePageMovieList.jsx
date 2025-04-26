import React from 'react'
import MovieCardRow from "./MovieCardRow";
import {actionMovies} from "../utils/moviepagemovielist"
import {adventureMovies} from "../utils/moviepagemovielist"
import {trendingmovies} from "../utils/moviepagemovielist"
import {scifiMovies} from "../utils/moviepagemovielist"
const MoviePageMovieList = () => {
  return <>
             <MovieCardRow 
  genre="Top 10 Trending"
  movies={trendingmovies}
/>
      <MovieCardRow 
  genre="Action "
  movies={actionMovies}
/>

<MovieCardRow 
  genre="Adventure "
  movies={adventureMovies}
/>
<MovieCardRow 
  genre="Scifi "
  movies={scifiMovies}
/>

  </>
}

export default MoviePageMovieList