// ES2015 - const关键字
(function(){
  const name = "zce";
  name = "jack";  // 不允许修改
})()

(function(){
  const name;  // 必须带值声明
  name = 'jack';
})();


(function(){
  const obj = {};
  obj.name = "jack"; // 可以该属性(内存空间放的数据)
  obj = {}; // 不可改引用(内存地址)
})();