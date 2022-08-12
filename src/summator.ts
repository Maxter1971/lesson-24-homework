export const summator = function (...args: any): Function {
  const sum = args.reduce((a: number, b: number) => a + b, 0);

  const func = (...newargs: number[] | []) => {
    const res = newargs.length === 0 ? sum : summator(...args, ...newargs);
    return res;
  };

  func.valueOf = () => sum;
  func.toString = () => sum;
  return func;
};
