const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("hello");
  }, 10);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("lagou");
  }, 10);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("I ❤️ U");
  }, 10);
});

Promise.all([promise1, promise2, promise3]).then((res) => {
  const [a, b, c] = res;
  console.log(a + b + c);
});
