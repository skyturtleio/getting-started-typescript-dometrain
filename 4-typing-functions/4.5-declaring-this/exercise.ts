// Exercise: Understanding `this` in TypeScript Functions

// Question 1:
// Create an object literal called `user` with a property `username` and a method `introduce`.
// The `introduce` method should return an introduction message that includes the
// `username` property using `this`.
const user = {
  username: "turtle",
  introduce() {
    return `Hello, there ${this.username}`
  }
}

console.log(user.introduce())
// Question 2:
// Create a class `Counter` with a property `count` initialized to 0 and a method `increment`.
// The `increment` method should increase the `count` property by 1 using `this`.
class Counter {
  count: number = 0;

  increment() {
    this.count = this.count + 1
  }
}

const myCounter = new Counter();
console.log(myCounter.count)
myCounter.increment()
console.log(myCounter.count)
myCounter.increment()
console.log(myCounter.count)

// Question 3:
// Create a function `sayHello` that logs a greeting message for the person object below using `this`.
// Use the `call` method to invoke the `sayHello` function with the `person` object.

const person = { username: "Alice" };
function sayHello(this: { username: string }) {
  console.log(`Hello, ${this.username}`)
}

sayHello.call(person)
