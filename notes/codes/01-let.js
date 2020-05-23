// let 与块级作用域

// ES2015 之前只有全局&函数作用域
(function () {
  if (true) {
    // var foo = "zce";
    let foo = "zce";
  }
  // console.log(foo); // var 可访问; let 报错
})();

// --------------------------------

// 循环变量问题
(function () {
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
})();

// --------------------------------

(function () {
  var elements = [{}, {}, {}];
  for (var i = 0; i < 3; i++) {
    elements[i].onclick = function () {
      console.log(i); // 始终都是全局作用域的 i 即取值都是 3
    };
  }
  elements[0].onclick(); // 都是3
  elements[1].onclick(); // 都是3
  elements[2].onclick(); // 都是3

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
})();

// --------------------------------

// for循环i和内部的i互不影响
(function () {
  for (let i = 0; i < 3; i++) {
    let i = "foo";
    console.log(i);
  }
})();

// --------------------------------

(function () {
  // 变量声明提升
  console.log(foo); // undefined意味着声明了，但为赋值
  var foo = "zce";

  // // 变量声明不会提升
  console.log(foo); // 变量未定义
  let foo = "zce";
})();
