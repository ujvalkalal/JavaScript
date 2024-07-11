const userEmail = [];
if (userEmail) {
  console.log("Got user Email");
} else {
  console.log("Don't have user Email");
}

//falsy vaues
// false, 0, -0, BigInt 0n, "", null, NaN, undefined

//Truthy values
// {}, [], function(){},  "0", "false", true, "true", " ", "null"

const emptyObject = {};
if (Object.keys(emptyObject).length === 0) {
  console.log("object is empty");
}

//Nullish Coalesching Operator (??): null undefined

let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10;
//val1 = undefined ?? 15;
//val1 = 0 ?? 15;
val1 = null ?? 10 ?? 20; //10
console.log(val1);

//Terinary operator
let val2;
val2 = 5 > 2 ? "yes" : "no"; //yes
console.log(val2);
