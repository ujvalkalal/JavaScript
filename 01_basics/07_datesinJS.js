//Dates
let myDates = new Date();
console.log(myDates);
console.log(myDates.toString());
console.log(myDates.toDateString());
console.log(myDates.toLocaleString());

//let myCreatedDate = new Date(2023, 0, 27);
let myCreatedDate = new Date(2023, 0, 27, 9, 5);
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let mytimestamp = Date.now();
console.log(mytimestamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now() / 1000));
