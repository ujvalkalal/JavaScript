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

// let a = 400;
// if (true) {
//   let a = 40;
//   const b = 50;
//   console.log("Inner Scope Value is", a);
// }
// console.log(a);

//Function Scopes

function one() {
  const username = "ujval";
  function two() {
    const website = "www.ujval.com";
    console.log(website);
  }
  //   console.log(website);
  two();
}
//one();

if (true) {
  const username = "ujval";
  if (username === "ujval") {
    const website = " youtube";
    //console.log(username + website);
  }
}

//++++++++++++++++++++++++++++++++++++++++++++++Intresting++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num) {
  return num + 1;
}

// console.log(addTwo(5));
const addTwo = function (num2) {
  return num2 + 2;
};
