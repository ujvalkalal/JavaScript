//singleton

//Object Literal

//symbol
const mysym = Symbol("Key1");
const JsUser = {
  name: "John",
  age: 30,
  [mysym]: "My Key1",
  email: "ujval@gmail.com",
  blogs: ["why mac & cheese rules", "10 things to make with marmite"],
  "phone Number": 987654567,
};

// console.log(JsUser);
// console.log(JsUser.name);
console.log(JsUser["phone Number"]);
console.log(JsUser[mysym]);
console.log(typeof mysym);

//Object Literal
// const JsUser = {
//   name: "John",
//   age: 30,
//   email: "test@gmail.com"
// }
// console.log(JsUser);
// console.log(JsUser.name);
// console.log(JsUser.age);
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["name"]);
// console.log(JsUser["age"]);

JsUser.email = "ujval@microsoft.com";
