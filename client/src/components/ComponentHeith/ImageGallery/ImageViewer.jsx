import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import axios from 'axios';

const ImageViewer = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    axios.get('/api/images')
      .then(response => {
        setImages(response.data);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div className="image-viewer">
      <div className="relative">
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <AiOutlineArrowLeft
          onClick={handlePrevClick}
          className="text-4xl text-[#27272A] hover:text-[#78716C] cursor-pointer" />
        </div>
        <img
          src={images[currentImageIndex]}
          alt="Product Image"
          className="mx-auto"
        />
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <AiOutlineArrowRight
            onClick={handleNextClick}
            className="text-4xl text-[#27272A] hover:text-[#78716C] cursor-pointer"  />
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
