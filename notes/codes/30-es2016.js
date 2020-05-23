// ECMAScript 2016

// 两个特性
// Array.property.includes
const arr = [1, "a", true, NaN];

console.log("indexOf方法：");
console.log(arr.indexOf(1) !== -1);
console.log(arr.indexOf("a") !== -1);
console.log(arr.indexOf(true) !== -1);
console.log(arr.indexOf(NaN) !== -1); // 找不到NaN

console.log("includes方法：");
console.log(arr.includes(1));
console.log(arr.includes("a"));
console.log(arr.includes(true));
console.log(arr.includes(NaN)); // 可以检测

// ** operator 幂运算符
console.log(Math.pow(2, 10));
console.log(2 ** 10);
