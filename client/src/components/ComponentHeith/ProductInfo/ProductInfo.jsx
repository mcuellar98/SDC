import React, { useState, useEffect } from 'react';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import Styles from './Styles.jsx';
import FavoriteModal from './FavoriteModal.jsx';
import Reviews from './Reviews.jsx';
import SizeQtyChooser from './SizeQtyChooser.jsx';
import Checkout from './Checkout.jsx';
import Share from './PopupPages/Share.jsx';
import AddToBag from './PopupPages/AddToBag.jsx';



const ProductInfo = ({ productData, styles, setImages, SetThumbnail, availableSizes  }) => {

  const [isFavorite, setIsFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showBag, setShowBag] = useState(false);

  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [checkoutItem, setCheckoutItem] = useState([])



  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const closeShare = () => {
    setShowShare(false);
  };

  useEffect(() => {
    if (showBag) {
      // Show the AddToBag component for 3 seconds
      const timeout = setTimeout(() => {
        setShowBag(false);
      }, 3000);

      // Clean up the timeout when the component unmounts or when showBag changes
      return () => clearTimeout(timeout);
    }
  }, [showBag]);


  return (
    <div className='p-4'>
      <div className='inner py-4'>
        <section>
          <section className='text-white flex items-center justify-between mb-3 pb-2 text-xl font-bold font-sans border-b-2 border-[#78716C]'>
            <div>{productData.name}</div>
            <div className='pr-4 hover:text-[#78716C] cursor-pointer hover:scale-125 ease-in-out duration-300'
            onClick={handleFavoriteClick}>
              <BsFillSuitHeartFill size={25} color={isFavorite ? '#78716C' : ''}  />
            </div>
          </section>
          <section className='text-white mb-2 text-lg font-sans'>{productData.category}</section>
          <section className='text-white mb-2 text-lg font-sans'>{productData.slogan}</section>
          <section className='text-white mb-2 text-lg font-sans'>
            {productData.features?.[0]?.feature} {productData.features?.[0]?.value}
          </section>
          <section className='text-white mb-4 text-lg font-sans'>${productData.default_price}</section>
        </section>

          <Styles styles={styles}
          setImages={setImages}
          SetThumbnail={SetThumbnail}
          setSelectedStyle={setSelectedStyle}
          setCheckoutItem={setCheckoutItem}/>
          <Reviews />
          <SizeQtyChooser availableSizes={availableSizes} setSelectedSize={setSelectedSize}/>
          <Checkout setShowShare={setShowShare} setShowBag={setShowBag}/>


      </div>
      {showModal && <FavoriteModal closeModal={closeModal} />}
      {showShare && <Share closeShare={closeShare} />}
      {showBag && <AddToBag
      selectedStyle={selectedStyle}
      selectedSize={selectedSize}
      name={productData.name}
      price={productData.default_price}
      checkoutItem={checkoutItem[0]}/>}
    </div>
  );
};

export default ProductInfo;
