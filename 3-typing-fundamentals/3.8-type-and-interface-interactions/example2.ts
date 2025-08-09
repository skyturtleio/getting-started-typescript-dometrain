// Type can extend interface
interface User {
  name: string;
}
type UserWithAge = User & { age: number };

const user: UserWithAge = {
  name: "John Doe",
  age: 28,
};
