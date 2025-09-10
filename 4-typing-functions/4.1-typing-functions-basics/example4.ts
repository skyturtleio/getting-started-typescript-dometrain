import { Effect } from "effect";
// can also declare the type of a function variable:
const multiply: (a: number, b: number) => number = function (a, b) {
  return a * b;
};

// Or, can use arrow syntax
const divide = (a: number, b: number) =>
  Effect.suspend(() => {
    if (b === 0) {
      return Effect.fail(new Error("Cannot divide by zero"));
    }
    return Effect.succeed(a / b);
  });

console.log(divide(4, 0));
console.log(divide(20, 4));
