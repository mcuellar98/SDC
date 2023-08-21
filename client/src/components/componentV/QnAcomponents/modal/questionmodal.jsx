import React, {useState} from "react";
import axios from "axios";

const QuestionModal = (props) => {

return (
      <form className="absolute bottom-0 right-0 z-10 grid grid-col-2 gap-2 mr-4 bg-neutral-200 p-2" onSubmit={(e) => {
        e.preventDefault()
      var options = {
        "body":e.target[0].value,
        "name": e.target[1].value,
        "email": e.target[2].value,
      }
        axios.post("/addQuestion/37323", options).then((result) => {
          return
        })
        props.updateShow(false);
      }}>
      <textarea
        id={'questionTextAreaID'}
        name={"question conent"}
        placeholder="Add Question Here"
        rows={6}
        cols={40}
        maxLength="1000"
        className="col-span-2 text-base rounded-sm text-black"
      />
        <input placeholder="Example: jackson11!" maxLength="60" className="rounded-sm text-base p-1 text-black"/>
        <input placeholder="Email" type="email" maxLength="60" className="rounded-sm text-base p-1 text-black"/>
        <p className="text-xs text-neutral-400 max-w break-words">For privacy reasons, do not use your full name or email address</p>
        <p className="text-xs text-neutral-400 max-w break-words">For authentication reasons, you will not be emailed</p>
        <input type="Submit" value="Submit" className="rounded bg-neutral-500	 p-1 col-span-2" readOnly={true}/>
      </form>
)
}

export default QuestionModal;