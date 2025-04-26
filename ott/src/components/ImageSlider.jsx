import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const images = [
  "https://wallpapers.com/images/featured/hunter-x-hunter-pictures-rgspzm88tzgl3wea.jpg",
  "https://wallpapers.com/images/featured/naruto-r5aa4v805ovp5cv4.jpg",
  "https://images3.alphacoders.com/135/1350256.jpeg",
  "https://images.alphacoders.com/680/680771.jpg",
  "https://images8.alphacoders.com/118/1180819.jpg",
  "https://images3.alphacoders.com/135/1352229.png",
  "https://img.nowrunning.com/content/movie/2024/marco-28691/bg2_marco.jpg",
  "https://wallpapers.com/images/hd/kgf-4k-rocky-pointing-gun-kyggj417vl5ggk2p.jpg",
  "https://wallpapers.com/images/featured/tenet-tu1b44axi1ewo7ya.jpg",
  "https://wallpapers.com/images/hd/avengers-endgame-mghdp4gaqzu4q4us.jpg",
  "https://images5.alphacoders.com/131/1319300.jpeg",
  "https://readysteadycut.com/wp-content/uploads/2023/06/AAAABTc02b76q2F_Uz31B1uD67JDiIZWhFxBCF3EMgkqtHeDUgmNZ6dyoAHesdSpkOqPR1Wl-B-vRtk_uEnGGTomk7t5IgblLTL_IG8Y.jpg",
  
  "https://wallpapers.com/images/featured/vincenzo-3j5xr10xgajr6dy9.jpg",
 
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative  overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className="w-screen h-[600px] object-contain flex-shrink-0"
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Prev button */}
      <button
        onClick={prevSlide}
        className="absolute h-16 left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-blue-400 via-purple-500 to-pink-500 text-white p-2 rounded-full z-10 shadow-lg hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
      >
        <IoIosArrowBack />
      </button>

      {/* Next button */}
      <button
        onClick={nextSlide}
        className="absolute h-16 right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-blue-400 via-purple-500 to-pink-500 text-white p-2 rounded-full z-10 shadow-lg hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default ImageSlider;
