import React, {useState, useEffect} from "react";
import axios from "axios"

const Helpful = ({review}) => {

  const [helpNum, updateNum] = useState(review.helpfulness);
  const [clicked, updateClicked] = useState(false);


useEffect(() => {
  updateNum(review.helpfulness)
},[])


const handleClick = () => {
  if (!clicked) {
    axios
      .put(`/reviews/updateHelpful/${review.review_id}`)
      .then((result) => {
        updateClicked(true);
        updateNum(helpNum + 1);
      })
      .catch((error) => {
        console.log("Error marking review as helpful:", error);
      });
  }
};


  return (
      <p className="updateHelpful" onClick={handleClick}> Helpful? <u>Yes</u> ({helpNum}) </p>
  )
}

export default Helpful;