// Interface only features
// 2. Declaration merging
interface User {
  name: string;
}

interface User {
  age: number;
}

interface User {
  // @ts-expect-error: "Subsequent property declarations must have the same type..."
  name: number;
}

const user: User = {
  name: "Cory",
  age: 22,
};
