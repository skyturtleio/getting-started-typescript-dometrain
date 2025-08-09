import { expect, test } from "bun:test";

import {
  getUserRole,
  roles,
} from "./3-typing-fundamentals/3.10-record/exercise";

test("Get userRole for user1", () => {
  expect(getUserRole("user1", roles)).toBe("admin");
});

test("Getting a user role for a userId that does not exist", () => {
  expect(getUserRole("user", roles)).toBeUndefined();
});

