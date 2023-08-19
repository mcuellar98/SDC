const express = require('express');
const app = express();
const axios = require('axios');
const basePath = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=';
const postPath ='https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/'
const answerHelpPath ='https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/'


questionRouter = (req, res) => {
  const url = basePath + req.params.product_id + "&count=50"

  return axios.get(url, {
    headers: {
      'authorization': req.headers.authorization
    }
  }
    ).then((result) => {
    return result.data
  })

};

postQuestionsRoute = (req, res) => {
  // console.log(req.body)
const posturl = postPath + req.params.question_id + "/answers"
// console.log(posturl)
  axios.post(posturl, req.body, {
    headers: {
      'authorization': req.headers.authorization
    }
  }).then((result) => {
    console.log(result)
  }).catch((err) => {
    console.error(err)
  })
}

updateAnswer = (req , res) => {
  const answerHelpUrl = answerHelpPath + req.params.answer_id + "/helpful"
  axios.put(answerHelpUrl, "test", {
    headers: {
      'authorization': req.headers.authorization
    }
  }).then((result) => {
    // console.log("result",result);
  }).catch((err) => console.error(err))
}

updateHelpful = (req,res) => {
  const helpPath = postPath + req.params.question_id + "/helpful"
  axios.put(helpPath, "test", {
    headers: {
      'authorization': req.headers.authorization
    }
  }).then((result) => {
    // console.log("result",result);
  }).catch((err) => console.error(err))
}

addQuestion = (req, res) => {
  req.body.product_id = Number(req.params.product_id);
  console.log(req.body)
  axios.post(postPath, req.body,  {
    headers: {
      'authorization': req.headers.authorization
    }
  }).then((result) => {
    console.log(result)
  }).catch((err) => console.error("err"))
}
//make a new one for post request

exports.questionRouter = questionRouter;
exports.postQuestionsRoute = postQuestionsRoute;
exports.updateHelpful = updateHelpful;
exports.updateAnswer = updateAnswer;
exports.addQuestion = addQuestion;