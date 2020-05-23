// 标签字符串模板
// 用于定制模板显示

console.log`hi. i am bruski.nice to meet u.`;

// 定制模板显示

const name = "bruski";
const gender = true;

function myFunc(strings, name, gender) {
  const sex = gender ? "man" : "woman";
  return strings[0] + name + strings[1] + sex + strings[2];
}
const result = myFunc`hey, ${name} is a ${gender}.`;
console.log(result);
