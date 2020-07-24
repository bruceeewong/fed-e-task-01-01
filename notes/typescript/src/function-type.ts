export {};

function fn1(a: string, b: string = "vv"): string {
  return "func";
}

fn1("a", "b");
// fn1(1, 2); // error
// fn1("a", "b", "c"); // error

function fn2(a: string, b: string = "vv", ...rest: string[]): string {
  return "func";
}

const fn3: (a: string, b: string) => string = function (a: string, b: string) {
  return "";
};
