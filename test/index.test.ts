import { test, expect } from "@jest/globals";
import config from "../source";

test("import sanity check", () => {
  expect(typeof config).toBe("object");
  expect(config.env?.browser).toBe(true);
});
