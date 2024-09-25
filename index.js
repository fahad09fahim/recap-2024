//array looping using js

// for loop in array
//const friends = ["john", "james", "kodu", "jmes", "modhu"];

// for (const friend of friends) {
//   console.log(friend);
// }

// for in in objects

const person = {
  name: "Alice",
  age: 30,
  occupation: "Developer",
};

// Using for...in loop to iterate over properties of the person object
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
