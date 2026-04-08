import { mkdir, readFile, writeFile } from "node:fs/promises";
import { basename, resolve } from "node:path";

import { build } from "rolldown";
import { transform } from "rolldown/utils";

import { GlionError } from "./errors.js";
import type { ChildManifest, ResolvedConfig } from "./types.js";

/**
 * Ensures the `.glion/` cache directory exists and returns its path.
 */
export async function ensureCacheDir(cwd: string): Promise<string> {
  const dir = resolve(cwd, ".glion");
  await mkdir(dir, { recursive: true });
  return dir;
}

/**
 * Type-strips a single TS file and writes the result to the cache dir.
 * Best for config files that have no local imports.
 */
export async function transformFile(
  sourcePath: string,
  cacheDir: string
): Promise<string> {
  const source = await readFile(sourcePath, "utf8");
  const result = await transform(sourcePath, source, {
    lang: langFromPath(sourcePath),
    sourceType: "module",
  });
  if (result.errors.length > 0) {
    throw result.errors[0];
  }
  const outPath = resolve(cacheDir, `${stem(sourcePath)}.mjs`);
  await writeFile(outPath, result.code);
  return outPath;
}

/**
 * Bundles a TS entry file and all its local imports into a single .mjs.
 * Package imports (node_modules) are left external for Node to resolve
 * at runtime. Best for entry files that may import from local TS modules.
 */
export async function buildFile(
  sourcePath: string,
  cacheDir: string
): Promise<string> {
  const output = await build({
    input: sourcePath,
    // Keep relative imports (local TS files) bundled. Mark everything
    // else (bare package specifiers, node: builtins) as external.
    external: (id) => !id.startsWith(".") && !id.startsWith("/"),
    resolve: {
      extensions: [".ts", ".mts", ".mjs", ".js", ".json"],
    },
    output: {
      format: "esm",
      dir: cacheDir,
    },
  });

  // rolldown build() returns the output — find the entry chunk filename
  const chunk = output.output.find((o) => o.type === "chunk" && o.isEntry);
  if (!chunk) {
    throw new Error(`rolldown build produced no entry chunk for ${sourcePath}`);
  }
  return resolve(cacheDir, chunk.fileName);
}

/**
 * Builds the entry file, writes a manifest JSON with everything the
 * child process needs, and returns the manifest path.
 */
export async function prepareChild(
  config: ResolvedConfig,
  cacheDir: string
): Promise<string> {
  let compiledEntry: string;
  try {
    compiledEntry = await buildFile(config.entry, cacheDir);
  } catch (error) {
    throw new GlionError(
      "entry-load-failed",
      `Failed to build entry file ${config.entry}: ${error instanceof Error ? error.message : String(error)}`,
      { entry: config.entry },
      "Check the entry file path and that it compiles without errors.",
      error
    );
  }
  const manifest: ChildManifest = {
    compiledEntry,
    port: config.port,
    hostname: config.hostname,
    tls: config.tls,
    keepAlive: config.keepAlive,
    keepAliveInitialDelay: config.keepAliveInitialDelay,
    socketTimeout: config.socketTimeout,
  };
  const manifestPath = resolve(cacheDir, "manifest.json");
  await writeFile(manifestPath, JSON.stringify(manifest));
  return manifestPath;
}

function stem(filePath: string): string {
  const name = basename(filePath);
  const dot = name.lastIndexOf(".");
  return dot > 0 ? name.slice(0, dot) : name;
}

function langFromPath(filePath: string): "ts" | "tsx" | "js" | "jsx" {
  if (filePath.endsWith(".tsx")) {
    return "tsx";
  }
  if (filePath.endsWith(".jsx")) {
    return "jsx";
  }
  if (filePath.endsWith(".js") || filePath.endsWith(".mjs")) {
    return "js";
  }
  return "ts";
}
