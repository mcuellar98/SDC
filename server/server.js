const express = require('express');
const app = express();
// make sure before deployment we create an .env file and make this process.env.PORT;
const port = 3000;

// here is the api link if we need it
// https://app-hrsei-api.herokuapp.com/api/fec2/:hr-rfe/




// this is Victors section



// this is  Amelia section





// this is  Heith section





app.get('/', (req,res) => {
  res.send('test')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})