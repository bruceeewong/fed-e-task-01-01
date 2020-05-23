// Map 数据结构

// object的键只支持字符类型
// 不是字符类型会调用toString
const obj = {};
obj[true] = "value";
obj[123] = "value";
obj[{ a: 1 }] = "value";

console.log(Object.keys(obj));
console.log(obj["[object Object]"]); // 会产生问题

// Map
const m = new Map();
const tom = { name: "tom" };
m.set(tom, 90);

console.log(m);
console.log(m.get(tom));
console.log(m.has(tom));

m.set("aaa", 12);
m.set(false, 222);

m.delete("aaa");
// m.clear()

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
