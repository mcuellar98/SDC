import React, { useState } from 'react';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import Styles from './Styles.jsx';

const ProductInfo = ({ productData, styles }) => {

  const [isFavorite, setIsFavorite] = useState(false);
  console.log(isFavorite)
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className='p-4'>
      <div className='inner py-4'>
        <section>
          <section className='text-white flex items-center justify-between mb-2 text-xl font-sans'>
            <div>{productData.name}</div>
            <div className='pr-4 hover:text-[#78716C] cursor-pointer hover:scale-125 ease-in-out duration-300'
            onClick={handleFavoriteClick}>
              <BsFillSuitHeartFill size={25} color={isFavorite ? '#78716C' : ''}  />
            </div>
          </section>
          <section className='text-white mb-2 text-lg font-sans'>{productData.slogan}</section>
          <section className='text-white mb-2 text-lg font-sans'>{productData.category}</section>
          <section className='text-white mb-2 text-lg font-sans'>
            {productData.features?.[0]?.feature} {productData.features?.[0]?.value}
          </section>
          <section className='text-white mb-2 text-lg font-sans'>${productData.default_price}</section>

          {isFavorite && <p className='text-green-500'>You favorited this item!</p>}
        </section>

        <div>
          <Styles styles={styles} />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
