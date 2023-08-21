import React, {useState} from "react";
import QuestionModal from "./modal/questionmodal.jsx"

const AddQuestions = (props) => {
  const [questionModal, updateQModal] = useState(false)

  return (
    <div>
    {questionModal && <QuestionModal />}
  <button className="rounded bg-neutral-400	 p-3" onClick={(e) => {
    updateQModal(!questionModal)
  }}>{questionModal && 'Cancel'} {!questionModal && 'Add A Question'}</button>
  </div>
)
}
export default AddQuestions