import React from 'react';
import aboutImg from '../../img/aboutImg.jpg'; // Import the about section image

const AboutSection = () => {
  return (
    <section className="relative bg-[#27272A] text-white">
      {/* About section image */}
      <img
        src={aboutImg}
        alt="About Section"
        className="object-cover object-center w-full h-full absolute inset-0"
      />
      {/* Content container */}
      <div className="container mx-auto px-4 md:px-0 md:max-w-3xl py-16 md:py-32 text-center relative">
        {/* Section title */}
        <h2 className="text-3xl font-bold mb-4 font-mono">About Us</h2>
        {/* First paragraph */}
        <p className="text-xl mb-8">
          Welcome to ÉLIER! We are dedicated to bringing you the latest trends and timeless classics in fashion. With an eye for quality and style, we curate a collection that reflects elegance, comfort, and individuality.
        </p>
        {/* Second paragraph */}
        <p className="text-xl mb-8">
          At ÉLIER, shopping is about more than what you buy. It's a complete journey, from browsing to choosing your outfit to letting us know what you think of your final purchase. We're here to help you enjoy yourself, so please feel free to reach out with questions, comments, and suggestions.
        </p>
        {/* Third paragraph */}
        <p className="text-xl">
          Stay fashionable, stay unique, and stay fabulous!
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
