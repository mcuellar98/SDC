import React from 'react';

const FavoriteModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
      <div className="bg-[#27272A] p-10 rounded-lg text-white">
        <p>Item added to favorites!</p>
        <button onClick={closeModal} className="mt-8 bg-[#78716C] hover:bg-[#6f6965] text-white px-3 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default FavoriteModal;
