import React from 'react';
import { AiFillShopping } from 'react-icons/ai';

const Checkout = ({ setShowShare, setShowBag }) => {
  // Handle the "Share" button click
  const handleShare = () => {
    setShowShare(true);
  };

  // Handle the "Add to Bag" button click
  const handleAddToBag = () => {
    setShowBag(true);
  };

  return (
    <div className="flex flex-col text-white font-semibold px-4">
      {/* "Add to Bag" button */}
      <button
        type="button"
        className="bg-[#646363] hover:bg-[#424141] py-2 px-4 rounded flex items-center justify-center"
        onClick={handleAddToBag}
      >
        Add to bag <AiFillShopping className="ml-2" size={20} />
      </button>
      {/* "Share" button */}
      <button
        type="button"
        className="bg-[#646363] hover:bg-[#424141] py-2 px-4 mt-3 rounded"
        onClick={handleShare}
      >
        Share
      </button>
    </div>
  );
};

export default Checkout;
