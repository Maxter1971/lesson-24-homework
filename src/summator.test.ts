import { summator } from "./summator";

describe("summator", () => {
  it("summator results", () => {
    const s = summator();
    const s3 = summator(3);
    expect(s.valueOf()).toBe(0);
    expect(s(1)(2).valueOf()).toBe(3);
    expect(s(3)(4)(5).valueOf()).toBe(12);
    expect(s3(5).valueOf()).toBe(8);
    expect(s3(6).valueOf()).toBe(9);
  });
});
