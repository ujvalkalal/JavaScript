//(IIFE) Immediately Invoked function Expressions

//below is the named iife
(function check1() {
  console.log("db Connected 1");
})();
(function check2() {
  console.log("db Connected 2");
})();

//unnamed iife
(() => {
  console.log("db Connected 3");
})();

((name) => {
  console.log(`db Connected to ${name}`);
})("Ujval");

// make sure you provide the semicolun to funtions when you want to write the multiple iife
