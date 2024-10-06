export const uniqueArray = <T>(arr: T[]): T[] => [...new Set(arr)];

export const compareFn = {
  numAsc: (a: number, b: number) => a - b,
  numDesc: (a: number, b: number) => b - a,
  strAsc: (a: string, b: string) => a.localeCompare(b),
  strDesc: (a: string, b: string) => b.localeCompare(a),
};
