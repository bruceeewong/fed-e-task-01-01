// 应用1: 发号器
function* createIdMaker() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const idMaker = createIdMaker();
console.log(idMaker.next());
console.log(idMaker.next());
console.log(idMaker.next());
console.log(idMaker.next());
console.log(idMaker.next());
console.log(idMaker.next());

// 应用2: 使用 Generator 函数实现 iterator 方法
const todos = {
  life: ["吃饭", "睡觉", "打豆豆"],
  learn: ["语文", "数学", "英语"],
  others: ["喝茶"],

  // 实现 iterable 接口
  [Symbol.iterator]: function* () {
    const all = [...this.life, ...this.learn, ...this.others];
    for (const item of all) {
      yield item;
    }
  },
};

for (const item of todos) {
  console.log(item);
}
