const fs = require('fs');

const readable = fs.createReadStream(__dirname + '/greet.txt');
const writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.pipe(writable);