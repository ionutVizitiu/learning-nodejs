function Greetr() {
  this.greeting = 'hello greet4';
  this.greet = function() {
    console.log(this.greeting);
  }
}

module.exports = Greetr;