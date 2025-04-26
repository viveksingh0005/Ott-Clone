import React from 'react'
import MovieCardRow from "./MovieCardRow";
import { topWebShows } from "../utils/moviecompletelistwebshow";
const WebPageWebList = () => {
  return <>

  <MovieCardRow 
  genre="Top Web Shows "
  movies={topWebShows}
/>
  </>
}

export default WebPageWebList