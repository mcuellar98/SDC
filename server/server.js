const express = require('express');
require('dotenv').config()
const questionRouter = require('./questionRoutes.js')
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const basePath = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';
const reviewsRouter = require('./reviewsRoutes.js');



const app = express();
let params = {
  headers: {Authorization: process.env.TOKEN}
}

// make sure before deployment we create an .env file and make this process.env.PORT;
const port = 3000;
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, ".." ,"/client/dist")));
app.use(bodyParser.json());
app.use((req,res,next) => {
  if (!req.headers.authorization) {
    req.headers.authorization = process.env.TOKEN;
  }
  next();
})

app.use(express.json());
app.use('/reviews', reviewsRouter);


// here is the api link if we need it


// this is Victors section
app.get("/questions/:product_id", (req,res) => {
  questionRouter(req).then((result) => {
    res.send(result)
  })

})


// this is Ratings & Reviews section
app.use('/reviews', reviewsRouter);

// this is  Heith section

//View Images
app.get('/api/images', (req, res) => {
  const requestOptions = {
    headers: {
      Authorization: process.env.TOKEN,
    }
  };

  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37314/styles', requestOptions)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.get('/api/product', (req, res) => {
  const requestOptions = {
    headers: {
      Authorization: process.env.TOKEN,
    }
  };

  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37314', requestOptions)
  .then(response => {
    res.json(response.data);
  })
    .catch(error => {
      console.error('Error fetching product info:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});



app.listen(port, () => {
  console.log(`listening on port ${port}`)
})