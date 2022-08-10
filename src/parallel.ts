class PromiseExt {
  static whenAny(promises: Promise<number>[]) {
    return new Promise<any>((resolve, reject) => {
      let result: [Promise<number>];
      for (const promise of promises) {
        //  if (result) break;
        // console.log(result);
        const func = () => {
          if (!result) {
            result = [promise];
            console.log(result);
            resolve(result);
          }
        };
        promise.then(func, func);
      }
    });
  }
}
export class Parallel {
  concurrencyLevel: number;

  constructor(concurrencyLevel: number) {
    this.concurrencyLevel = concurrencyLevel;
  }

  async jobs(...funcs: Function[]) {
    const result = new Array(funcs.length);
    let nextIndex = 0;
    const tmpTasks: Promise<number>[] = [];
    const tmpIndexes: number[] = [];
    while (nextIndex < this.concurrencyLevel && nextIndex < funcs.length) {
      tmpTasks.push(funcs[nextIndex]());
      tmpIndexes.push(nextIndex);
      nextIndex++;
    }
    while (tmpTasks.length) {
      const task: Promise<number> = (await PromiseExt.whenAny(tmpTasks))[0];
      const index = tmpTasks.indexOf(task);
      tmpTasks.splice(index, 1);
      const originalIndex = tmpIndexes[index];
      tmpIndexes.splice(index, 1);
      try {
        result[originalIndex] = await task;
      } catch (error) {
        result[originalIndex] = error;
      }
      if (nextIndex < funcs.length) {
        tmpTasks.push(funcs[nextIndex]());
        tmpIndexes.push(nextIndex);
        nextIndex++;
      }
    }

    return result;
  }
}
(async function main() {
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
})();
