// String
// 1. String is a primitive data type in JavaScript.
// 2. String is a sequence of characters.
// 3. String is immutable.
// 4. String can be created using single quotes, double quotes, or backticks.
// 5. String can be concatenated using the + operator.

const name = "ujval";
const repocount = 43;
console.log(name + repocount + "value");

// 6. String can be concatenated in another way called the string interpolation
// 7. String interpolation can be done using backticks.

console.log(`Hello my name is ${name} has ${repocount} repositories`);

const gameName = new String("ujval");
console.log(gameName);
console.log(typeof gameName);
console.log(gameName[0]);

console.log(gameName.toLocaleUpperCase());
console.log(gameName);
console.log(gameName.charAt(2));
console.log(gameName.indexOf("l"));

const newstring = gameName.substring(0, 3);
console.log(newstring);

const anotherstring = gameName.slice(-8, 4);
console.log(anotherstring);

const strtrm = "          ujval           ";
console.log(strtrm);
console.log(strtrm.trim());

const url = "https://ujval.com/ujval%20portfolio";
console.log(url.replace("%20", "-"));

console.log(url.includes("u"));

//split
const email = "ujval-kalal-test-folo.com";
console.log(email.split("-"));
