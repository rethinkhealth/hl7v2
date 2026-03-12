import { LRUCache } from "lru-cache";

export type CacheOptions = Readonly<{
  maxEntries?: number;
}>;

interface Entry<Value> {
  promise: Promise<Value>;
  value?: Value;
}

type KeyGenerator<Args extends unknown[]> = (...args: Args) => string;

export type Cache = Readonly<{
  memoize<Args extends unknown[], Value>(
    loader: (...args: Args) => Promise<Value>,
    keyFn?: KeyGenerator<Args>
  ): (...args: Args) => Promise<Value>;
  peek(key: string): unknown;
  has(key: string): boolean;
  delete(key: string): boolean;
  clear(): void;
  size(): number;
}>;

export function createCache({ maxEntries = 10_000 }: CacheOptions = {}): Cache {
  const store = new LRUCache<string, Entry<unknown>>({
    max: maxEntries,
  });

  const defaultKeyGenerator: KeyGenerator<unknown[]> = (...args) =>
    JSON.stringify(args);

  const memoize = <Args extends unknown[], Value>(
    loader: (...args: Args) => Promise<Value>,
    keyFn?: KeyGenerator<Args>
  ) => {
    const generateKey = keyFn ?? ((...args) => defaultKeyGenerator(...args));

    return (...args: Args): Promise<Value> => {
      const key = generateKey(...args);
      const hit = store.get(key);
      if (hit) {
        if (hit.value !== undefined) {
          return Promise.resolve(hit.value as Value);
        }
        return hit.promise as Promise<Value>;
      }

      const entry: Entry<Value> = {
        promise: loader(...args)
          // oxlint-disable-next-line promise/prefer-await-to-then
          .then((value) => {
            entry.value = value;
            return value;
          })
          // oxlint-disable-next-line unicorn/no-abusive-eslint-disable
          // oxlint-disable-next-line promise/prefer-await-to-then promise/prefer-await-to-callbacks
          .catch((error) => {
            store.delete(key);
            throw error;
          }),
      };

      store.set(key, entry as Entry<unknown>);
      return entry.promise;
    };
  };

  const peek = (key: string) => store.get(key)?.value;

  const has = (key: string): boolean => store.has(key);

  const deleteKey = (key: string): boolean => store.delete(key);

  const clear = () => {
    store.clear();
  };

  const size = () => store.size;

  return {
    clear,
    delete: deleteKey,
    has,
    memoize,
    peek,
    size,
  };
}

export const defaultCache = createCache();
