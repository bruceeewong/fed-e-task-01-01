export {};

// status: 状态
// 0 - waiting
// 1 - success
// 2 - failed

// use obj to imitate
const PostStatusObj = {
  Draft: 0,
  Unpulished: 1,
  Published: 2,
};

// 正常枚举
// enum PostStatus {
//   Draft = 0,
//   Unpulished = 1,
//   Published = 2,
// }

// 常量枚举, 不需要通过索引器访问
const enum PostStatus {
  Draft = 0,
  Unpulished = 1,
  Published = 2,
}

const post = {
  title: "title",
  desc: "desc",
  status: PostStatus.Draft,
};

// console.log(PostStatus[0]);
console.log(PostStatus.Published);
console.log(post);
