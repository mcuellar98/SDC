import React from 'react';
import { AiFillShopping } from 'react-icons/ai';

// add a page when click add tp bag something pop on the side for 3 seconds
// when share page pop p to sleect which meida wanan share

const Checkout = () => {
  return (
    <div className="flex flex-col text-white font-semibold px-4">
      <button type="button" className="bg-[#646363]  hover:bg-[#424141]  py-2 px-4 rounded flex items-center justify-center">
        Add to bag <AiFillShopping className="ml-2" size={20} />
      </button>
      <button type="button" className="bg-[#646363] hover:bg-[#424141] py-2 px-4 mt-3 rounded">
        Share
      </button>
    </div>
  );
}

export default Checkout;
