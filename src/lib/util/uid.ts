export function createUidGenerator(prefix: string, start = 1): () => string {
  return () => `${prefix}-${start++}`;
}
