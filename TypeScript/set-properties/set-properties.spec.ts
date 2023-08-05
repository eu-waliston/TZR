import { expect, it } from "vitest";

type Params = { first: string; last?: string };

export const getName = (params: Params) => {
  if (params.last) {
    return `Hello ${params.first} ${params.last}`;
  }

  return params.first;
};

it("Should wor WITH just the first name", () => {
  const name = getName({
    first: "Lucian",
  });

  expect(name).toEqual("Lucian");
});

it("Should work with the first and last name", () => {
  const name = getName({
    first: "Hobbie",
  });
  expect(name).toEqual("Hobbie");
});
