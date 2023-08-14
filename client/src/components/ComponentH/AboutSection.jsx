import React from 'react';

const AboutSection = () => {
  const containerStyle = {
    padding: '16px 22rem',
  };


  return (
    <section className="bg-[#27272A] py-16 text-white font-sans flex items-center">
      <div className="container mx-auto text-center" style={containerStyle} >
        <h2 className="text-3xl font-bold mb-4 font-mono" >About Us</h2>
        <p className="text-xl mb-8 font-medium font-mono" >
        Welcome to ATELIER! We are dedicated to bringing you the latest trends and timeless classics in fashion. With an eye for quality and style, we curate a collection that reflects elegance, comfort, and individuality.
        </p>
        <p className="text-xl mb-8 font-medium font-mono" >
          At ATELIER, shopping is about more than what you buy. It's a complete journey, from browsing to choosing your outfit to letting us know what you think of your final purchase. We're here to help you enjoy yourself, so please feel free to reach out with questions, comments, and suggestions.
        </p>
        <p className="text-xl font-medium font-mono">
          Stay fashionable, stay unique, and stay fabulous!
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
