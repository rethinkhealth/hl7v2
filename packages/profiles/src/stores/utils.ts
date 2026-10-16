// A profile in a directory of profiles loads in two lazy steps: the index of
// its directory, then the profile's JSON. A glob over those JSON files
// themselves would put the path of every bundled profile in the package's
// entry chunk, so importing the package would load the paths of all of them;
// this glob over the indexes holds one path per directory, and a directory's
// index loads the first time one of its profiles does.
const indexes = import.meta.glob<
  Readonly<Record<string, () => Promise<unknown>>>
>("../profiles/**/index.ts", { import: "default" });

// A file of a version itself, such as its segments.json, is one of a few per
// version, so it loads in one lazy step.
const versionFiles = import.meta.glob<unknown>("../profiles/v*/*.json", {
  import: "default",
});

type ProfileIndex = Readonly<Record<string, () => Promise<unknown>>>;

// Keyed by bundled paths only, so its size is bounded by the bundle, whatever
// paths a message leads callers to ask for.
const imports = new Map<string, Promise<unknown>>();

/** The promise of `importer()`, started on the first call for `path`. */
const once = (
  path: string,
  importer: () => Promise<unknown>
): Promise<unknown> => {
  let promise = imports.get(path);
  if (promise === undefined) {
    promise = importer();
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
 */
export const lazyImport = async <T>(path: string): Promise<T | undefined> => {
  const importVersionFile = versionFiles[path];
  if (importVersionFile) {
    return (await once(path, importVersionFile)) as T;
  }
  const slash = path.lastIndexOf("/");
  const indexPath = `${path.slice(0, slash)}/index.ts`;
  const importIndex = indexes[indexPath];
  if (importIndex === undefined) {
    return undefined;
  }
  const index = (await once(indexPath, importIndex)) as ProfileIndex;
  const importProfile = index[`.${path.slice(slash)}`];
  return importProfile === undefined
    ? undefined
    : ((await once(path, importProfile)) as T);
};
