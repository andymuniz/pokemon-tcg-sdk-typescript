export type Prefix<
  Value extends string,
  Prefix extends string
> = `${Prefix}${Value}`;
