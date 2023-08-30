const fs = require('fs');
const { parse } = require("csv-parse");
const readline = require('readline');
const {Products, Features} = require('./db.js');
const _ = require('underscore');

// fs.createReadStream("./../raw_data/features.csv")
//   .pipe(parse({ delimiter: ",", from_line: 2 }))
//     .on("data", function (row) {
//       console.log(row);
//     })
//     .on("error", function (error) {s
//       console.log(error.message);
//     })
//     .on("end", function () {
//       console.log("finished");
//     });

const makeTableRow = (arr1, arr2) => {
  var row = {};
  _.each(arr1, (field, index) => {

    var value = arr2[index];
    row[field] = JSON.parse(value);
  });
  return row;
}

var cntr = 0;
var rl = readline.createInterface({
  input: fs.createReadStream("raw_data/features.csv")
});

var fields;
rl.on('line', function(line) {
  if (cntr === 0) {
      fields = line.split(',');
  } else {
    var values = line.split(',');
    var feature = new Features(makeTableRow(fields, values));
    feature.save();
  }
  cntr++;
});

//{id: parseInt(values[0]), product_id: parseInt(values[1]), feature: values[2].slice(1, values[2].length-1), value: values[3].slice(1, values[3].length - 1) }