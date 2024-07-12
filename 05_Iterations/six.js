//const coding = ["js", "php", "ruby", "java", "html", "css"];
// const values = coding.forEach((item) => {
//   console.log(item);
//   return item;
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => num > 4);
// console.log(newNums);

// myNums.forEach((item) => {
//   if (item > 4) console.log(item);
// });

// const newNums1 = [];
// myNums.forEach((item) => {
//   if (item > 4) newNums1.push(item);
// });
// console.log(newNums1);

//generate the array of objects for the books include details such as title, genre, publish, edition
const books = [
  {
    title: "book1",
    genre: "fiction",
    publish: 2020,
    edition: 1,
  },
  {
    title: "book2",
    genre: "non-fiction",
    publish: 2021,
    edition: 2,
  },
  {
    title: "book3",
    genre: "fiction",
    publish: 2022,
    edition: 3,
  },
  {
    title: "book4",
    genre: "non-fiction",
    publish: 2023,
    edition: 4,
  },
  {
    title: "book5",
    genre: "fiction",
    publish: 2024,
    edition: 5,
  },
];

let usebooks = books.filter((book) => book.genre === "non-fiction");

usebooks = books.filter((book) => {
  return book.publish >= 2022 && book.genre === "fiction";
});

console.log(usebooks);
