import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageViewer = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const handlePrevClick = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ?  images.length - 1  : prevIndex - 1
    );
  }

  const handleNextClick = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };



  useEffect(() => {
    axios.get('/api/images')
      .then(response => {
        setImages(response.data);
        setCurrentImage(response.data[0])
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);


  return (
    <div className="image-viewer">
    <button className="prev-button" onClick={handlePrevClick} >{'<'}</button>
    <img src={images[currentImageIndex]} alt="Product Image"/>
    <button className="next-button" onClick={handleNextClick} >{'>'}</button>
  </div>
  )

}


export default ImageViewer;