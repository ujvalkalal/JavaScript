//copy paste below code in browser source part and debug you will understand the callstack

function one() {
  console.log("one");
  two();
}
function two() {
  console.log("three");
  three();
}
function three() {
  console.log("three");
}
one();
two();
three();
