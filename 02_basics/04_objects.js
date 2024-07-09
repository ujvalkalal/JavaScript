//spread operator with example
//spread operator is used to spread the elements of an array or object
//spread operator is used to spread the elements of an array or object

//write the sample coode to check the spread operator
const arr = [1, 2, 3, 4, 5];
// console.log(...arr);

const obj = {
  name: "John",
  age: 30,
  email: "",
};
// console.log({ ...obj, name: "Ujval", age: 25 });

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

const obj4 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj4);

const course = {
  name: "JS",
  duration: "3 months",
  price: 2000,
  courseInstructor: "ujval",
};

//course.courseInstructor

const { courseInstructor: instructor } = course;
console.log(instructor);
