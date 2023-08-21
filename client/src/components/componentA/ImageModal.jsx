import React from 'react';

const ImageModal = ({ closeModal, imageUrl }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={imageUrl} alt="Full Resolution" />
        <button className="modal-close" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
