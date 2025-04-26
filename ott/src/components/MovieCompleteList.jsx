import React from "react";
import MovieCardRow from "./MovieCardRow";
import {actionMovies} from "../utils/moviecompletelistaction"
import {adventureMovies} from "../utils/moviecompletelistadventure"
import {trendingmovies} from "../utils/toptentrending"
import {scifiMovies} from "../utils/moviecompletelistscifi"
import { topWebShows } from "../utils/moviecompletelistwebshow";
import { topAnimeSeries } from "../utils/moviecompletelistanime";
const MovieCompleteList = () => {
 

  return (
    <>
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
<MovieCardRow 
  genre="Top Shows "
  movies={adventureMovies}
/>
<MovieCardRow 
  genre="Top Web Shows "
  movies={topWebShows}
/>
<MovieCardRow 
  genre="Anime "
  movies={topAnimeSeries}
/>

    </>
  );
};

export default MovieCompleteList;
