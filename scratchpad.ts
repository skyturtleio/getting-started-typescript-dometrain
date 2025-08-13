const user = {
  id: "user id",
  name: "user name",
  callsign: "user callsign",
};

const userMetadata = {
  id: "metadata id",
  email: "metadata email",
  userId: "metadata userId",
  active: true,
  confirmedEmail: false,
};

const mergedUser = {
  ...user,
  ...userMetadata,
};

console.log(mergedUser.id);

type User = typeof user;
type Metadata = typeof userMetadata;

type MergedData =
  & { [K in keyof User]?: User[K] }
  & { [K in keyof Metadata]?: Metadata[K] };

type PartialMergedData =
  & Partial<User>
  & Partial<Metadata>;

const currentUser: MergedData = {
  id: "alsdkfjaslkdjfasdkfj",
};

const partialCurrentUser: PartialMergedData = {
  email: "testuser@example.com",
};

const bmw = { model: "330", horsepower: 350, turbo: true };

type CarLiteralType = keyof typeof bmw;
// type LoginCounts = {[userName: string]: number};
// const loginCounts: LoginCounts = {
//   Amir: 5,
//   Betty: 7,
// };
// loginCounts;
type LoginCounts = {
  [userName: string]: number;
  Amir: number;
};

const logins: LoginCounts = {
  Betty: 5,
};
