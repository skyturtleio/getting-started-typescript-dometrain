// 1. Define an enum called Direction with four possible values: Up, Down, Left, Right
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// 2. Create a function called `move` that takes a Direction enum as an argument and uses a switch to return a corresponding string like "Moving up!"
function move(direction: Direction) {
  switch (direction) {
    case Direction.Up:
      return "Moving up!";
    case Direction.Down:
      return "Moving down!";
    case Direction.Left:
      return "Moving left!";
    case Direction.Right:
      return "Moving right!";
  }
}

console.log(move(Direction.Right));

// 3. Define an enum called Status with explicit values: Success = 1, Failure = -1, Pending = 0
enum Status {
  Success = 1,
  Failure = -1,
  Pending = 0,
}

// 4. Create a function called getStatusMessage that accepts the Status enum as an argument and returns a corresponding message like "Operation was successful! or "Operation failed!"
function getStatusMessage(status: Status) {
  switch (status) {
    case Status.Success:
      return "Operation was successful";
    case Status.Failure:
      return "Operation failed";
    case Status.Pending:
      return "Operation is pending";
  }
}

console.log(getStatusMessage(Status.Success));

// 5. Implement the same feature, but this time use a object literal instead of an enum
const statusObject = {
  success: 1,
  failure: -1,
  pending: 0,
} as const;

// 6. Create a function called getStatusMessageLiteral that accepts the statusLiteral as an argument and returns a corresponding message
function getStatusMessageLiteral(status: keyof typeof statusObject) {
  switch (status) {
    case "success":
      return "Operation was successful";
    case "failure":
      return "Operation failed";
    case "pending":
      return "Operation is pending";
  }
}

statusObject.success;
