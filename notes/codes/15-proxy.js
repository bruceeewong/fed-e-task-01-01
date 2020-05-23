// Proxy对象的使用
// 用于代理对象的属性的访问与写入

const person = {
  name: "bruski",
  age: 20,
};

(function () {
  const personProxy = new Proxy(person, {
    get(target, property) {
      return property in target ? target[property] : "default";
    },
    set(target, property, value) {
      if (!Number.isInteger(value)) {
        throw new TypeError(`${value} is not an int`);
      }
      target[property] = value;
    },
  });

  console.log(personProxy.name);
  console.log(personProxy.age);
  // console.log(personProxy.notExist); // default
  // personProxy.age = "111"; // TypeError
})();

(function () {
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
})();

(function () {
  // 对数组的监视
  const list = [];
  const listProxy = new Proxy(list, {
    set(target, property, value) {
      console.log("set", property, value);
      target[property] = value;
      return true;
    },
  });

  listProxy.push(1);
})();
