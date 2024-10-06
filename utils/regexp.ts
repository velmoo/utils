// TODO: Add the ability to add flags to the RegExp
export const genNonEscaped = (char: string, flags = "") =>
  new RegExp(`(?<=(?<!\\\\)(?:\\\\{2})*)(${char})`, flags);

export const genEscaped = (char: string, flags = "") =>
  new RegExp(`(?<=(?<=(?<!\\\\)(?:\\\\{2})*)\\\\)(${char})`, flags);

/**
 * Generates a RegExp that matches a number that can be converted using the Number function.
 *
 * ```ts
 * const validExamples = [
 *   1.2, .2, 1., 12,
 *   +1.2, ...,
 *   -1.2, ...,
 *   1e2, 1E-2, ...,
 * ]
 *
 * const invalidExamples = [
 *   ., 1.2.3, 1e2.3, ...
 * ]
 * ```
 */
export const genNumRegexp = (flags?: string) =>
  new RegExp("^[\\+\\-]?(?:\\d*\\.?\\d+|\\d+\\.?\\d*)(?:[eE][\\+\\-]?\\d+)?$", flags);
// DEV: ^[\+\-]?(?:\d*\.?\d+|\d+\.?\d*)(?:[eE][\+\-]?\d+)?$
