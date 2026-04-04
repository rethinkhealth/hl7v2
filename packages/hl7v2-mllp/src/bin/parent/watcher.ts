import { setTimeout as nodeSetTimeout } from "node:timers";

import type * as ChokidarModule from "chokidar";

import { GlionError } from "../errors.js";

export interface WatcherOptions {
  debounceMs?: number;
}

export interface WatcherEvent {
  files: string[];
}

export interface Watcher {
  onChange(listener: (event: WatcherEvent) => void): void;
  close(): Promise<void>;
}

/**
 * Thin wrapper over chokidar that debounces rapid changes (editor
 * auto-saves, formatters running on save, etc.) into a single change
 * notification per burst.
 */
export async function createWatcher(
  paths: string[],
  options: WatcherOptions = {}
): Promise<Watcher> {
  const debounceMs = options.debounceMs ?? 150;

  let chokidarModule: typeof ChokidarModule;
  try {
    chokidarModule = await import("chokidar");
  } catch (error) {
    throw new GlionError(
      "peer-dep-missing",
      "The 'glion dev' command requires 'chokidar' for file watching.",
      { missing: "chokidar" },
      "Install it:\n  pnpm add -D chokidar",
      error
    );
  }

  const watcher = chokidarModule.watch(paths, {
    ignoreInitial: true,
    persistent: true,
  });

  const listeners = new Set<(event: WatcherEvent) => void>();
  const pending = new Set<string>();
  let timer: ReturnType<typeof nodeSetTimeout> | null = null;

  const flush = (): void => {
    if (pending.size === 0) {
      return;
    }
    const files = [...pending];
    pending.clear();
    timer = null;
    for (const listener of listeners) {
      listener({ files });
    }
  };

  const onEvent = (path: string): void => {
    pending.add(path);
    if (timer) {
      clearTimeout(timer);
    }
    timer = nodeSetTimeout(flush, debounceMs);
  };

  watcher.on("change", onEvent);
  watcher.on("add", onEvent);
  watcher.on("unlink", onEvent);

  return {
    onChange(listener) {
      listeners.add(listener);
    },
    async close() {
      if (timer) {
        clearTimeout(timer);
      }
      await watcher.close();
    },
  };
}
