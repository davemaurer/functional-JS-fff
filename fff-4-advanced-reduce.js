// old syntax for requiring resources
// var fs = require('fs');
// new syntax for requiring

import fs from 'fs'

var output = fs.readFileSync('data.txt', 'utf8')
  // read in lines from file using fs library and trim the last empty string
  .trim()
  // turn the outputted string into an array of strings
  .split('\n')
  // map over the array of strings to turn it into a more manageable object
  .map(line => line.split('\t'))
  .reduce((customers, line) => {
    customers[line[0]] = [];
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[4]
    });
    return customers
  }, {});


console.log('output', JSON.stringify(output, null, 2));
