//Data types
//1. Primitive Data types
//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//Javascript is statically typed or Dynamically typed Language?
//Javascript is dynamically typed language

// const score = 100;
// const isGoal = true;
// const scoreValue = 100.3;
// const outsideTemp = null;
// const isLoggedIn = false;

const Id = Symbol("123");
const anotherId = Symbol("123");
console.log(Id == anotherId);

const bigNumber = 98765412345678987654326789n;
console.log(typeof bigNumber);
console.log(bigNumber);

//2. Non-Primitive Data types or Referance Data type
// Array, Objects, Functions

const developers = ["ujval", "sai", "Faisal", "Ramesh"];
let myObj = {
  name: "ujval",
  age: 23,
  city: "bengaluru",
};
console.log(developers);

const myFunction = function () {
  console.log("Hello World");
};

myFunction();

//link to read the return types
//https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++Memory Lessions++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myRole = "developer";
let anotherRole = myRole;
anotherRole = "Cloud Engineer";

console.log(myRole);
console.log(anotherRole);

let user1 = {
  role: "developer",
  emailId: "ujval@google.com",
};

let user2 = user1;

user2.role = "Cloud Engineer";

console.log(user1);
console.log(user2);
