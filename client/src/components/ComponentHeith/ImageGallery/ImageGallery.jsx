import React from 'react';
import ImageViewer from './ImageViewer.jsx';
import ThumbnailList from './ThumbnailList.jsx';

const ImageGallery = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full mb-4">
        <ImageViewer />
      </div>
      <div className="w-full">
        <ThumbnailList />
      </div>
    </div>
  );
};

export default ImageGallery;
