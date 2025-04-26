import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import ImageSlider from './ImageSlider'
import VideoBackground from './VideoBackground'

import MovieCompleteList from './MovieCompleteList'

const Home = () => {
  return <>
         <Nav/>
         <VideoBackground/>
          <MovieCompleteList/>
         <ImageSlider/>
         <Footer/>
        
         
  </>
   

  
}

export default Home