import React, {useState, useEffect} from "react";
import axios from "axios"

const Helpful = ({review}) => {

  const [helpNum, updateNum] = useState(review.helpfulness);
  const [clicked, updateClick] = useState(false);


useEffect(() => {
  updateNum(review.helpfulness)
},[])


const handleClick = () => {
  return axios.put('/helpful/'+ review.review_id).then(
    (result) => {
    return console.log(result)
  })
}


  return (
      <p className="hover:text-stone-50" onClick={(e) => {
        if (!clicked) {
          handleClick()
          updateClick(true)
          updateNum(helpNum + 1)
        }
      }}> Helpful? <u>Yes</u> ({helpNum}) </p>
  )
}

export default Helpful;