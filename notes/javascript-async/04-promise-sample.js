// Promise 基本示例

const promise = new Promise(function (resolve, reject) {
  resolve(100);

  reject(new Error("")); // 状态不可更改 无效
});

// 在end之后才执行
promise.then(
  function (value) {
    console.log("resolve", value);
  },
  function (err) {
    console.log("reject", err);
  }
);

console.log("end");
