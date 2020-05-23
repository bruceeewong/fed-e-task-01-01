function ajax(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.onload = function () {
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };

    xhr.send();
  });
}

// 定义生成器函数
function* main() {
  try {
    const users = yield ajax("/api/users.json");
    console.log(users);

    const users2 = yield ajax("/api/users1.json");
    console.log(users2);
  } catch (e) {
    console.log(e);
  }
}

const g = main(); // 创建生成器对象

// const result = g.next(); // 拿到异步promise

// result.value.then(function (data) {
//   // 定义成功回调
//   g.next(data);
// });

// 递归实现
function handleResult(res) {
  if (res.done) return;
  res.value.then(
    (data) => handleResult(g.next(data)),
    (err) => g.throw(err)
  );
}

handleResult(g.next());

// async 方案
async function main1() {
  try {
    const users = await ajax("/api/users.json");
    console.log(users);

    const users2 = await ajax("/api/users1.json");
    console.log(users2);
  } catch (e) {
    console.log(e);
  }
}

main1();
