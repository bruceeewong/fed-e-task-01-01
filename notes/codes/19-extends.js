// 继承

class Person {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(`hi, my name is ${this.name}`);
  }
}

class Employee extends Person {
  constructor(name, job) {
    super(name);
    this.job = job;
  }

  say() {
    super.say();
    console.log(`My job is ${this.job}`);
  }
}

const employee = new Employee("bruski", "Web developer");
employee.say();
