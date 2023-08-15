import React from 'react';
import img1 from '../resources/reviewmail.svg';

const Modal = ({openModal, setOpenModal}) => {
  return (
    <>
    <div className="main-container">
      <div className="modal-container">
        <img className="model-image w-24 h-24" src={img1} />
        <h2>Write Your Review</h2>
      </div>
      <div className="reviewForm">
        <div>
          <label>Overall rating</label>
          <StarRating />
        </div>
        <div>
          <label>Review body:</label>
          <input type="text" />
        </div>
        <div>
          <button className="modal-button-send">Submit</button>
          <br></br>
          <button className="modal-button-cancel" onClick={() => {setOpenModal(false);}}>Cancel</button>
        </div>

      </div>

    </div>

    </>
  )
};

export default Modal;