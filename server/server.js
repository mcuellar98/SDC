const express = require('express');
require('dotenv').config()
const {questionRouter, postQuestionsRoute, updateHelpful, updateAnswer} = require('./questionRoutes.js')
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


// this is Victors section\
app.put("/helpful/:question_id", (req,res) => {
  updateHelpful(req)
})

app.put("/helpful/:answer_id/answer", (req,res) => {
  console.log('here')
  updateAnswer(req)
})

app.post("/questions/:question_id" , (req, res) => {
  postQuestionsRoute(req).then((result) => {
    res.end();
  })
})

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
      const styleImages = response.data.results[0].photos.map(photo => photo.url);
      res.json(styleImages);
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

//Thumbnail Images
app.get('/api/thumbnail', (req, res) => {
  const requestOptions = {
    headers: {
      Authorization: process.env.TOKEN,
    }
  };

  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37314/styles', requestOptions)
    .then(response => {
      const thumbnailImages = response.data.results[0].photos.map(photo => photo.thumbnail_url);
      res.json(thumbnailImages);
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});




app.listen(port, () => {
  console.log(`listening on port ${port}`)
})