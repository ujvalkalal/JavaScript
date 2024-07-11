const user = {
  username: "ujval",
  age: 25,
  price: 999,
  welcomemessage: function () {
    console.log(`${this.username} welcome to website`);
    // console.log(this);
  },
};
// user.welcomemessage();

// console.log(this);

// function drink() {
//   let username = "ujval";
//   //console.log(this)
//   console.log(this.username);
// }
// drink();

// const drink = function () {
//   let username = "ujval";
//   //console.log(this);
//   console.log(this.username);
// };
// drink();

// Arrow functions
const drink = () => {
  let username = "ujval";
  //console.log(this);
  console.log(this);
};
//drink();

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => num1 + num2;

//const addTwo = (num1, num2) => ({ username: "ujval" });
// console.log(addTwo(1, 2));
