import { describe, expect, it, vi } from "vitest";

import { handleKey } from "../../../src/bin/tui/hotkeys.js";

describe("handleKey", () => {
  it("calls onReload for 'r'", () => {
    const handlers = {
      onReload: vi.fn(),
      onClear: vi.fn(),
      onCycleVerbosity: vi.fn(),
      onQuit: vi.fn(),
      onToggleHelp: vi.fn(),
    };
    handleKey("r", handlers);
    expect(handlers.onReload).toHaveBeenCalled();
  });

  it("calls onClear for 'c'", () => {
    const handlers = {
      onReload: vi.fn(),
      onClear: vi.fn(),
      onCycleVerbosity: vi.fn(),
      onQuit: vi.fn(),
      onToggleHelp: vi.fn(),
    };
    handleKey("c", handlers);
    expect(handlers.onClear).toHaveBeenCalled();
  });

  it("calls onQuit for 'q'", () => {
    const handlers = {
      onReload: vi.fn(),
      onClear: vi.fn(),
      onCycleVerbosity: vi.fn(),
      onQuit: vi.fn(),
      onToggleHelp: vi.fn(),
    };
    handleKey("q", handlers);
    expect(handlers.onQuit).toHaveBeenCalled();
  });

  it("calls onCycleVerbosity for 'l' and onToggleHelp for '?'", () => {
    const handlers = {
      onReload: vi.fn(),
      onClear: vi.fn(),
      onCycleVerbosity: vi.fn(),
      onQuit: vi.fn(),
      onToggleHelp: vi.fn(),
    };
    handleKey("l", handlers);
    handleKey("?", handlers);
    expect(handlers.onCycleVerbosity).toHaveBeenCalled();
    expect(handlers.onToggleHelp).toHaveBeenCalled();
  });

  it("is case-insensitive", () => {
    const handlers = {
      onReload: vi.fn(),
      onClear: vi.fn(),
      onCycleVerbosity: vi.fn(),
      onQuit: vi.fn(),
      onToggleHelp: vi.fn(),
    };
    handleKey("R", handlers);
    expect(handlers.onReload).toHaveBeenCalled();
  });

  it("ignores unknown keys", () => {
    const handlers = {
      onReload: vi.fn(),
      onClear: vi.fn(),
      onCycleVerbosity: vi.fn(),
      onQuit: vi.fn(),
      onToggleHelp: vi.fn(),
    };
    handleKey("x", handlers);
    expect(handlers.onReload).not.toHaveBeenCalled();
    expect(handlers.onClear).not.toHaveBeenCalled();
    expect(handlers.onQuit).not.toHaveBeenCalled();
  });
});
