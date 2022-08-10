import { Parallel } from "./parallel";

describe("Parallel", () => {
  it("Parallel results", async () => {
    const runner = new Parallel(2);

    expect(
      await runner.jobs(
        () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
        () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
        () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
        () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
        () => new Promise((resolve) => setTimeout(resolve, 30, 5))
      )
    ).toEqual([1, 2, 3, 4, 5]);
  });
});
