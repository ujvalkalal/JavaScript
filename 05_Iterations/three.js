//for of
// ["", "", ""];
// [({}, {}, {})];

const arr = [1, 2, 3, 4, 5];
for (const val of arr) {
  //   console.log(`value is the ${val}`);
}

const greetings = "Hello world";
for (const greet of greetings) {
  // console.log(`each charecter is ${greet}`);
}

//Maps
const map = new Map();
// map.set("name", "ujval");
// map.set("age", 25);
// map.set("price", 999);
// map.set("name", "ujval");
//console.log(map);
map.set("IN", "INDIA");
map.set("USA", "United states of America");
map.set("EN", "England");

for (const [key, value] of map) {
  //console.log(key + ":- " + value);
}

//Object
const obj = {
  game1: "NFS",
  game2: "GTA",
  game3: "PUBG",
};

for (const [key, value] of obj) {
  console.log(key + ":- " + value);
}
