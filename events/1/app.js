const Emitter = require('./emitter');
const emtr = new Emitter();

emtr.on('greet', function() {
  console.log('someone said hello');
});

emtr.on('greet', function() {
  console.log('someone else said hello too');
});

console.log('hello');

emtr.emit('greet');