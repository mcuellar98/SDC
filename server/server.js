const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('../config.js');
const axios = require('axios');
const basePath = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';
const reviewsRouter = require('./reviewsRoutes.js');


const app = express();
let params = {
  headers: {Authorization: config.api_key}
}

// make sure before deployment we create an .env file and make this process.env.PORT;
const port = 3000;
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, ".." ,"/client/dist")));
app.use(bodyParser.json());

app.use(express.json());
app.use('/reviews', reviewsRouter);


// here is the api link if we need it
// https://app-hrsei-api.herokuapp.com/api/fec2/:hr-rfe/


// this is Victors section



// this is Ratings & Reviews section
app.use('/reviews', reviewsRouter);

// this is  Heith section


app.get('/', (req,res) => {
  res.send('test')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})