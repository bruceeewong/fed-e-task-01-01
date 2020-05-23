const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve();
  console.log(2);
});

console.log(4);

promise.then(() => {
  console.log(3);
});
// 答案 1 2 4 3
