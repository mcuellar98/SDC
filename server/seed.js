
const db = require('./db.js');
const exec = require('child_process').exec;
const _ = require('underscore');
const fs = require('fs');
const readline = require('readline');

// Fastest seeding method using mongoimport
// Keeps track of tables that give an error on import and runs secondary callback seeding function to fix data and seed manually
// var problematicDataSets = [];

// async function seed(cb) {
//   var length = Object.keys(db).length;
//   _.each(Object.keys(db), (table, index) => {
//     var command = `mongoimport --type csv --headerline --db sdc --collection ${table} --file raw_data/${table}.csv --drop`
//     exec(command, (err, stdout, stderr) => {
//       if (err) {
//         problematicDataSets.push(table)
//         console.log(err)
//         return
//       }
//       console.log(`${table} seeded`)
//       if (index === length - 1) {
//         cb();
//       }
//     })
//   });
// }

// //Slow method. Used when data need to be edited before adding to db
// function makeRow(arr1, arr2) {
//   var obj = {}
//   _.each(arr1, (field, index) => {
//     var value = arr2[index];
//     if (value[0]==='"' && value[value.length-1] !== '"') {
//       value += '"';
//     } else if (value[0] !== '"' && value[value.length-1] === '"') {
//       value = '"' + value;
//     }
//     obj[field] = JSON.parse(value);
//   })
//   return obj;
// }

// async function slowSeed(table) {
//   await db[table].deleteMany({});
//   var counter = 0;
//   const fileStream = fs.createReadStream(`raw_data/${table}.csv`);
//   const rl = readline.createInterface({
//     input: fileStream,
//     crlfDelay: Infinity
//   });
//   var fields;
//   for await (const line of rl) {
//       if (counter === 0) {
//         var fields = line.split(',');
//         counter++;
//       } else {
//         var values = line.split(',');
//         await db[table].create(makeRow(fields, values))
//       }
//   }
//   console.log(`${table} seeded`)
// }

// // Call top level seeding function and provide slower seeding callback
// seed(() => {
//   problematicDataSets.forEach((table) => {
//     slowSeed(table)
//   })
// })

// Add dates to product table
db.products.updateMany({}, {
  created_at: new Date(),
  updated_at: new Date(),
  campus: 'hr-rfe'
})
.then(() => {
  console.log('Dates added to product')
  process.exit();
})








