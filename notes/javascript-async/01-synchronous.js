// 同步模式

console.log("global begin"); // 调用1

function bar() {
  console.log("bar task");
}

function foo() {
  console.log("foo task");
  bar(); // 调用3
}

foo(); // 调用2

console.log("global end"); // 调用4
