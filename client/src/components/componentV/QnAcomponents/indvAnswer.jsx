import React from "react";
import Helpful from "./Helpful.jsx"
import UserInfo from "./userInfo.jsx"
import Report from "./report.jsx"
import Answer from "./answer.jsx"
const IdividualAnswer = () => {

  return (
    <div>
      <div className="flex w-full justify-between">
      <p className="text-xl">
        Q: this will be where questions go
      </p> <span className="flex text-xs"><Helpful />&nbsp;| &nbsp;<Answer /></span>
      </div>

      <p className="text-xl">
        A: this will be where top rated Answer go
      </p>
      <div >
      <p className="flex text-xs"> <UserInfo /> &nbsp;| &nbsp;<Helpful /> &nbsp;| &nbsp;<Report /> &nbsp;</p>
      </div>
    </div>
  )
}

export default IdividualAnswer;