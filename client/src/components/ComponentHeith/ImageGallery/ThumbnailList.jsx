import React from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import axios from 'axios';

const ThumbnailList = ({ setCurrentIndex, thumbnail }) => {

  // Scroll the thumbnail slider to the left
  const slideLeft = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  // Scroll the thumbnail slider to the right
  const slideRight = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  // Handle click on a thumbnail to change the current index
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  }

  return (
    <div className='relative flex items-center w-full md:w-auto'>
      {/* Slide left button */}
      <BsChevronCompactLeft
        className='opacity-50 cursor-pointer hover:opacity-100 text-white'
        onClick={slideLeft}
        size={30}
      />
      {/* Thumbnail slider */}
      <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
        {thumbnail.map((item, index) => (
          <img
            className='w-[200px] h-[150px] inline-block p-2 rounded-2xl cursor-pointer hover:scale-105 ease-in-out duration-300'
            src={item}
            alt='Product Thumbnail'
            key={index}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
      {/* Slide right button */}
      <BsChevronCompactRight
        className='opacity-50 cursor-pointer hover:opacity-100 text-white'
        onClick={slideRight}
        size={30}
      />
    </div>
  );
}

export default ThumbnailList;
