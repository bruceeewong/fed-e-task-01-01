# Part1 Module 1 - 学习笔记

> 作者: 王思哲 bruski
>
> 时间: 2020/05/23

## ECMAScript

### 概述

ECMAScript 是语言标准，只负责定义语法

### 与 JavaScipt 的关系

JavaScript 是 ECMAScript 的实现与扩展

JavaScript 的本身，是 ECMAScript

在不同环境下, JS 的组成分别是:

- 浏览器
  - ECMAScript
  - Web APIs
    - DOM
    - BOM
- NodeJS
  - ECMAScript
  - Node APIs
    - fs
    - net
    - etc.

### 发展历程

ECMAScript 从 2015 年保持每年一个版本的迭代，按照发行年份命名

最重大的更新是 2015 年 6 月的 ES2015(ES6)，距离上个版本过了 6 年，特点是：

- 解决了原有语法上的问题或不足
- 对原有语法增强
- 全新的对象、方法、功能
- 全新的数据类型、结构

### ES 2015 新特性

#### let 与块级作用域

在 ES2015 之前，JS 只有全局作用域与函数作用域；ES2015 引入了块级作用域；

而`let`关键字可以:

- 为变量创建块级作用域
- 不会将变量声明提升

```js
if (true) {
  // var foo = "zce";
  let foo = "zce";
}
console.log(foo); // var 可访问; let 报错
```

```js
// 变量声明提升
console.log(foo); // undefined意味着声明了，但为赋值
var foo = "zce";

// // 变量声明不会提升
console.log(foo); // 变量未定义
let foo = "zce";
```

##### 应用举例：

###### 1 解决 var 的循环计数问题

```js
for (var i = 0; i < 3; i++) {
  for (var i = 0; i < 3; i++) {
    console.log(i);
  }
  console.log("内存循环结束, i = " + i); // 外层循环停止,因为i被内部循环改变了
}

// 加上let关键字创建块级作用域
// 正常循环9次
for (var i = 0; i < 3; i++) {
  // let 限制此 i 的作用域
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
  console.log("内存循环结束, i = " + i);
}
```

###### 2 以前通过闭包来借助函数作用域摆脱全局作用域的影响，现在用 `let` 即可

```js
// 有问题
var elements = [{}, {}, {}];
for (var i = 0; i < 3; i++) {
  elements[i].onclick = function () {
    console.log(i); // 始终都是全局作用域的 i 即取值都是 3
  };
}
elements[0].onclick(); // 都是3
elements[1].onclick(); // 都是3
elements[2].onclick(); // 都是3
```

```js
// 创建闭包：即借助函数作用域摆脱全局作用域的影响
var elements = [{}, {}, {}];
for (var i = 0; i < 3; i++) {
  elements[i].onclick = (function (i) {
    return function () {
      console.log(i);
    };
  })(i);
}
elements[0].onclick(); // 0
elements[1].onclick(); // 1
elements[2].onclick(); // 2
```

```js
// 创建块级作用域
var elements = [{}, {}, {}];
for (let i = 0; i < 3; i++) {
  elements[i].onclick = function () {
    console.log(i);
  };
}
elements[0].onclick(); // 0
elements[1].onclick(); // 1
elements[2].onclick(); // 2
```

<!-- 今天主要学习的是 ES2015 的特性：

箭头函数
对象字面量增强
Object 新增方法
Proxy 对象
Reflect 对象
里边有些以前没注意或看不懂的知识点：

Object 新增方法
Object.assign(target, args)：用于覆盖属性, 复制对象
Object.is(obj1, obj2)：用于比较对象，可以区分+0, -0, NaN**(===操作符不能区分)**

Proxy 对象
以前学 ES6 搞不懂这个有什么用，看到 Vue3 使用 Proxy 来替代 Object.defineProperty 监听对象，这回算是真正地去了解它。

他可以无侵入地监听对对象的操作，如 get, set, deleteProperty...

无侵入是指不用改动被监听的对象，具体语法为:

const obj = {name:'aaa', age: 18};
const objProxy = new Proxy(obj, {
get(target, property) { return target[property] },
set(target, property, value) { target[property] = value; }
});

// 调用代理对象去操作原对象
objProxy.name = 'bbb';
console.log(obj); // {name:'bbb', age:18}
相比 Object.defineProperty 只能监听属性的读写，Proxy 可以监听很多操作， 详情查看 MDN

还有一点, Vue2 为了监听数组对象，重写了数组的方法；而 Proxy 可以直接监听 Array 实例的 set 方法来完成监听 push, pop 等操作.

Reflect 静态类
它是统一封装好的对对象底层操作的 API

这个是以前完全漏掉的知识点, 首先他是 Proxy 对象各种方法的默认实现

const objProxy = new Proxy(obj, {
get(target, property) { return Reflect.get(target, property); } // 标准写法
});
其次，它是 ECMA 官方希望统一对象操作的静态类，再也不用记零零散散的知识啦：

// 统一对象操作
// in
console.log("name" in obj);
console.log(Reflect.has(obj, "name"));

// delete
obj.age1 = 111;
delete obj.age1;
obj.age1 = 111;
Reflect.deleteProperty(obj, "age1");

// keys
console.log(Object.keys(obj));
console.log(Reflect.ownKeys(obj));
今天就先学到这，明天继续学剩余 Promise， class 部分，加油啦。 -->

#### const 关键字

必须声明时初始化

不允许修改对象的引用(内存地址)，但可以修改对象属性的值(内存空间的数据)

```js
const obj = {};
obj.name = "jack"; // 可以改属性(内存空间放的数据)
obj = {}; // 不可改引用(内存地址)
```

#### 解构

##### 数组解构

语法

```js
const arr = [100, 200, 300];

const [foo, bar, baz] = arr;
const [, , baz] = arr;
const [foo, ...rest] = arr; // 剩余操作符，仅在最后使用
const [foo, bar, baz, more = "default"] = arr; // 默认值
```

应用 1： 分割字符

```js
// 解构能方便字符串分割取值
const path = "/foo/bar/baz";

// 以前需要临时变量
// const tmp = path.split("/");
// const rootdir = tmp[1];

// 现在用解构，方便
const [, rootdir] = path.split("/");
console.log(rootdir);
```

##### 对象解构

语法

```js
// 基础语法
const obj = { name: "Jack", age: 18 };
const { name } = obj;
console.log(name);

// 命名冲突 - 别名
const obj = { name: "Jack", age: 18 };
const name = "Amy";
const { name: objName } = obj;
console.log(name);

// 默认值
const obj = { name: "Jack", age: 18 };
const name = "Amy";
const { name: objName = "mike" } = obj;
console.log(name);
console.log(objName);
```

#### 字符串

##### 模板字符串

```js
// 换行符
const str1 = `hi.
i am bruski.
nice to meet u.
`;

console.log(str1);

// 变量
const name = "bruski";
const str2 = `I am ${name}`;
console.log(str2);

// 表达式
const gender = true;
const str3 = `It's ${gender ? "man" : "women"}`;
console.log(str3);
```

##### 高级用法：标签函数

- 定制模板显示的内容
- 过滤不安全内容
- 可以实现小型模板引擎

```js
const name = "bruski";
const gender = true;

function myFunc(strings, name, gender) {
  const sex = gender ? "man" : "woman";
  return strings[0] + name + strings[1] + sex + strings[2];
}
const result = myFunc`hey, ${name} is a ${gender}.`;
console.log(result);
```

##### 扩展方法

- includes 是否包含子串
- startsWith 是否以子串开头
- endsWith 是否以子串结尾

#### 参数

##### 参数默认值

当传值为 undefined 时，赋值默认参数

```js
// ES2015前，通过逻辑代码指定默认值
function foo(enabled) {
  enabled = enabled || true; // 短路操作符， 会把 false 值给覆盖了
  return enabled === undefined ? true : enabled;
}

// ES2015
function bar(enabled = true) {
  return enabled;
}
```

##### 剩余参数

`...`操作符

- 取代 arguments
- 只能用一次
- 只能放在最后

```js
function foo(bar, ...rest) {
  console.log(bar);
  console.log(rest);
}
```

##### 展开数组

将数组元素按次序传递

```js
console.log(...[1, 2, 3]);
```

#### 箭头函数

简化函数定义，易读

语法

```js
const inc = (n, m) => n + 1;

const arr = [];
arr.filter((i) => i === 0);
```

**不会改变 this 指向，绑定当前作用域的 this**

```js
const person = {
  name: "tom",
  sayHi: function () {
    console.log(`Hi I am ${this.name}`);
  },
  sayName: function () {
    setTimeout(() => {
      console.log(`I am ${this.name}`);
    });
  },
};

person.sayHi(); // tom
person.sayName(); // tom
```

#### 对象

##### 字面量增强

简写对象属性、方法，新增计算属性名

```js
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
```

##### 扩展方法

###### Object.assign

- 将源对象属性，合并到目标对象中；
- 后面会覆盖前面的；
- 返回值就是第一个参数的对象；

```js
// 1. Object.assign
// 用后面的对象合并第一个对象属性
const target = { a: 111, b: 222 };
const source = { a: 111, b: 444, c: 666 };
const result = Object.assign(target, source);
console.log(result);
console.log(result === target);

// 复制对象
function myFunc(obj) {
  const tmp = Object.assign({}, obj);
  return tmp;
}
```

###### Object.is

判断两个值是否相等

```js
// 2. Object.is
// 判断两个对象是否相等
// ===操作符无法区分 +0 -0, NaN
// 而is可以
console.log(+0 === -0);
console.log(Object.is(+0, -0));
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));
```

#### Proxy

设置代理来监听对象的属性变化

相比 defineProperty 的只监听 getter/setter，能监听更多方面：

- 监听 delete 等操作
- 数组的 push/pop 等通过监听 set 完成

```js
const person = {
  name: "bruski",
  age: 20,
};

const personProxy = new Proxy(person, {
  // 监听get
  get(target, property) {
    return property in target ? target[property] : "default";
  },
  // 监听set
  set(target, property, value) {
    if (!Number.isInteger(value)) {
      throw new TypeError(`${value} is not an int`);
    }
    target[property] = value;
  },
});

// 通过代理对象操作原对象
console.log(personProxy.name);
console.log(personProxy.age);
// console.log(personProxy.notExist); // default
// personProxy.age = "111"; // TypeError
```

```js
// VS defineProperty
// proxy可以监听更多操作，如delete...
const personProxy2 = new Proxy(person, {
  deleteProperty(target, property) {
    console.log("delete", property);
    delete target[property];
  },
});

delete personProxy2.age;
console.log(person);
```

```js
// 对数组的监视
const list = [];
const listProxy = new Proxy(list, {
  set(target, property, value) {
    console.log("set", property, value);
    target[property] = value;
    return true;
  },
});

listProxy.push(1); // set 0 1; set length 1
```

#### Reflect

官方用于统一对象的操作 API

内部封装了 13 个对对象的底层操作静态方法

```js
// 统一对象操作
// in
console.log("name" in obj);
console.log(Reflect.has(obj, "name"));

// delete
obj.age1 = 111;
delete obj.age1;
obj.age1 = 111;
Reflect.deleteProperty(obj, "age1");

// keys
console.log(Object.keys(obj));
console.log(Reflect.ownKeys(obj));
```

Proxy 内部的实现

```js
const obj = { name: "aaa", age: 18 };
const objProxy = new Proxy(obj, {
  get(target, property) {
    return Reflect.get(target, property); // 默认行为
  },
});

console.log(objProxy.name);
```

#### Class

##### 定义类

使用 `class` 关键字定义类，设置`constructor`构造函数，用`new`操作符创建实例

```js
// ES6
class Person {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(`hi, my name is ${this.name}`);
  }
}
const person = new Person("bruski");
person.say();
```

ES2015 之前，使用 构造函数 + 原型模式 的方式实现类

```js
// ES2015之前: 构造函数+原型模式 构造类
function Person(name) {
  this.name = name;
}

Person.prototype.say = function () {
  console.log(`hi, my name is ${this.name}`);
};

const person = new Person("bruski");
person.say();
```

##### 静态方法

`static`关键字声明

外部使用类名.方法直接调用，无需创建实例

内部可用类名或 this 访问

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(`hi, my name is ${this.name}`);
  }

  static create(name) {
    return new Person(name);
  }

  static debug() {
    Person.create("debug").say();
    // this.create("debug").say(); // It is the same as above
  }
}
const person = Person.create("bruski");
person.say(); // bruski

Person.debug(); // debug
```

##### 继承

在类定义时用 `extends` 关键字继承父类的属性和方法

内部用 `super` 可访问父类

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(`hi, my name is ${this.name}`);
  }
}

// 继承
class Employee extends Person {
  constructor(name, job) {
    super(name); // 调用父类构造函数
    this.job = job;
  }

  say() {
    super.say(); // 调用父类方法
    console.log(`My job is ${this.job}`);
  }
}

const employee = new Employee("bruski", "Web developer");
employee.say(); // name & job
```

#### Promise

异步解决方案，用链式回调替代回调嵌套

在异步编程部分详解

#### Set

集合，不允许重复

```js
const s = new Set([99, 100]); //构造函数接收数组

s.add(1); // add方法

s.add(2).add(3).add(4); // 链式调用

s.add(3); // 添加重复元素会忽略

s.has(3); // has 判断元素是否存在

s.delete(3); // 删除元素

s.clear(); // 清空元素
```

数组转换 & 去重

```js
// 数组去重
const arr = [1, 2, 3, 4, 2, 3, 1];
const result = Array.from(new Set(arr)); // method 1

const result2 = [...new Set(arr)]; // method 2
```

#### Map

Object 的问题

```js
// object的键只支持字符类型
// 不是字符类型会调用toString
const obj = {};
obj[true] = "value";
obj[123] = "value";
obj[{ a: 1 }] = "value";

console.log(Object.keys(obj));
console.log(obj["[object Object]"]); // 会产生问题
```

Map 支持任意类型键，真正的键值对

```js
const m = new Map();
const tom = { name: "tom" };
m.set(tom, 90);

console.log(m);
console.log(m.get(tom));
console.log(m.has(tom));

m.set("aaa", 12);
m.set(false, 222);

m.delete("aaa");
m.clear();
```

Map 遍历

```js
m.forEach((value, key) => {
  console.log(value, key);
});

console.log(m.entries());
for (const item of m.entries()) {
  console.log(item);
}
for (const item of m.keys()) {
  console.log(item);
}
```

#### Symbol

新的基础数据类型，用于定义独一无二的值

之前 5 种基础类型+1 种引用类型；加上 Symbol 基础类型 = 7 种数据类型

```js
Symbol() === Symbol(); // false

Symbol("描述"); // 添加描述文本
```

全局获取, `Symbol.for`查注册表，以字符串为键

```js
Symbol("key1");
const symbolKey1 = Symbol.for("key1");
```

特性：

会忽略 Symbol 的键的操作

- JSON.stringify
- Object.keys
- in 操作符

只获取 Symbol 的键

- Object.getOwnPropertySymbols

应用：

1 定义对象私有成员

```js
const secret = Symbol("secret");
const obj = {
  [secret]: "data1",
  public: "data2",
};

console.log(obj[secret]); // 内部通过symbol引用取值
console.log(obj.public); // 外部由于拿不到symbol的引用，所以只能string的key的值
```

2 内置标识符，用于重写对象的内置方法

```js
const obj1 = {
  [Symbol.toStringTag]: "XObject",
  [Symbol("key1")]: "symbol value",
  foo: "normal value",
};
console.log(obj1.toString());
```

#### For-Of 遍历方法

用于遍历实现了`Iterable`接口的对象

用法

```js
// 数组
const arr = [1, 2, 3, 4, 5];
for (const value of arr) {
  console.log(value);
}

// set
const set = new Set([1, 2, 3, 4, 5]);
for (const value of set) {
  console.log(value);
}

// map
const map = new Map();
map.set("key1", 1).set("key2", 2).set("key3", 3);
for (const [key, value] of map) {
  console.log(key, value);
}

const obj = { name: "bruski", age: 23 };
// 报错，not iterable
// for (const item of obj) {
//   console.log(item);
// }
```

##### Iterable 接口

在对象中定义为：

```js
const obj = {
  // Iterable接口
  [Symbol.iterator]: function () {
    // 返回Iterator对象
    return {
      next() {
        // 调用对象的next方法，返回iteration result
        return { value: "", done: false };
      },
    };
  },
};
```

应用：迭代器模式

```js
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

// 直接 for-of 统一获取
for (const item of todos) {
  console.log(item);
}
```

#### 生成器 Generator

解决异步的方案

语法

```js
function* foo() {
  yield 1;
  yield 2;
}
```

```js
function* foo() {
  console.log("111");
  yield 100;
  console.log("222");
  const result = yield 200; // 注意yield可以获取下次调用的参数
  console.log(result);
  console.log("333");
  yield 300;
}

const generator = foo();

console.log(generator.next()); // 111 {value: 100, done: false}
console.log(generator.next()); // 222 {value: 200, done: false}
console.log(generator.next("input")); // input 333 {value: 300, done: false}
console.log(generator.next()); // {value: undefined, done: true}
```

应用：发号器

```js
function* createIdMaker() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const idMaker = createIdMaker();
console.log(idMaker.next()); // {value: 1, done: false}
console.log(idMaker.next()); // {value: 2, done: false}
// ...
```

应用：使用 Generator 函数实现 iterator 方法

```js
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
```

### ES2015 Module

语言化的模块规范

### ES2016 (ver. 7)

两个特性

- Array.property.includes
- \*\* operator 幂运算符

```js
// Array.property.includes
const arr = [1, "a", true, NaN];

console.log("indexOf方法：");
console.log(arr.indexOf(1) !== -1);
console.log(arr.indexOf("a") !== -1);
console.log(arr.indexOf(true) !== -1);
console.log(arr.indexOf(NaN) !== -1); // 找不到NaN

console.log("includes方法：");
console.log(arr.includes(1));
console.log(arr.includes("a"));
console.log(arr.includes(true));
console.log(arr.includes(NaN)); // 可以检测
```

```js
// ** operator 幂运算符
console.log(Math.pow(2, 10));
console.log(2 ** 10);
```

### ES2017 (ver. 8)

更新的特性如下

#### Object 扩展方法

##### Object.values

返回所有值数组

##### Object.entries

返回键值对数组

可用于将对象转为 Map

```js
const map = new Map(Object.entries(obj));
console.log(map);
```

##### Object.getOwnProperyDescriptors

对于 getter / setter 属性， 直接 Object.assign 复制上面的对象， getter 属性会变成普通属性复制过来

所以要用 Object.getOwnProperyDescriptors 拿到属性的完整描述，再定义对象，就可复制 getter / setter 以及其他属性的定义和值

```js
const obj = {
  firstName: "Bruski",
  lastName: "Wang",
  age: 23,
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// 直接复制上面的对象， getter属性会变成普通属性复制过来
const obj2 = Object.assign({}, obj);
obj2.firstName = "snoopy";
console.log(obj2.name); // Bruski Wang :这里已经变成普通属性， 还记录着上一个对象的值

// 应该使用 Object.getOwnPropertyDescriptors 拿到属性完整描述， 再 defineProperties
const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors);
const obj3 = Object.defineProperties({}, descriptors);
obj3.firstName = "Snoopy";
console.log(obj3.name); // Snoopy Wang
```

#### String.property.padStart / String.property.padEnd

参数 (count, str)

用指定的字符填充到指定字符数，常用于输出格式化

```js
const books = {
  html: 5,
  css: 16,
  javascript: 128,
};

for (const [name, count] of Object.entries(books)) {
  const padName = name.padEnd(16, "-"); // 尾部填充中划线
  const padCount = count.toString().padStart(3, 0); // 补充前导0
  console.log(padName, padCount);
}
```

#### 允许函数最后一个参数带逗号

减少 git diff,便于调整参数顺序

#### Async 语法

在异步编程中讲
