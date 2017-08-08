var util = require('util');

var name = 'John';
var greeting = util.format('hello %s', name);

util.log(greeting);