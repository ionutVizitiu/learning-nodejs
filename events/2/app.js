const Emitter = require('events');
const eventConfig = require('./config');
const emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
  console.log('someone said hello');
});

emtr.on(eventConfig.GREET, function() {
  console.log('someone else said hello too');
});

emtr.emit(eventConfig.GREET);