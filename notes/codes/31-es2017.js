// ECMAScript 2017

const obj = {
  firstName: "Bruski",
  lastName: "Wang",
  age: 23,
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// 1. Object.values
console.log(Object.values(obj));

// ------------------------------------------

// 2. Object.entries
console.log(Object.entries(obj));
// 可以用于构建Map
const map = new Map(Object.entries(obj));
console.log(map);

// ------------------------------------------

// 3. Object.getOwnPropertyDescriptors

// 直接复制上面的对象， getter属性会变成普通属性复制过来
const obj2 = Object.assign({}, obj);
obj2.firstName = "snoopy";
console.log(obj2.name); // Bruski Wang :这里已经变成普通属性， 还记录着上一个对象的值

// 应该使用 Object.getOwnPropertyDescriptors 拿到属性完整描述， 再 defineProperties
const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors);
const obj3 = Object.defineProperties({}, descriptors);
obj3.firstName = "Snoopy";
console.log(obj3.name); // Snoopy Wang

// ------------------------------------------

// 4. String.property.padStart / String.property.padEnd
const books = {
  html: 5,
  css: 16,
  javascript: 128,
};

for (const [name, count] of Object.entries(books)) {
  const padName = name.padEnd(16, "-"); // 尾部填充中划线
  const padCount = count.toString().padStart(3, 0); // 补充前导0
  console.log(padName, padCount);
}
