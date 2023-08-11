import React from 'react'
import SearchBar from "./QnAcomponents/Searchbar.jsx"
import IdividualAnswer from "./QnAcomponents/indvAnswer.jsx"
import MoreAnswers from "./QnAcomponents/moreAnswers.jsx"
import AddQuestions from "./QnAcomponents/addQuestion.jsx"
const QuestionsAndAnswers = () => {


return (
  <div className="bg-neutral-600 pl-1.5">
    <h2  className="text-slate-800 text-lg ">Questions & Answers</h2>
    <SearchBar />
    <div className="flex flex-col space-y-32 mt-3.5">
    <IdividualAnswer />
    <IdividualAnswer />
    <p>Load More Answers</p>
    </div>
    <div className="my-1.5">
    <MoreAnswers /> <AddQuestions />
    </div>
  </div>
)

}


export default QuestionsAndAnswers