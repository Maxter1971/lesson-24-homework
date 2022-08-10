import { curriedSum } from "./curring";
import { summator } from "./summator";
import { Parallel } from "./parallel";
import { spiral } from "./spiral";
import { semver } from "./semver";

const sm = semver([
  "1.0.5",
  "2.5.0",
  "0.12.0",
  "1",
  "1.23.45",
  "1.4.50",
  "1.2.3.4.5.6.7",
]);
console.log(sm);

const sp = spiral([
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
]);
console.log(sp); // [0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11]

console.log(curriedSum(1, 2, 3, 4, 5));
console.log(curriedSum(2, 3, 4)(5, 6));
console.log(curriedSum(3, 4)(5, 6)(7));
console.log(curriedSum(4, 5)(6)(7, 8));
console.log(curriedSum(5)(6)(7)(8)(9));

alert(summator()); // 0;

const s = summator();
alert(s);
alert(s(1)); // 1
alert(s(1)(2)); // 3
alert(s(3)(4)(5)); // 12
const s3 = summator(3);
alert(s3(5)); // 8
alert(s3(6)); // 9

async function main() {
  const runner = new Parallel(2);
  console.log(
    await runner.jobs(
      () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
      () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
      () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
      () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
      () => new Promise((resolve) => setTimeout(resolve, 30, 5))
    )
  );
}
main();
