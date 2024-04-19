// Arrow functions
const doSomething = () => {};

// Ternary operators
var age = 6;
let user_name = age > 10 ? "Vic" : "Kyle";
console.log(user_name);

// Objects

const person = {
  first_name: "Vic",
  user_age: 31,
  isMarried: false,
};
const { first_name, user_age, isMarried } = person;
console.log(first_name);

// Map, Filter

let names = ["Pedro", "Vic", "kyle"];

names.map((name) => {
  return name + "Joe";
});

// console.log(names)

names.filter((name) => {
  console.log(name !== "d");
});

// async function walkDog(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogWalked = true;

//             if (dogWalked){
//                 resolve("You walked the dog")
//             }else{
//                 reject("You didnt walk the dog")
//             }
//         }, 1500);
//     })

// }

// function cleanKitchen(){

// }

// function takeOutTrash(){

// }

const event = new Promise((resolve, reject) => {
  var name = "Pedro";
  if (name == "victor") {
    resolve(name);
  } else {
    reject(name);
  }
});

event
  .then((name) => {
    console.log(name);
  })
  .catch((err) => {
    console.log("Not victor, name is :"+ err);
  });
