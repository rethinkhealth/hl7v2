/**
 * An import of one bundled file, as `import.meta.glob` maps it. MUST NOT throw
 * synchronously; a failure rejects.
 */
type Importer<T = unknown> = () => Promise<T>;

/** A directory's index: each profile's `./<name>.json` mapped to its import. */
type ProfileIndex = Readonly<Record<string, Importer>>;

/** The import `importers` holds under its own key `key`, if any. */
const own = <T>(
  importers: Readonly<Record<string, T>>,
  key: string
): T | undefined =>
  Object.hasOwn(importers, key) ? importers[key] : undefined;

/**
 * A loader of the JSON profiles in `versionFiles` and in the directories
 * `indexes` lists, keyed as `import.meta.glob` keys them.
 *
 * The loader imports each bundled file at most once at a time. A load of a
 * file whose import is in flight or has resolved shares that import; a load
 * after an import rejected imports again. A path the maps do not list as an
 * own key imports nothing and is not remembered.
 */
export const createLazyImport = (
  versionFiles: Readonly<Record<string, Importer>>,
  indexes: Readonly<Record<string, Importer<ProfileIndex>>>
) => {
  // Keyed by bundled paths only, so its size is bounded by the bundle, whatever
  // paths a message leads callers to ask for.
  const imports = new Map<string, Promise<unknown>>();

  const load = async (path: string, importer: Importer): Promise<unknown> => {
    try {
      return await importer();
    } catch (error) {
      // A rejected import is forgotten, so the next load imports again: a
      // bundle whose chunks load over a network can fail once and then succeed.
      imports.delete(path);
      throw error;
    }
  };

  const once = (path: string, importer: Importer): Promise<unknown> => {
    let promise = imports.get(path);
    if (promise === undefined) {
      promise = load(path, importer);
      imports.set(path, promise);
    }
    return promise;
  };

  /**
   * The JSON profile at `path`, imported on first use, or `undefined` when no
   * profile is bundled there. Later calls for the same path resolve the same
   * value without importing again.
   *
   * @param path - The profile's path relative to `src/stores`, as `import()`
   *   takes it, such as `"../profiles/v2.5/fields/PID.json"` or
   *   `"../profiles/v2.5/segments.json"`.
   * @throws {Error} When a bundled profile fails to import.
   */
  return async <T>(path: string): Promise<T | undefined> => {
    // `path` carries a version and a name read from a message, so only own
    // keys count: `__proto__` or `constructor` would otherwise find a member
    // of `Object.prototype`.
    const importVersionFile = own(versionFiles, path);
    if (importVersionFile) {
      return (await once(path, importVersionFile)) as T;
    }
    // "../profiles/v2.5/fields/PID.json" is "./PID.json" in the index of
    // "../profiles/v2.5/fields/index.ts".
    const slash = path.lastIndexOf("/");
    const indexPath = `${path.slice(0, slash)}/index.ts`;
    const importIndex = own(indexes, indexPath);
    if (importIndex === undefined) {
      return undefined;
    }
    const index = (await once(indexPath, importIndex)) as ProfileIndex;
    const importProfile = own(index, `.${path.slice(slash)}`);
    return importProfile === undefined
      ? undefined
      : ((await once(path, importProfile)) as T);
  };
};

// A profile in a directory of profiles loads in two lazy steps: the index of
// its directory, then the profile's JSON. A glob over those JSON files
// themselves would put the path of every bundled profile in the package's
// entry chunk, so importing the package would load the paths of all of them;
// this glob over the indexes holds one path per directory, and a directory's
// index loads the first time one of its profiles does.
//
// A file of a version itself, such as its segments.json, is one of a few per
// version, so it loads in one lazy step.
/** The loader of the bundled JSON profiles. */
export const lazyImport = createLazyImport(
  import.meta.glob("../profiles/v*/*.json", { import: "default" }),
  import.meta.glob<ProfileIndex>("../profiles/**/index.ts", {
    import: "default",
  })
);
