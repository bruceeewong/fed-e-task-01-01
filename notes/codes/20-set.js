// Set数据结构
const s = new Set();

// add方法
s.add(1);

console.log(s);

// 链式调用
s.add(2).add(3).add(4);

console.log(s);

// 添加重复元素会忽略
s.add(3);
console.log(s);

// has 判断元素是否存在
console.log(s.has(3));

// 删除元素
s.delete(3);
console.log(s);

// 清空元素
s.clear();
console.log(s);

// 数组去重
const arr = [1, 2, 3, 4, 2, 3, 1];
const result = Array.from(new Set(arr));
console.log(result);

const result2 = [...new Set(arr)];
console.log(result2);
