
const db = require('./db.js');
const exec = require('child_process').exec;
const _ = require('underscore');
const fs = require('fs');
const readline = require('readline');

// Fastest seeding method using mongoimport
// Keeps track of tables that give an error on import and runs secondary callback seeding function to fix data and seed manually
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

// Slow method. Used when data need to be edited before adding to db
function makeRow(arr1, arr2) {
  var obj = {};
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

// Call top level seeding function and provide slower seeding callback
seed(() => {
  problematicDataSets.forEach((table) => {
    slowSeed(table)
  })
  db.products.updateMany({}, {
    $inc: {id: 37310},
    created_at: new Date(),
    updated_at: new Date(),
    campus: 'hr-rfe'
  })
  .then(() => {
    console.log('Dates and campus added to product');
    return db.features.updateMany({}, {$inc: {product_id: 37310}});
  })
  .then(() => {
    console.log('Features product_id updated')
    return db.products.aggregate([
      {$limit: 1000},
      {$project: {
        id: 1,
        campus: 1,
        name: 1,
        slogan: 1,
        description: 1,
        category: 1,
        default_price : { $concat: [ {$substr: ["$default_price", 0, 10] }, ".00" ] },
        created_at: 1,
        updated_at: 1
      }},
      {$lookup: {
        from: "features",
        let: {id: "$id"},
        pipeline: [
          { $match:  {$expr: {$in: ['$product_id', ["$$id"]]}} },
          { $sort: {id: 1}},
          { $project: {_id: 0, feature:  1, value: 1} }
        ],
        as: "features"
        }
      },
      { $out: "completeProducts" }
    ])
  })
  .then((result) => {
    console.log('Products joined with features');
    process.exit();
  })
})







