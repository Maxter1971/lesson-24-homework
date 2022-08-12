import { semver } from "./semver";

describe("semver", () => {
  it("semver results", () => {
    const sm = semver([
      "1.0.5",
      "2.5.0",
      "0.12.0",
      "1",
      "1.23.45",
      "1.4.50",
      "1.2.3.4.5.6.7",
    ]);
    expect(sm).toStrictEqual([
      "0.12.0",
      "1",
      "1.0.5",
      "1.2.3.4.5.6.7",
      "1.4.50",
      "1.23.45",
      "2.5.0",
    ]);
  });
});
