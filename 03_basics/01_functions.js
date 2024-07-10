function sayMyName() {
  console.log("U");
  console.log("J");
  console.log("V");
  console.log("A");
  console.log("L");
}
// sayMyName();

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }
// //addTwoNumbers(1, 2);
// const result = addTwoNumbers(5, 6);
// console.log(result);

//function return realated stuff

function addTwoNumbers(num1, num2) {
  //   let result = num1 + num2;
  //   return result;
  return num1 + num2;
}
const result = addTwoNumbers(6, 5);
// console.log("result: ", result);

// function loginMessage(username) {
//   return `${username} just logged in`;
// }

// const message = loginMessage("Ujval");
// console.log(message);

//conditions
function loginMessage(username) {
  //   if (username === undefined) {
  if (!username) {
    console.log("Please provide a username");
    return;
  }
  return `${username} just logged in`;
}

const message = loginMessage("ujval");
// console.log(message);

function calculateCartPrice(...num) {
  return num;
}

console.log(calculateCartPrice(100, 200, 300));
