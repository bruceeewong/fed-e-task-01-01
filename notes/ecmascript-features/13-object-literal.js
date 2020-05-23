// 对象字面量增强

const bar = 35;

const foo = {
  // bar: bar
  bar,
  method() {
    console.log(this.bar);
  },
  // 计算属性名
  [Math.random()]: 123,
};
