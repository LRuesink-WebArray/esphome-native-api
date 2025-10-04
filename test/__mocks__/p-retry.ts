/**
 * Mock for p-retry module
 */

export default async function pRetry<T>(fn: () => Promise<T>, _options?: any): Promise<T> {
  return fn();
}
