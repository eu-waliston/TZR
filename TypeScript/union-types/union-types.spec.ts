import { expect, it } from "vitest";

const corceAmount = (amount: number | { amount: number }) => {
  if (typeof amount === "number") {
    return amount;
  }
  return amount.amount;
};

it("Should return the amount when passed an object", () => {
  expect(corceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed an object", () => {
  expect(corceAmount(20)).toEqual(20);
});
