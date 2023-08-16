import React, {useState} from "react";
import axios from "axios";

const AnswerModal = (props) => {

return (
    <div className="absolute right-0">
      <form className="grid grid-col-2 gap-2 mr-4 bg-neutral-200 p-2" onSubmit={(e) => {
        e.preventDefault()
        console.log(e.target[0].value)
      }} >
      <textarea
        id={'answerTextAreaID'}
        name={"answer conent"}
        placeholder="Add Answer Here"
        rows={4}
        cols={40}
        className="col-span-2 text-base rounded-sm text-black"
      />
        <input placeholder="Nickname"className="rounded-sm text-base p-1 text-black"/>
        <input placeholder="Email" className="rounded-sm text-base p-1 text-black"/>
        <input type="button" value="Submit Photo" className="rounded bg-neutral-500	 p-1"/>
        <input type="Submit" value="Submit" className="rounded bg-neutral-500	 p-1" readOnly={true}/>
      </form>
    </div>
)
}

export default AnswerModal;