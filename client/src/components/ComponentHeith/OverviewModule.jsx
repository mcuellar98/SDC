import React from 'react';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';

const OverviewModule = () => {
  return (
    <section className="h-[100vh] bg-[#27272A]">
      <div>
        <nav className="pt-7 pb-3 px-6 text-white text-xl flex flex-col justify-center items-center">
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-[#78716C]">MEN</a></li>
            <li>-</li>
            <li><a href="#" className="hover:text-[#78716C]">WOMEN</a></li>
            <li>-</li>
            <li><a href="#" className="hover:text-[#78716C]">SPORT</a></li>
            <li>-</li>
            <li><a href="#" className="hover:text-[#78716C]">BEAUTY</a></li>
            <li>-</li>
            <li><a href="#" className="hover:text-[#78716C]">HOME</a></li>
            <li>-</li>
            <li><a href="#" className="hover:text-[#78716C]">SALE</a></li>
          </ul>
        </nav>
        <h1 className="text-white pb-8 flex flex-col justify-center items-center">Free Shipping over $100 ~ Become a ÉLIER Member ~ ÉLIER x thredUP</h1>
      </div>

      <div className="flex">
        <div className="w-2/3">
          <ImageGallery />
        </div>

        <div className="w-1/3">
          <ProductInfo />
        </div>
      </div>
    </section>
  );
};

export default OverviewModule;

