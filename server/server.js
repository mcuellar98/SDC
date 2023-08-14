const express = require('express');
require('dotenv').config()
const questionRouter = require('./questionRoutes.js')
const bodyParser = require('body-parser');
const path = require('path')
const app = express();

// make sure before deployment we create an .env file and make this process.env.PORT;
const port = 3000;
app.use(express.static(path.join(__dirname, ".." ,"/client/dist")));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req,res,next) => {
  if (!req.headers.authorization) {
    req.headers.authorization = process.env.TOKEN;
  }
  next();
})

// here is the api link if we need it



// this is Victors section
app.get("/questions/:product_id", (req,res) => {
  questionRouter(req).then((result) => {
    res.send(result)
  })

})


// this is  Amelia section





// this is  Heith section


// app.get('/', (req,res) => {
//   console.log('HERE')
//   res.send('test')
// })

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})