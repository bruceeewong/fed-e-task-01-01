// 参数默认值

// ES2015前，通过逻辑代码指定默认值
function foo(enabled) {
  enabled = enabled || true; // 短路操作符， 会把 false 值给覆盖了
  return enabled === undefined ? true : enabled;
}

// ES2015
function bar(enabled = true) {
  return enabled;
}
