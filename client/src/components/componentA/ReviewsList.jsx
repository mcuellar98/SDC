import React, {useEffect, useState} from 'react';
import ReviewEntry from './ReviewEntry.jsx'
import RatingSummary from './RatingSummary.jsx'
import axios from 'axios';
import Modal from './Modal.jsx';

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [unfilteredReviews, setUnfilteredReviews] = useState([]);
  const [visible, setVisible] = useState(2);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = () => {
    return axios.get('http://localhost:3000/reviews/getAllReviews')
      .then(response => {
        // console.log(response.data);
        setReviews(response.data);
        setUnfilteredReviews(response.data);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  };


  const showMoreReviews = () => {
    setVisible((prevValue) => prevValue + 2);
  };



  const showLoadMoreButton = reviews.length > visible;


  useEffect(() => {
    fetchReviews();
  }, []);

  return (
  <div className='flex mx-20 my-20'>
    <div className="w-1/3 ">
      <RatingSummary reviews={reviews} unfilteredReviews={unfilteredReviews} setReviews={setReviews} />
    </div>
    <div className="reviews-module w-2/3">
      <h2>248 reviews, sorted by relevance</h2>
      <div className="relative overflow-y-auto h-80 reviews-list">
        {reviews.slice(0, visible).map(review => (
          <ReviewEntry review={review} key={review.review_id} />
        ))}
      </div>

      {showLoadMoreButton && (
        <button className="load-more-button border-solid border-2 border-black px-8 my-20" onClick={showMoreReviews}>
          More Reviews
        </button>
      )}

      <button className="add-review-button border-solid border-2 border-black px-8 my-20" onClick={() => {setOpenModal(true);}}>Add a Review</button>
      {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} />}

    </div>
  </div>

  );
};

export default ReviewsList;