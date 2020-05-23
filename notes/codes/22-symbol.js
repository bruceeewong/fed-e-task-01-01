// Symbol 数据类型

// 对象属性冲突
// shared.js
const cache = [];

(function () {
  // a.js
  cache["foo"] = "bar1";
  // b.js
  cache["foo"] = "bar2";
  console.log(cache);
})();

(function () {
  // Symbol创建独一无二的值
  console.log(Symbol() === Symbol());
  // a.js
  cache[Symbol()] = "bar1";
  // b.js
  cache[Symbol()] = "bar2";
  console.log(cache);
})();

// 添加描述文本
console.log(Symbol("描述"));

(function () {
  // 为对象创建私有变量
  const secret = Symbol("secret");
  const obj = {
    [secret]: "data1",
    public: "data2",
  };

  console.log(obj[secret]); // 内部通过symbol引用取值
  console.log(obj.public); // 外部由于拿不到symbol的引用，所以只能string的key的值
})();

(function () {
  // 全局查找Symbol 以字符串为索引
  Symbol("key1");
  Symbol("key2");
  Symbol({});
  console.log(Symbol.for("key1"));
  console.log(Symbol.for("key2"));
  console.log(Symbol.for("[object Object]"));
})();

(function () {
  // 内置标识符，用于重写对象的内置方法
  const obj1 = {
    [Symbol.toStringTag]: "XObject",
    [Symbol("key1")]: "symbol value",
    foo: "normal value",
  };
  console.log(obj1.toString());
})();

(function () {
  // 获取字符传Key的方法获取不到Symbol属性Key
  for (const key in obj1) {
    console.log(key);
  }
  console.log(Object.keys(obj1));
  console.log(JSON.stringify(obj1));

  console.log(Object.getOwnPropertySymbols(obj));
})();
