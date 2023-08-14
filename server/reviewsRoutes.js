const reviewsRouter = require('express').Router();
const axios = require('axios');
const config = require('../config.js');
const basePath = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';



reviewsRouter.get('/getAllReviews', (req, res) => {
  // let productId = parseInt(req.query.product_id);
  let productId = 37311;
  let options = {
    headers: { Authorization: config.api_key},
    params: {
      product_id: productId,
      count: req.query.count,
      sort: req.query.sort,
      page: req.query.page
    }
  };
  console.log(req.url);

  axios.get(basePath + '/reviews', options)
    .then((response) => {
      console.log(response.data.results);
      res.send(response.data.results);
    })
    .catch((err) => {
      console.log('axios GET reviews failed');
      res.status(400).send(err);
    });
});


module.exports = reviewsRouter;
