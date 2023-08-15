import React from "react"
import Helpful from "./Helpful.jsx"
import UserInfo from "./userInfo.jsx"
import Report from "./report.jsx"

const AnswerItem = (props) => {
  return (
    <div className="test pt-4">
    <p>A: {props.answer.body}</p>
    {props.answer.photos.length > 0 && <p>YOUR PHHOTO HERE</p>}
    <p className="flex text-xs text-stone-400"> <UserInfo /> &nbsp;| &nbsp;<Helpful /> &nbsp;| &nbsp;<Report /> &nbsp;</p>
    </div>
  )

}

export default AnswerItem;