interface UidFn {
  (): string;
}

export function createUidGenerator(prefix: string, start = 1): UidFn {
  return () => `${prefix}-${start++}`;
}
