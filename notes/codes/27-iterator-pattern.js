// 迭代器设计模式

// 场景：共同协同开发任务清单应用

// 我的代码 =========

const todos = {
  life: ["吃饭", "睡觉", "打豆豆"],
  learn: ["语文", "数学", "英语"],
  others: ["喝茶"],

  // 实现 iterable 接口
  [Symbol.iterator]() {
    const all = [...this.life, ...this.learn, ...this.others];
    let index = 0;

    return {
      next: () => {
        return {
          value: all[index],
          done: index++ >= all.length,
        };
      },
    };
  },
};

// 你的代码 =========

// 耦合严重，需要统一定制for of接口而无需跟另一个人的逻辑实现耦合
// for (const item of todos.life) {
//   console.log(item);
// }
// for (const item of todos.learn) {
//   console.log(item);
// }
// for (const item of todos.others) {
//   console.log(item);
// }

// 直接 for-of 统一获取
for (const item of todos) {
  console.log(item);
}
