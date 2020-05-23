// 箭头函数与this

const person = {
  name: 'tom',
  sayHi: function () {
    console.log(`Hi I am ${this.name}`);
  },
  sayName: function () {
    setTimeout(() => {
      console.log(`I am ${this.name}`);
    })
  }
};

person.sayHi();
person.sayName();
