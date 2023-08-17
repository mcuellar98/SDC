import React, {useState, useEffect} from 'react';
import axios from 'axios';

const RatingSummary = () => {

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

  const averageRating = calculateAverageRating(ratingsData.ratings).toFixed(1);

  // ratingsData.ratings = {1: '92', 2: '60', 3: '184', 4: '168', 5: '423'}


  return (
    <div>
      <h2>RATINGS & REVIEWS</h2>
      <span>{averageRating}</span>
    </div>
  )
};

export default RatingSummary;