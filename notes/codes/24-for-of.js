// For Of 遍历

// 数组
const arr = [1, 2, 3, 4, 5];
for (const value of arr) {
  console.log(value);
}

const set = new Set([1, 2, 3, 4, 5]);
for (const value of set) {
  console.log(value);
}

const map = new Map();
map.set("key1", 1).set("key2", 2).set("key3", 3);
for (const pair of map) {
  console.log(pair);
}

const obj = { name: "bruski", age: 23 };
// 报错，not iterable
// for (const item of obj) {
//   console.log(item);
// }
