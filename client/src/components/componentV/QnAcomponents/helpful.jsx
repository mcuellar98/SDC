import React, {useState, useEffect} from "react";
import axios from "axios"

const Helpful = (props) => {

  const [helpNum, updateNum] = useState(props.helpfulness);
  const [clicked, updateClick] = useState(false);
  console.log("helpful",props.id)
useEffect(() => {
  updateNum(props.helpfulness)
},[props])

// useEffect(() => {

// },[])

const handleClick = () => {
  return axios.put('/helpful/'+ props.id).then((result) => {
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