import React from "react"
import Helpful from "./Helpful.jsx"
import UserInfo from "./userInfo.jsx"
import Report from "./report.jsx"

const AnswerItem = (props) => {

  return (
    <div className="test pt-4">
    <p>A: {props.answer.body}</p>
    <div className="flex py-4">
    {props.answer.photos.length > 0 &&
      props.answer.photos.map((photo) => {
        return <img src={photo} className="max-h-36 px-2"/>
      })
    }
    </div>
    <p className="flex text-xs text-stone-400"> <UserInfo  userInfo={props}/> &nbsp;| &nbsp;<Helpful id={props.answer.id} helpfulness={props.answer.helpfulness} type="answer"/> &nbsp;| &nbsp;<Report id={props.answer.id} helpfulness={props.answer.helpfulness} type="answer"/> &nbsp;</p>
    </div>
  )

}

export default AnswerItem;