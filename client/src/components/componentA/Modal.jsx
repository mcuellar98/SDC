import React, {useState} from 'react';
import StarRating from './StarRating.jsx';
import img1 from '../resources/review.svg';
import img2 from '../resources/reviewsent.svg';


const Modal = ({openModal, setOpenModal}) => {

  const[recommend, setRecommend] = useState(null);
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [counterMessage, setCounterMessage] = useState('');
  const [reviewSend, setReviewSend] = useState(false);

  const handleRecommendChange = (value) => {
    setRecommend(value);
  };

  const handleReviewSummaryChange = (event) => {
    setReviewSummary(event.target.value);
  };

  const handleReviewBodyChange = (event) => {
    const newReviewBody = event.target.value;

    setReviewBody(newReviewBody);

    const remainingCharacters = Math.max(50-newReviewBody.length, 0);
    const counterMessage = remainingCharacters === 0 ? 'Minimum reached' : `Minimum required characters left: ${remainingCharacters}`;
    setCounterMessage(counterMessage);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const submitReview = () => {
    setReviewSend(true);
    setTimeout(() => {
      setOpenModal(false);
    }, 2000);
  }

  return (
    <>
    {!reviewSend && (<div className="main-container p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md items-center space-x-4">
      <div className="modal-container ">
        <img className="model-image w-24 h-24" src={img1} />
        <h1 className="text-xl font-bold">Write Your Review</h1>
      </div>
      <div className="reviewForm">
        <div>
          <label>Overall rating</label>
          <StarRating />
        </div>
        <div>
          <label>Do you recommend this product?</label>
          <label>
            <input
            type="radio"
            name="recommend"
            value="yes"
            onChange={() => handleRecommendChange(true)}
            />
            Yes
          </label>

          <label>
            <input
            type="radio"
            name="recommend"
            value="no"
            onChange={() => handleRecommendChange(false)}
            />
            No
          </label>
        </div>

        <div>
          <label>Review Summary</label>
          <input
          type="text"
          value={reviewSummary}
          onChange={handleReviewSummaryChange}
          placeholder="Example: Best purchase ever!"
          maxLength="60"
          />
        </div>

        <div>
          <label>Review body:</label>
          <textarea
          value={reviewBody}
          onChange={handleReviewBodyChange}
          placeholder="Why did you like the product or not?"
          maxLength="1000"
           />
           <div>
            {counterMessage}
           </div>
        </div>

        <div>
          {/* upload images */}
        </div>

        <div>
          <label>What is your nickname?</label>
          <input
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
            placeholder="Example: jackson11!"
            maxLength="60"
          />
          <div>For privacy reasons, do not use your full name or email address.</div>
        </div>

        <div>
          <label>Your email </label>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Example: jackson11@email.com"
            maxLength="60"
          />
          <div>For authentication reasons, you will not be emailed.</div>

        </div>

        <div>
          <button className="modal-button-send" onClick={submitReview}>Submit</button>
          <br></br>
          <button className="modal-button-cancel" onClick={() => {setOpenModal(false);}}>Cancel</button>
        </div>
      </div>
    </div>)}

    {reviewSend && (
      <div className="modal-container-sent p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md items-center space-x-4">
        <img className="model-image w-24 h-24" src={img2} />
        <div className="modal-text">Review Submitted!</div>
      </div>
    )}

    </>
  )
};

export default Modal;