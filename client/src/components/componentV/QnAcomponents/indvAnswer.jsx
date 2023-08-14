import React, {useState, useEffect}  from "react";
import Answer from "./answer.jsx"
import AnswerItem from "./answerList.jsx"
import Helpful from "./Helpful.jsx"

const IdividualAnswer = (props) => {
  var loopAnswers = props.answers

  useEffect(() => {
    loopAnswers.sort((a,b) => {
      return b.helpfulness - a.helpfulness
    })
    var twoAnswers = loopAnswers.slice(0,2)
  updateAnswers([...twoAnswers])
  },[props.answers, answers])

  const [answers, updateAnswers] = useState(props.answers)

  return (
    <div className=" overflow-auto ">
      <div className="flex w-full justify-between">
      <p className="text-xl">
        Q: {props.questions.question_body}
      </p> <span className="flex text-xs text-stone-400"><Helpful />&nbsp;| &nbsp;<Answer /></span>
      </div>
      <p className="text-xl max-w-xl">
        {answers.map((answer, index) => {
          return  <AnswerItem answer={answer} key={index}/>
        })}
      </p>
      {props.answers.length > 2 && <p onClick={ (e) => {
        updateAnswers(loopAnswers)
      }}>Load More Answers</p>}
      <div >
      </div>
    </div>
  )
}

export default IdividualAnswer;