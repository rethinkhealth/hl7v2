export interface HotkeyHandlers {
  onReload(): void;
  onClear(): void;
  onCycleVerbosity(): void;
  onQuit(): void;
  onToggleHelp(): void;
}

/**
 * Pure key→action mapping. Separated from Ink's `useInput` hook so
 * the dispatch logic can be unit-tested without rendering.
 */
export function handleKey(key: string, handlers: HotkeyHandlers): void {
  const k = key.toLowerCase();
  switch (k) {
    case "r": {
      handlers.onReload();
      return;
    }
    case "c": {
      handlers.onClear();
      return;
    }
    case "l": {
      handlers.onCycleVerbosity();
      return;
    }
    case "q": {
      handlers.onQuit();
      return;
    }
    case "?": {
      handlers.onToggleHelp();
      break;
    }
  }
}
