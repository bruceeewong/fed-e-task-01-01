const arr1: Array<number> = [1, 2, 3];
const arr2: number[] = [1, 2, 3];

// ---------------------------

function sum(...args: number[]) {
  return args.reduce((prev, current) => {
    return prev + current;
  }, 0);
}

// sum(["a", 1]); // check type
