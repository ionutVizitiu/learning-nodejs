const fs = require('fs');

const greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

fs.readFile(__dirname + '/greet.txt', 'utf8', (error, data) => {
  console.log(data);
});

console.log('done');