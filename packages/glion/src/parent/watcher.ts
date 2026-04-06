import { clearTimeout, setTimeout as nodeSetTimeout } from "node:timers";

import type * as ChokidarModule from "chokidar";

import { GlionError } from "../errors.js";

type Chokidar = typeof ChokidarModule;

export interface WatcherOptions {
  debounceMs?: number;
}

export interface WatcherEvent {
  files: string[];
}

export interface Watcher {
  onChange(listener: (event: WatcherEvent) => void): () => void;
  onError(listener: (error: Error) => void): () => void;
  close(): Promise<void>;
}

/**
 * Thin wrapper over chokidar that debounces rapid changes into a
 * single notification per burst. Filesystem errors (EACCES, ENOSPC,
 * EMFILE, …) surface via `onError`; the watcher stays alive so manual
 * reload still works even when continuous watching becomes impossible.
 */
export async function createWatcher(
  paths: string[],
  options: WatcherOptions = {}
): Promise<Watcher> {
  const debounceMs = options.debounceMs ?? 150;

  const chokidar = await importChokidar();
  const watcher = chokidar.watch(paths, {
    ignoreInitial: true,
    persistent: true,
  });

  const changeListeners = new Set<(event: WatcherEvent) => void>();
  const errorListeners = new Set<(error: Error) => void>();
  const pending = new Set<string>();
  let timer: ReturnType<typeof nodeSetTimeout> | null = null;
  let closed = false;

  const flush = (): void => {
    timer = null;
    if (closed || pending.size === 0) {
      return;
    }
    const files = [...pending];
    pending.clear();
    for (const listener of changeListeners) {
      listener({ files });
    }
  };

  const onPathEvent = (path: string): void => {
    if (closed) {
      return;
    }
    pending.add(path);
    if (timer) {
      clearTimeout(timer);
    }
    timer = nodeSetTimeout(flush, debounceMs);
  };

  watcher.on("change", onPathEvent);
  watcher.on("add", onPathEvent);
  watcher.on("unlink", onPathEvent);
  watcher.on("error", (error: unknown) => {
    const err = error instanceof Error ? error : new Error(String(error));
    for (const listener of errorListeners) {
      listener(err);
    }
  });

  return {
    onChange(listener) {
      changeListeners.add(listener);
      return () => {
        changeListeners.delete(listener);
      };
    },
    onError(listener) {
      errorListeners.add(listener);
      return () => {
        errorListeners.delete(listener);
      };
    },
    async close() {
      closed = true;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      pending.clear();
      await watcher.close();
    },
  };
}

async function importChokidar(): Promise<Chokidar> {
  try {
    return await import("chokidar");
  } catch (error) {
    throw new GlionError(
      "peer-dep-missing",
      "The 'glion dev' command requires 'chokidar' for file watching.",
      { missing: "chokidar" },
      "Install it:\n  pnpm add -D chokidar",
      error
    );
  }
}
