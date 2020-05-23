// 数组的解构

const arr = [100, 200, 300];

(function () {
  const [foo, bar, baz] = arr;
  console.log(foo, bar, baz);
})();

(function () {
  const arr = [100, 200, 300];
  const [, , baz] = arr;
  console.log(baz);
})();

(function () {
  // 剩余操作符，仅在最后使用
  const [foo, ...rest] = arr;
  console.log(rest);
})();

(function () {
  const [foo, bar, baz, more] = arr;
  console.log(more); // 访问不存在的下标, undefined
})();

(function () {
  // 默认值
  const [foo, bar, baz, more = "default"] = arr;
  console.log(more);
})();

(function () {
  // 解构能方便字符串分割取值
  const path = "/foo/bar/baz";
  // 以前需要临时变量
  // const tmp = path.split("/");
  // const rootdir = tmp[1];

  const [, rootdir] = path.split("/");
  console.log(rootdir);
})();
