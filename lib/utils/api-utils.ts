/**
 * Adds value to a URLSearchParams object if it is not undefined.
 * @param params The search parameters.
 * @param key The name of the parameter.
 * @param value The value of the parameter.
 */
export function appendIfDefined(
  params: URLSearchParams,
  key: string,
  value: unknown | undefined
): void {
  if (value !== undefined) {
    params.append(key, String(value));
  }
}
