import React from 'react'
import MovieCardRow from "./MovieCardRow";
import { topAnimeSeries } from "../utils/moviecompletelistanime";
const AnimePageAnimeList = () => {
  return <>
  <MovieCardRow 
  genre="Anime "
  movies={topAnimeSeries}
/>
  </>
}

export default AnimePageAnimeList