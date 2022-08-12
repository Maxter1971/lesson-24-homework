function curry(func: Function) {
  return function curried(...args: number[]) {
    let res: Function;
    if (args.length >= func.length) {
      res = func.apply(curried, args);
    } else {
      res = function (...args2: number[]) {
        return curried.apply(curried, args.concat(args2));
      };
    }
    return res;
  };
}

function sum(a: number, b: number, c: number, d: number, e: number) {
  return a + b + c + d + e;
}

export const curriedSum = curry(sum);
