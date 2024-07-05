//arrays
//arrays are a collection of elements
//arrays are defined using square brackets
//elements are separated by commas
//elements can be of any data type
//arrays can be of any length
//arrays can be nested
//arrays can be multi-dimensional
//arrays can be empty
//arrays can be sparse
//arrays are zero-indexed

//shallow copy:
//deep copy:

const myArr = [0, 1, 2, 4, 5, 6, 7];
const myheros = ["shaktiman", "nagarjun"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

//array methods
//push
// myArr.push(8);
// console.log(myArr);
//pop
// myArr.pop();
// console.log(myArr);
//shift
// myArr.shift();
// console.log(myArr);

//unshift
// myArr.unshift(0);
// console.log(myArr);

//splice
console.log("A", myArr);
const myn1 = myArr.splice(1, 3);
console.log(myn1);

//slice
console.log("B", myArr);
const myn2 = myArr.slice(1, 3);
console.log(myn2);

//concat
//reverse
//sort
//indexOf
//lastIndexOf
//includes
// console.log(myArr.includes(9));
//find
//findIndex
//filter
//map
//reduce
//forEach
//every
//some
//fill
//join
//toString
//isArray
//from
//of
//copyWithin
//entries
//keys
//values
//flat
