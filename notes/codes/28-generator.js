// 生成器 Generator

function* foo() {
  console.log("111");
  yield 100;
  console.log("222");
  const result = yield 200;
  console.log(result);
  console.log("333");
  yield 300;
}

const generator = foo();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next("input"));
// console.log(generator.next());
