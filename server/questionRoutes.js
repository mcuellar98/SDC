const express = require('express');
const app = express();
const axios = require('axios');
const basePath = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=';



questionRouter = (req, res) => {
  const url = basePath + req.params.product_id

  return axios.get(url, {
    headers: {
      'authorization': req.headers.authorization
    }
  }
    ).then((result) => {
    return result.data
  })

};


module.exports = questionRouter;