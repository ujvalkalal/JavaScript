//reduce
// Write a function that takes an array of numbers and returns the sum of the numbers.

const mynums = [1, 2, 3, 4, 5, 6, 7];
// const myTotal = mynums.reduce(function (accumlator, currentValue) {
//   console.log(
//     `accumalator: ${accumlator} and current value is: ${currentValue}`
//   );
//   return accumlator + currentValue;
// }, 0);

const myTotal = mynums.reduce(
  (accumalator, currentValue) => accumalator + currentValue,
  0
);
console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js Course",
    price: 2999,
  },
  {
    itemName: "C# Course",
    price: 999,
  },
  {
    itemName: "Pyrhon Course",
    price: 3999,
  },
  {
    itemName: "React Native Course",
    price: 4999,
  },
  {
    itemName: "Data Science Course",
    price: 12999,
  },
  {
    itemName: "Devops Course",
    price: 13999,
  },
];

const cartTotal = shoppingCart.reduce(
  (accumalator, item) => accumalator + item.price,
  0
);
console.log(cartTotal);
