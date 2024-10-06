import type { Arr } from "@velmoo/types";

export const isNum = (value: unknown): value is number => typeof value === "number";

export const isStr = (value: unknown): value is string => typeof value === "string";

export const isBool = (value: unknown): value is boolean => typeof value === "boolean";

export const isArr = (value: unknown): value is unknown[] => Array.isArray(value);

export const isOneOf = <Array extends Arr>(value: unknown, array: [...Array]): value is Array[number] =>
  array.includes(value);
