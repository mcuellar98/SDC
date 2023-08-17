import React, { useState, useEffect } from "react";
import AnswerItem from "./answerList.jsx"
import Helpful from "./Helpful.jsx"
import AnswerModal from "./modal/answermodal.jsx"

const IdividualAnswer = (props) => {

  const [collapse, updateCollapse] = useState(props.answers.length > 2)
  var loopAnswers = props.answers
  useEffect(() => {
    loopAnswers.sort((a, b) => {
      return b.helpfulness - a.helpfulness
    })
    if (loopAnswers.length < 2) {
      updateCollapse(false)
    }
    var twoAnswers = loopAnswers.slice(0, 2)
    updateAnswers([...twoAnswers])
    updateTwo([...twoAnswers])
  }, [props.answers, answers])

  const [showModal, updateShow] = useState(false)
  const [two, updateTwo] = useState(0);
  const [answers, updateAnswers] = useState(props.answers)

const handleLoad = () => {
    if (answers.length <= 2) {
      updateAnswers(loopAnswers)
    } else {
      updateAnswers(two)
      updateCollapse(false)
    }
}

  return (
    <div>
      <div className="flex w-full justify-between ">
        <div className="text-xl">
          Q: {props.questions.question_body}
          {showModal && <AnswerModal updateShow={updateShow} questionID={props.questions.question}/>}
        </div> <span className="flex text-xs text-stone-400 pr-2.5" ><Helpful id={props.questions.question_id} helpfulness={props.questions.question_helpfulness}/>&nbsp;| &nbsp;<p className="hover:text-stone-50" onClick={(e) => {
          updateShow(!showModal)
        }}> {showModal && 'Cancel'} {!showModal && 'Add Answer'}</p></span>
      </div>
      <div className="indAnswer">
        <div className="outer" >
          <div className="text-xl max-w-xl">
            {answers.map((answer, index) => {
              return <AnswerItem answer={answer} key={index}/>
            })}
          </div>
          {props.answers.length > 2 && <p onClick={(e)=> handleLoad()}>{answers.length <= 2 ? 'Load More Answers' : "Collapse Answers"}</p>}
        </div>
      </div>
    </div>
  )
}

export default IdividualAnswer;