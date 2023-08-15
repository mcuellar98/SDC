import React from 'react';
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa';

const Star = ({rating}) => {

  // for example: rating = 3.75, fullStars = 3, decimalPart = 0.75, outlinedStars = 5 - 3 - 1 = 1
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const decimalPart = rating - fullStars;
  const outlinedStars = totalStars - fullStars - (decimalPart > 0 ? 1 : 0);

  const fractionalStarWidth = decimalPart * 100;

  return (
    <div className="star-rating inline-flex">
      {Array.from({ length: fullStars }, (_, index) => (
        <FaStar key={index} />
      ))}
      {decimalPart > 0 && decimalPart <= 0.25 && <FaStarHalfAlt style={{ width: `${fractionalStarWidth}%` }} />}
      {decimalPart > 0.25 && decimalPart <= 0.5 && <FaStarHalfAlt />}
      {decimalPart > 0.5 && decimalPart <= 0.75 && <FaStarHalfAlt style={{ width: `${fractionalStarWidth}%` }} />}
      {Array.from({ length: outlinedStars }, (_, index) => (
        <FaRegStar key={index} />
      ))}
    </div>
  );
};

export default Star;