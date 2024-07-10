//scopes
// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

//scopes
// if (true) {
//   let a = 40;
//   const b = 50;
//   var c = 60;
// }
// console.log(a);
// console.log(b);
// console.log(c);

let a = 400;
if (true) {
  let a = 40;
  const b = 50;
  console.log("Inner Scope Value is", a);
}
console.log(a);
