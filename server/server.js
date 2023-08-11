const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();

// make sure before deployment we create an .env file and make this process.env.PORT;
const port = 3000;
app.use(express.static(path.join(__dirname, ".." ,"/client/dist")));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// here is the api link if we need it
// https://app-hrsei-api.herokuapp.com/api/fec2/:hr-rfe/



// this is Victors section



// this is  Amelia section





// this is  Heith section




app.listen(port, () => {
  console.log(`listening on port ${port}`)
})