// Exercise: Type Intersections in TypeScript

// Question 1:
// Given the two interfaces below, create a new type `Staff`
// that's an intersection of `Person` and `Employee`.
// Then, create a variable `staff` of type `Staff` and assign some values to it.

interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  department: string;
}

type Staff = Person & Employee;

const supervisor: Staff = {
  name: "Turtle",
  age: 41,
  employeeId: 42,
  department: "operations",
};

type PartialStaff = Partial<Person> & Partial<Employee>;

const manager: PartialStaff = {
  name: "John Doe",
  department: "teaching",
};
