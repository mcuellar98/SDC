import React, {useState, useEffect}  from "react";
import Helpful from "./Helpful.jsx"
import UserInfo from "./userInfo.jsx"
import Report from "./report.jsx"
import Answer from "./answer.jsx"
import AnswerItem from "./answerList.jsx"

const IdividualAnswer = (props) => {
  var loopAnswers = props.answers

  useEffect(() => {
    loopAnswers.sort((a,b) => {
      return b.helpfulness - a.helpfulness
    })
    var twoAnswers = loopAnswers.slice(0,2)
  updateAnswers([...twoAnswers])
  },[props.answers,answers])

  const [answers, updateAnswers] = useState(props.answers)

  return (
    <div>
      <div className="flex w-full justify-between">
      <p className="text-xl">
        Q: {props.questions.question_body}
      </p> <span className="flex text-xs"><Helpful />&nbsp;| &nbsp;<Answer /></span>
      </div>
      <p className="text-xl">
        {answers.map((answer, index) => {
          return  <AnswerItem answer={answer} key={index}/>
        })}
      </p>
      {props.answers.length > 2 && <p onClick={ (e) => {
        updateAnswers(loopAnswers)
      }}>Load More Answers</p>}
      <div >
      <p className="flex text-xs "> <UserInfo /> &nbsp;| &nbsp;<Helpful /> &nbsp;| &nbsp;<Report /> &nbsp;</p>
      </div>
    </div>
  )
}

export default IdividualAnswer;