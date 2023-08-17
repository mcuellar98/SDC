import React from 'react';
import ImageViewer from './ImageViewer.jsx';
import ThumbnailList from './ThumbnailList.jsx';

const ImageGallery = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full mb-4 px-20">
        <ImageViewer />
      </div>
      <div className="w-full mt-4 mb-4 py-4 px-4">
        <ThumbnailList />
      </div>
    </div>
  );
};

export default ImageGallery;
