var compression = require('express-compression')
const express = require('express');
require('dotenv').config()
const {questionRouter, postQuestionsRoute, updateHelpful, updateAnswer, addQuestion , reportAnswer, reportQuestion} = require('./questionRoutes.js')
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const basePath = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';
const reviewsRouter = require('./reviewsRoutes.js');
const db = require('./db.js');
const Promise = require("bluebird");

// Create Express app
const app = express();

// Set up headers for API requests
let params = {
  headers: { Authorization: process.env.TOKEN }
};

// Set the port for the server to listen on
const port = 3000;

// Use compression middleware to compress responses
app.use(compression());

// Set up body parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the client's 'dist' directory
app.use(express.static(path.join(__dirname, '..', '/client/dist')));

// Middleware to set authorization header
app.use((req, res, next) => {
  if (!req.headers.authorization) {
    req.headers.authorization = process.env.TOKEN;
  }
  next();
});


//Amelia's section
app.use('/reviews', reviewsRouter);


//--------------------------------------------------------------------------------------

//Victor's section
app.put("/helpful/:question_id", (req,res) => {
  updateHelpful(req)
})

app.put("/helpful/:answer_id/answer", (req,res) => {
  updateAnswer(req)
})

app.post("/questions/:question_id" , (req, res) => {
  postQuestionsRoute(req)
})

app.get("/questions/:product_id", (req,res) => {
  questionRouter(req).then((result) => {
    res.send(result)
  })
})

app.post("/addQuestion/:product_id", (req,res) => {
  addQuestion(req)
})

app.put("/reportQuestion/:question_id", (req,res) => {
  reportQuestion(req)
})

app.put("/reportAnswer/:answer_id", (req,res) => {
  reportAnswer(req)
})

// this is Ratings & Reviews section
app.use('/reviews', reviewsRouter);


//-------------------------------------------------------------------------------------
// Heith section

//View Images
app.get('/api/images', (req, res) => {
  var styleObj = {};
  styleObj.product_id = '37315';
  styleObj.results = [];
  db.styles.find({productId: 5})
    .then((results) => {
      results.forEach((result)=> {
        var obj = {};
        obj.style_id = result.id + 220997;
        obj.name = result.name;
        obj.original_price = result.original_price;
        obj.sale_price = (result.sale_price === 'null' ? null: result.sale_price);
        obj['default?'] = result.default_style;
        obj.photos = [];
        obj.skus = {};
        db.photos.find({styleId: result.id})
          .then((results) => {
            results.forEach((result) => {
              obj.photos.push({url: result.url, thumbnail_url: result.thumbnail_url})
            })
            return db.skus.find({styleId: result.id})
          })
          .then((results) => {
            results.forEach((sku) => {
              var skuId = sku.id+1281031
              obj.skus[skuId] = {quantity: sku.quantity, size: sku.size}
            })
            return Promise.resolve(obj)
          })
          .then((object) => {
            styleObj.results.push(object);
            res.json(styleObj);
          })
          .catch((err) => {
            res.status(500).json({ error: 'Internal Server Error' });
          })
      })
    })
    .catch((err) => {
      res.status(500).json({ error: 'Internal Server Error' });
    })
});

app.get('/api/product', (req, res) => {
  var productObj = {}
  db.products.find({id: 5})
    .then((result) => {
      productObj.id = result[0].id + 37310;
      productObj.campus = result[0].campus;
      productObj.name = result[0].name;
      productObj.slogan = result[0].slogan;
      productObj.description = result[0].description;
      productObj.category = result[0].category;
      productObj.default_price = result[0].default_price;
      productObj.created_at = result[0].created_at;
      productObj.updated_at = result[0].updated_at;
      return db.features.find({product_id: 6})
    })
    .then((result) => {
      productObj.features = [];
      result.forEach((obj) => {
        productObj.features.push({
          feature: obj.feature,
          value: obj.value
        })
      });
      res.json(productObj);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Internal Server Error' });
    })
});

//-------------------------------------------------------------------------------------------

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})