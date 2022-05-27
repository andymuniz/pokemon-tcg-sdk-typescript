/**
 * Joins class names together.
 * @param args - any number of class names to join together
 * @returns the joined class names
 */
function classNames(...args: (string | null | undefined)[]): string {
  return args.filter(Boolean).join(" ");
}

export { classNames };
