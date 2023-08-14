import React from "react"

const AnswerItem = (props) => {
  // console.log(props)
  return (
    <p>A: {props.answer.body}</p>
  )

}

export default AnswerItem;