//numbers in javascript
const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));
console.log(balance.toString().length);

//precession
const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4));

//loocals
const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

//++++++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++++++++
//Maths
console.log(Math.PI);

//absolute
console.log(Math.abs(-100));
//roundoff
console.log(Math.round(10.5));
//min
console.log(Math.min(10, 20, 30, 40, 50));
//max
console.log(Math.max(10, 20, 30, 40, 50));

console.log(Math.random());

console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
