import React, { useState } from 'react';

const Styles = ({ styles }) => {
  const limitedStyles = styles.slice(0, 8);
  const [selectedColor, setSelectedColor] = useState('Black');


  const handleClick = (styleColor) => {
    setSelectedColor(styleColor);
  };

  return (
    <div>
      <div >{selectedColor}</div>
      <div>
        {limitedStyles.map((style) => (
          <img
            key={style.style_id}
            src={style.photos[0].thumbnail_url}
            alt={style.name}
            className={`w-24 h-24 inline-block p-2 rounded-2xl cursor-pointer hover:scale-105 ease-in-out duration-300 ${
              selectedColor === style.name ? 'border-2 border-[#78716C]' : ''
            }`}
            onClick={() => handleClick(style.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default Styles;
