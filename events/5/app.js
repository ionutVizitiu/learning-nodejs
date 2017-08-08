const util = require('util');

function Person() {
  this.first = 'john';
  this.last = 'doe';
}

Person.prototype.greet = function() {
  console.log(`hello ${this.first} ${this.last}`);
};

function Policeman() {
  Person.apply(this);
  this.badgeNr = '123';
}

util.inherits(Policeman, Person);
const officer = new Policeman();

officer.greet();
console.log(officer.badgeNr);