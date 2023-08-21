import React, {useState} from "react";
import axios from "axios";

const AnswerModal = (props) => {

return (
    <div className="absolute right-0">
      <form className="grid grid-col-2 gap-2 mr-4 bg-neutral-200 p-2" onSubmit={(e) => {
        e.preventDefault()
      var options = {
        "body":e.target[0].value,
        "name": e.target[1].value,
        "email": e.target[2].value,
        "photo": "[]"
      }
        axios.post("/questions/300476", options).then((result) => {
          return
        })
        props.updateShow(false);
      }} >
      <textarea
        id={'answerTextAreaID'}
        name={"answer conent"}
        placeholder="Add Answer Here"
        rows={5}
        cols={40}
        maxLength="1000"
        className="col-span-2 text-base rounded-sm text-black"
      />
        <input placeholder="Example: jack543!" maxLength="60" className="rounded-sm text-base p-1 text-black"/>
        <input placeholder="Email" type="email" className="rounded-sm text-base p-1 text-black"/>
        <p className="text-xs text-neutral-400 max-w break-words">For privacy reasons, do not use your full name or email address</p>
        <p className="text-xs text-neutral-400 max-w break-words">For authentication reasons, you will not be emailed</p>
        <input type="button" value="Submit Photo" className="rounded bg-neutral-500	 p-1"/>
        <input type="Submit" value="Submit" className="rounded bg-neutral-500	 p-1" readOnly={true}/>
      </form>
    </div>
)
}

export default AnswerModal;