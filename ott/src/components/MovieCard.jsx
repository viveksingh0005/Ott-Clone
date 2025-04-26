// MovieCard.jsx
import React from "react";

const MovieCard = ({ name, image }) => {
  return <>
             <div className="w-[360px]  rounded-xl overflow-hidden shadow-lg bg-white">
      <img src={image} alt={name} className="w-full h-58  object-cover" />
      
    </div>
  </>
   
  
};

export default MovieCard;
