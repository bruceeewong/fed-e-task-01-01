// Reflect对象 统一了对象的操作API
// 也是Proxy内部的实现
const obj = { name: "aaa", age: 18 };
const objProxy = new Proxy(obj, {
  get(target, property) {
    return Reflect.get(target, property); // 默认行为
  },
});

console.log(objProxy.name);

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
