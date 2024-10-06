export const isPositive = (num: number) => num > 0;

export const isNegative = (num: number) => !isPositive(num);

export const isEven = (num: number) => num % 2 === 0;

export const isOdd = (num: number) => !isEven(num);

export const isPrime = (num: number) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

export const getDecimalLength = (num: number) => num.toString().split(".")[1]?.length ?? 0;
