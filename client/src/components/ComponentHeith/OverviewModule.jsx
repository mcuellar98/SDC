import React from 'react';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';

const OverviewModule = () => {
  return (
    <section className="h-[100vh] bg-[#27272A] flex">
      <div className="w-2/3">
        <ImageGallery />
      </div>

      <div className="w-1/3">
        <ProductInfo />
      </div>


    </section>
  );
};

export default OverviewModule;
