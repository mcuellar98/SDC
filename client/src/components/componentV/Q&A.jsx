import React from 'react'
import SearchBar from "./QnAcomponents/Searchbar.jsx"
import IdividualAnswer from "./QnAcomponents/indvAnswer.jsx"
const QuestionsAndAnswers = () => {


return (
  <div className="bg-emerald-600">
    <h2  className="text-indigo-500 text-lg">Questions & Answers</h2>
    <SearchBar />
    <IdividualAnswer />
    <IdividualAnswer />
  </div>
)

}


export default QuestionsAndAnswers