const marvel_Heros = ["SpiderMan", "Thor", "Iron Man"];
const dc_Heros = ["Superman", "Flash", "Batman"];
// marvel_Heros.push(dc_Heros);
// console.log(marvel_Heros);
// console.log(marvel_Heros[3][1]);

//concat
// const all_heros = marvel_Heros.concat(dc_Heros);
// console.log(all_heros);

//spread operator
const all_heros2 = [...marvel_Heros, ...dc_Heros];
// console.log(all_heros2);

//Array
console.log(Array.isArray("UJVAL"));
console.log(Array.from("UJVAL"));
console.log(Array.from({ name: "UJVAL" })); //Intresting and importent Concept

//of
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
