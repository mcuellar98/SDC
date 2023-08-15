import React, { useEffect, useState } from 'react';
import axios from "axios";
import SearchBar from "./QnAcomponents/Searchbar.jsx";
import IdividualAnswer from "./QnAcomponents/indvAnswer.jsx";
import MoreAnswers from "./QnAcomponents/moreAnswers.jsx";
import AddQuestions from "./QnAcomponents/addQuestion.jsx";
const QuestionsAndAnswers = () => {
  const product = '37323'

useEffect(() => {
  axios.get(`/questions/${product}`).then((result) => {
    updateQuestions(result.data.results)
    wasUpdated(true)
  }).catch((err) => {
    console.error(err)
  })
}, [])
const [updated, wasUpdated] = useState(false)
const [questions, updateQuestions] = useState([{
  question_body: 'Please wait for page to load',
  question_date: '2020-11-16T00:00:00.000Z',
}])


useEffect(() => {
  console.log(questions)
  questions.sort((a,b) => {
    return b.question_helpfulness
    - a.question_helpfulness

  })
  var topQuestions = questions.slice(0,4)
updateQuestions([...topQuestions])
// updateTwo([...twoAnswers])
},[updated])



return (
  <div className="pl-24 pt-2 bg-neutral-800 text-white ">
    <h2  className=" text-lg">Questions & Answers</h2>
    <SearchBar />
    <div className="flex flex-col space-y-32 mt-3.5 pt-6 testers">
      {questions.map((question, index) => {
          var answers = [];
          for (var key in question.answers) {
            answers.push(question.answers[key])
          }
        return <IdividualAnswer questions={question} answers={answers}key={index}/>
      })}

    </div>
    <div className="my-1.5">
    <button className="rounded bg-neutral-400	 p-3">More Answered Questions</button> <AddQuestions />
    </div>
  </div>
)
}


export default QuestionsAndAnswers