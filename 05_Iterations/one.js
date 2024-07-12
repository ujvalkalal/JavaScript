// for (let index = 0; index < 10; index++) {
//   const element = index;
//   console.log(element);
// }

//break and continue
for (let index = 1; index < 10; index++) {
  if (index === 5) {
    //console.log("the fav number 5 is detected");
    break;
  }
  // console.log(index);
}

for (let index = 1; index < 10; index++) {
  if (index === 5) {
    console.log("the fav number 5 is detected");
    continue;
  }
  console.log(index);
}
