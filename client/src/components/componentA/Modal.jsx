import React, {useState, useEffect} from 'react';
import StarRating from './StarRating.jsx';
import Characteristics from './Characteristics.jsx';
import img1 from '../resources/review.svg';
import img2 from '../resources/reviewsent.svg';
import axios from 'axios';


const Modal = ({openModal, setOpenModal, reviews, setReviews}) => {

  const [rating, setRating] = useState(null);
  const[recommend, setRecommend] = useState(null);
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [characteristicsRatings, setCharacteristicsRatings] = useState([]);
  const [counterMessage, setCounterMessage] = useState('');
  const [reviewSend, setReviewSend] = useState(false);
  const [characteristicsKeys, setCharacteristicsKeys] = useState([]);
  const [characteristicsResponse, setCharacteristicsResponse] = useState(null);

  useEffect(() => {
    axios.get('/reviews/getRatings')
      .then(response => {
        const characteristicsResponse = response.data.characteristics;
        setCharacteristicsResponse(characteristicsResponse);
        const keys = Object.keys(characteristicsResponse);
        setCharacteristicsKeys(keys);
        setCharacteristicsRatings(keys.map(() => null));
      })
      .catch(error => {
        console.error('Error fetching characteristics keys:', error);
      });
  }, []);

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
    const transformedCharacteristics = {};
    characteristicsKeys.map((charName, index) => {
      const charId = characteristicsResponse[charName].id;
      transformedCharacteristics[charId] = characteristicsRatings[index];
    })

    const newReview = {
      product_id: 37311,
      rating: rating,
      summary: reviewSummary,
      body: reviewBody,
      recommend: recommend,
      name: nickname,
      email: email,
      characteristics: transformedCharacteristics,
      photos: []
    };

    axios.post('/reviews/reviews', newReview)
      .then(response => {
        console.log(response.data);
        setReviews([...reviews, response.data]);
        setReviewSend(true);
      })
      .catch(error => {
        console.error('Error posting reviews:', error);
      });

    setTimeout(() => {
      setOpenModal(false);
    }, 2000);
  };


  return (
    <>
    {!reviewSend && (<div className="fixed inset-0 flex items-center justify-center p-6 bg-white rounded-xl shadow-md">
      <div className="modal-container ">
        <div className="model-image mb-4">
          <img className="w-24 h-24 mx-auto" src={img1} alt="Review" />
        </div>
        <h1 className="text-xl font-bold text-center">Write Your Review</h1>
      </div>
      <div className="reviewForm p-6">
        <div className="overallRating font-bold text-lg mb-2 inline-block">
          <label>Overall rating</label>
          <StarRating rating={rating} setRating={setRating} />
        </div>
        <div className="recommendForm mb-4">
          <label className="font-bold text-lg mb-2">Do you recommend this product?</label>
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

        <div className="characteristics inline-block">
          <Characteristics
            characteristicsRatings={characteristicsRatings}
            setCharacteristicsRatings={setCharacteristicsRatings}
            characteristicsKeys={characteristicsKeys}
          />
        </div>


        <div className="reviewSummary mb-4">
          <label className="font-bold text-lg mb-2">Review Summary</label>
          <input
          type="text"
          value={reviewSummary}
          onChange={handleReviewSummaryChange}
          placeholder="Example: Best purchase ever!"
          maxLength="60"
          />
        </div>

        <div className="reviewBody mb-4">
          <label className="font-bold text-lg mb-2">Review body:</label>
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

        <div className="nickName mb-4">
          <label className="font-bold text-lg mb-2">What is your nickname?</label>
          <input
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
            placeholder="Example: jackson11!"
            maxLength="60"
          />
          <div>For privacy reasons, do not use your full name or email address.</div>
        </div>

        <div className="email mb-4">
          <label className="font-bold text-lg mb-2">Your email </label>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Example: jackson11@email.com"
            maxLength="60"
          />
          <div>For authentication reasons, you will not be emailed.</div>

        </div>

        <div className="flex justify-between" >
          <button className="modal-button-send px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={submitReview}>Submit</button>
          <br></br>
          <button className="modal-button-cancel px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={() => {setOpenModal(false);}}>Cancel</button>
        </div>
      </div>
    </div>)}

    {reviewSend && (
      <div className="modal-container-sent fixed inset-0 flex items-center justify-center p-6 bg-white rounded-xl shadow-md">
        <img className="model-image w-24 h-24" src={img2} />
        <div className="modal-text">Review Submitted!</div>
      </div>
    )}

    </>
  )
};

export default Modal;