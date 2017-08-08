const util = require('util');

const name = 'John';
const greeting = util.format('hello %s', name);

util.log(greeting);