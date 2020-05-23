// Iterable 接口

const obj = {
  store: ["foo", "bar", "baz"],

  // 实现 Iterable 接口
  [Symbol.iterator]: function () {
    let index = 0;
    const self = this;

    return {
      // iterator
      next: function () {
        // iteration result
        const result = {
          value: self.store[index],
          done: index >= self.store.length,
        };
        index++;
        return result;
      },
    };
  },
};

for (const item of obj) {
  console.log(item);
}
