import { expect, it } from "vitest";
import { z } from "zod";

const numberPaser = z.string();

export const toString = (num: any) => {
  const parsed = numberPaser.parse(num);
  return String(parsed);
};

it("Should throw a runtime error when called with not a number", () => {
  expect(() => toString("123")).toThrowError(
    "Expected number, received string"
  );
});

it("Should return a string when called with a number", () => {
  expect(toString(1)).toBeTypeOf("string");
});
