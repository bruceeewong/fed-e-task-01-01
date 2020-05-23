Promise.resolve(1)
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((e) => {
    return 3;
  })
  .then((res) => {
    console.log(res);
  });

// 答案 1 2
