let result = "Read";

let switchRead = function () {
  if ((document.getElementById("state").textContent = "Read")) {
    console.log((document.getElementById("state").textContent = "Unread"));
    // console.log("Hi");
  }
};

let switchUnread = function () {
  //   if ((document.getElementById("state").textContent = "Unread")) {
  //     console.log((document.getElementById("state").textContent = "Read"));
  //     // console.log("Hello");
  //   }
};

document.querySelector("#state").addEventListener("click", switchRead);
// document.querySelector("#state").addEventListener("click", switchUnread);

const personFactory = (name, age) => {
  const sayHello = () => console.log("hello!");
  return { name, age, sayHello };
};

const jeff = personFactory("jeff", 27);

console.log(jeff.name); // 'jeff'

jeff.sayHello(); // calls the function and logs 'hello!'

const Person = function (name, age) {
  this.sayHello = () => console.log("hello!");
  this.name = name;
  this.age = age;
};

const jeff1 = new Person("jeff", 27);
console.log(jeff1);

const name = "Maynard";
const color = "red";
const number = 34;
const food = "rice";

console.log(name, color, number, food); // Maynard red 34 rice

console.log({ name, color, number, food });
