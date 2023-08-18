import React, {useState, useEffect} from 'react';
import Star from './Star.jsx';
import axios from 'axios';
import ReviewBar from './ReviewBar.jsx';

const RatingSummary = ({reviews, unfilteredReviews, setReviews}) => {

  const [ratingsData, setRatingsData] = useState(null);


  const fetchRatings = () => {
    return axios.get('http://localhost:3000/reviews/getRatings')
      .then(response => {
        setRatingsData(response.data);
        console.log('Fetched ratingsData:', response.data);
      })
      .catch(error => {
        console.error('Error fetching ratings:', error);
      });
  };

  useEffect(() => {
    fetchRatings();
  }, []);

  const calculateAverageRating = (ratings) => {
    const ratingArray = Object.keys(ratings);
    let sumRating = 0;
    ratingArray.forEach((rating) => (sumRating += rating * ratings[rating]));
    const reviewTotal = Object.values(ratings).reduce(
      (accu, curr) => accu + parseInt(curr),
      0
    );
    return sumRating / reviewTotal;
  };

  if (!ratingsData) {
    return <div>Loading ratings...</div>;
  }

  const calculateRecommendPercentage = (recommendData) => {
    // console.log(recommendData);
    return parseInt(recommendData.true)/(parseInt(recommendData.false) + parseInt(recommendData.true));
  }

  const calculateProgress = (ratings) => {
    let ratingDistribute = {};
    const reviewTotal = Object.values(ratings).reduce(
      (accu, curr) => accu + parseInt(curr),
      0
    );
    ratingDistribute[1] = ratings[1]/reviewTotal;
    ratingDistribute[2] = ratings[2]/reviewTotal;
    ratingDistribute[3] = ratings[3]/reviewTotal;
    ratingDistribute[4] = ratings[4]/reviewTotal;
    ratingDistribute[5] = ratings[5]/reviewTotal;
    return ratingDistribute;
  }


  const filterReviewsByRating = (rating) => {
    // console.log("Filtering reviews by rating:", rating);
    const filteredReviews = unfilteredReviews.filter(review => review.rating === rating);
    // console.log("Filtered reviews:", filteredReviews);
    setReviews(filteredReviews);
  }


  const recommendPercentage = calculateRecommendPercentage(ratingsData.recommended).toFixed(1);
  // ratingsData.ratings = {1: '92', 2: '60', 3: '184', 4: '168', 5: '423'}
  const averageRating = calculateAverageRating(ratingsData.ratings).toFixed(1);
  //ratingsData.recommended = {false: '209', true: '718'}
  const ratingDistribute = calculateProgress(ratingsData.ratings);
  // console.log(ratingDistribute);


  return (
    <div>
      <div className="averageRating">
        <h2>RATINGS & REVIEWS</h2>
        <span>{averageRating}</span>
        <Star rating={averageRating} />
      </div>

      <div className="recommendSummary">
        <span>{recommendPercentage * 100}% of reviews recommend this product</span>
      </div>

      <div className="ratingDistribute">
        <div className="5stars flex items-center mb-2">
          <label onClick={() => {filterReviewsByRating(5)}}>5 stars</label>
          <ReviewBar bgcolor="#27272A" progress={ratingDistribute[5]*100}  height={13} />
          <label>({ratingsData.ratings[5]} reviews)</label>
        </div>
        <div className="4stars flex items-center mb-2">
          <label onClick={() => {filterReviewsByRating(4)}}>4 stars</label>
          <ReviewBar bgcolor="#27272A" progress={ratingDistribute[4]*100}  height={13} />
          <label>({ratingsData.ratings[4]} reviews)</label>
        </div>
        <div className="3stars flex items-center mb-2">
          <label onClick={() => {filterReviewsByRating(3)}}>3 stars</label>
          <ReviewBar bgcolor="#27272A" progress={ratingDistribute[3]*100}  height={13} />
          <label>({ratingsData.ratings[3]} reviews)</label>
        </div>
        <div className="2stars flex items-center mb-2">
          <label onClick={() => {filterReviewsByRating(2)}}>2 stars</label>
          <ReviewBar bgcolor="#27272A" progress={ratingDistribute[2]*100}  height={13} />
          <label>({ratingsData.ratings[2]} reviews)</label>
        </div>
        <div className="1stars flex items-center mb-2">
          <label onClick={() => {filterReviewsByRating(1)}}>1 stars</label>
          <ReviewBar bgcolor="#27272A" progress={ratingDistribute[1]*100}  height={13} />
          <label>({ratingsData.ratings[1]} reviews)</label>
        </div>
      </div>
    </div>
  )
};

export default RatingSummary;