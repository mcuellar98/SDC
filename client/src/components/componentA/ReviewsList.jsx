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
  <div className='flex pl-40 pt-20 pr-40 bg-[#78716C] text-neutral-800'>
    <div className="w-1/3 ">
      <RatingSummary reviews={reviews} unfilteredReviews={unfilteredReviews} setReviews={setReviews} />
    </div>
    <div className="reviews-module w-2/3">
      <div className="reviewSort flex">
        <h2>{reviews.length} reviews, sorted by  </h2>
        <select className="bg-[#78716C]">
          <option value="Helpful">Helpful</option>
          <option value="Newest">Newest</option>
          <option value="Relevant">Relevant</option>
        </select>

      </div>

      <div className="overflow-y-auto h-96 reviews-list" style={{ border: 'none', outline: 'none' }}>
        {reviews.slice(0, visible).map((review, index) => (
          <ReviewEntry review={review} key={index} />
        ))}
      </div>

      {showLoadMoreButton && (
        <button className="load-more-button px-8 my-10 rounded bg-neutral-800	p-3 text-white" onClick={showMoreReviews}>
          More Reviews
        </button>
      )}

      <button className="add-review-button px-8 my-10 rounded bg-neutral-800 p-3 text-white" onClick={() => {setOpenModal(true);}}>Add a Review</button>
      {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} reviews={reviews} setReviews={setReviews}/>}

    </div>
  </div>

  );
};

export default ReviewsList;