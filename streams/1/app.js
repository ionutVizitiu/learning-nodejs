const fs = require('fs');

const readable = fs.createReadStream(__dirname + '/greet.txt',
  {
    encoding: 'utf8'

  });

readable.on('data', (chunk) => {
  console.log(chunk);
  console.log(chunk.length);
});