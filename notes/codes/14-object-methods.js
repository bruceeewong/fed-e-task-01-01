// 对象扩展方法

// 1. Object.assign

// 用后面的对象合并第一个对象属性
const target = { a: 111, b: 222 };
const source = { a: 111, b: 444, c: 666 };
const result = Object.assign(target, source);
console.log(result);
console.log(result === target);

// 复制对象
function myFunc(obj) {
  const tmp = Object.assign({}, obj);
  return tmp;
}

// 2. Object.is
// 判断两个对象是否相等
// ===操作符无法区分 +0 -0, NaN
// 而is可以
console.log(+0 === -0);
console.log(Object.is(+0, -0));
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));
