// 异步模式

console.log("global begin"); // 调用1，执行1

// 调用2，开启计时器1
setTimeout(function timer1() {
  console.log("timer1 invoke");
}, 1800);

// 调用3，开启计时器2
setTimeout(function timer2() {
  console.log("timer2 invoke");

  setTimeout(function inner() {
    console.log("inner invoke");
  }, 1000);
}, 1000);

// 调用4，执行2
console.log("global end");
