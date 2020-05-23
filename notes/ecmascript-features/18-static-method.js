// static 关键字

// ES6
class Person {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(`hi, my name is ${this.name}`);
  }

  static create(name) {
    return new Person(name);
  }

  static debug() {
    this.create("debug").say();
    // Person.create("debug").say(); // It is the same
  }
}
const person = Person.create("bruski");
person.say();

Person.debug();
