
const db = require('./db.js');
const exec = require('child_process').exec;
const _ = require('underscore');
const fs = require('fs');
const readline = require('readline');

// Fast method

var problematicDataSets = [];

async function seed(cb) {
  var length = Object.keys(db).length;
  _.each(Object.keys(db), (table, index) => {
    var command = `mongoimport --type csv --headerline --db sdc --collection ${table} --file raw_data/${table}.csv --drop`
    exec(command, (err, stdout, stderr) => {
      if (err) {
        problematicDataSets.push(table)
        console.log(err)
        return
      }
      console.log(`${table} seeded`)
      if (index === length - 1) {
        cb();
      }
    })
  });
}

//Slow method. Used when data need to be edited before adding to db

function makeRow(arr1, arr2) {
  var obj = {}
  _.each(arr1, (field, index) => {
    var value = arr2[index];
    if (value[0]==='"' && value[value.length-1] !== '"') {
      value += '"';
    } else if (value[0] !== '"' && value[value.length-1] === '"') {
      value = '"' + value;
    }
    obj[field] = JSON.parse(value);
  })
  return obj;
}

async function slowSeed(table) {
  await db[table].deleteMany({});
  var counter = 0;
  const fileStream = fs.createReadStream(`raw_data/${table}.csv`);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  var fields;
  for await (const line of rl) {
      if (counter === 0) {
        var fields = line.split(',');
        counter++;
      } else {
        var values = line.split(',');
        await db[table].create(makeRow(fields, values))
      }
  }
  console.log(`${table} seeded`)
}


seed(() => {
  problematicDataSets.forEach((table) => {
    slowSeed(table)
  })
})






// await db.Features.create({id: values[0], product_id: values[1], feature: values[2], value: values[3]})
