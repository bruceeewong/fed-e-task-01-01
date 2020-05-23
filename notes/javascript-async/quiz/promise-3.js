// MDN https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
// 注意：如果忽略针对某个状态的回调函数参数，或者提供非函数 (nonfunction) 参数，那么 then 方法将会丢失关于该状态的回调函数信息，但是并不会产生错误。
// 如果调用 then 的 Promise 的状态（fulfillment 或 rejection）发生改变，但是 then 中并没有关于这种状态的回调函数，那么 then 将创建一个没有经过回调函数处理的新 Promise 对象，
// 这个新 Promise 只是简单地接受调用这个 then 的原 Promise 的终态作为它的终态。

// 当一个 Promise 完成（fulfilled）或者失败（rejected）时，返回函数将被异步调用（由当前的线程循环来调度完成）。
// 具体的返回值依据以下规则返回。如果 then 中的回调函数：
// 返回一个未定状态（pending）的 Promise，那么 then 返回 Promise 的状态也是未定的，并且它的终态与那个 Promise 的终态相同；
// 同时，它变为终态时调用的回调函数参数与那个 Promise 变为终态时的回调函数的参数是相同的。const promise1 = Promise.resolve(1);

Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);

// 结果 1
