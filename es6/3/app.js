'use strict';

class Person {
  constructor(firstName, lastName) {
    this.first = firstName;
    this.last = lastName;
  }

  greet() {
    console.log(`hello ${this.first} ${this.last}`);
  }
}

let john = new Person('john', 'doe');
john.greet();

let jane = new Person('jane', 'doe');
jane.greet();