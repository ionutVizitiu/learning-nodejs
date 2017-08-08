function greet(callback) {
  console.log('hello');
  callback();
}

greet(function() {
  console.log('callback called');
});

greet(function() {
  console.log('another callback was called');
});