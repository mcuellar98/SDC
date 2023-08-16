import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
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
    <div className="w-full h-[500px] relative group overflow-hidden">
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-full p-2 bg-[#27272A]/60 text-white cursor-pointer z-10">
        <BsChevronCompactLeft onClick={handlePrevClick} />
      </div>
      <div className="w-full h-full duration-500 rounded-lg overflow-hidden absolute inset-0 flex items-center justify-center">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="max-w-full max-h-full"
        />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-full p-2 bg-[#27272A]/60 text-white cursor-pointer z-10">
        <BsChevronCompactRight onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default ImageViewer;
