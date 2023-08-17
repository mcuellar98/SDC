import React from 'react';
import axios from 'axios';

const Ratings = () => {

  const [ratings, setRatings] = useState(null);

  // const fetchRatings = () => {
  //   return axios.get('http://localhost:3000/reviews/getRatings')
  //     then.(response => {
  //       console.log(response.data.ratings);
  //       setRatings(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching ratings:', error);
  //     });
  // }




  return (
    <div>
      <h2>RATINGS & REVIEWS</h2>
    </div>
  )
};

export default Ratings;