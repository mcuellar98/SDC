import React from 'react';
import { AiFillShopping } from 'react-icons/ai';

const HeroSection = () => {
  return (
    <section className="h-[90vh]  bg-gray-100 relative">
      <img
        src="/assets/img/model.jpg"
        alt="hero Section"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <p className="text-2xl text-center">
          Quality. Style. Atelier
          <br />
          <p className='text-xl'>Crafting Elegance & Wearing Dreams</p>
        </p>
        <a
          href="#" // Replace to jump to next secction
          className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-[#27272A] hover:bg-[#78716C] focus:outline-none focus:border-gray-500 focus:shadow-outline-gray active:bg-gray-500 transition ease-in-out duration-150"

        >
          Shop Now
          <AiFillShopping className="ml-2" size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;



/*
import React from 'react';
import { AiFillShopping } from 'react-icons/ai';

const HeroSection = () => {
  return (
    <div className="bg-gray-100 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img
            src="/assets/img/model.jpg"
            alt="details"
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
            <p className="text-lg">
              Quality. Style. Atelier
              <br />
              A standout online store
            </p>
            <button className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-800 transition ease-in-out duration-150">
              Shop Now
              <AiFillShopping className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


*/