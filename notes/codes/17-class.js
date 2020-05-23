// class 关键字

// ES6之前: 构造函数+原型模式 构造类
(function () {
  function Person(name) {
    this.name = name;
  }

  Person.prototype.say = function () {
    console.log(`hi, my name is ${this.name}`);
  };

  const person = new Person("bruski");
  person.say();
})();

(function () {
  // ES6
  class Person {
    constructor(name) {
      this.name = name;
    }
    say() {
      console.log(`hi, my name is ${this.name}`);
    }
  }
  const person = new Person("bruski");
  person.say();
})();
