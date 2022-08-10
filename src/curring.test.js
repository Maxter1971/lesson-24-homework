import { curriedSum } from "./curring";

describe("curriedSum", () => {
  it("curriedSum results", () => {
    expect(curriedSum(1, 2, 3, 4, 5)).toBe(15);
    expect(curriedSum(2, 3, 4)(5, 6)).toBe(20);
    expect(curriedSum(3, 4)(5, 6)(7)).toBe(25);
    expect(curriedSum(4, 5)(6)(7, 8)).toBe(30);
    expect(curriedSum(5)(6)(7)(8)(9)).toBe(35);
  });
});
