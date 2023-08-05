import { expect, it } from "vitest";

//interfaces
interface AddTwoNumbersArgs {
  first: number;
  second: number;
}

export const addTwoNumber = (params: AddTwoNumbersArgs) => {
  return params.first + params.second;
};

it("sould add the two numbers together", () => {
  expect(
    addTwoNumber({
      first: 2,
      second: 4,
    })
  ).toEqual(6);

  expect(
    addTwoNumber({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});
