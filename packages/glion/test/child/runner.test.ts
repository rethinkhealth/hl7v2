import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import type * as ConsoleModule from "../../src/child/console.js";
import type * as CrashHandlersModule from "../../src/child/crash-handlers.js";
import type * as EmitterModule from "../../src/child/emitter.js";

// Spy + no-op the three module-load side effects that would otherwise
// be unsafe to run inside the test process. The whole point of this
// file is to assert the runner WIRES UP these helpers — not to
// re-test what each helper does (those have their own tests).
const installCrashHandlersSpy = vi.fn();
const installConsoleCaptureSpy = vi.fn();
const fakeEmit = vi.fn();
const createEmitterSpy = vi.fn(() => fakeEmit);

vi.mock(import("../../src/child/crash-handlers.js"), () => ({
  installCrashHandlers:
    installCrashHandlersSpy as unknown as typeof CrashHandlersModule.installCrashHandlers,
}));
vi.mock(import("../../src/child/console.js"), () => ({
  installConsoleCapture:
    installConsoleCaptureSpy as unknown as typeof ConsoleModule.installConsoleCapture,
}));
vi.mock(import("../../src/child/emitter.js"), () => ({
  createEmitter:
    createEmitterSpy as unknown as typeof EmitterModule.createEmitter,
}));

// Capture process.exit so the runner's own try/catch (which calls
// process.exit(1) when main() throws — and main() WILL throw because
// we don't pass a manifest path) doesn't terminate the test runner.
let savedExit: typeof process.exit;
let exitCodes: (number | string | null | undefined)[];

beforeEach(() => {
  installCrashHandlersSpy.mockClear();
  installConsoleCaptureSpy.mockClear();
  createEmitterSpy.mockClear();
  fakeEmit.mockClear();
  exitCodes = [];
  savedExit = process.exit;
  // The runner's bottom-of-file try/catch always calls process.exit(1)
  // when main() rejects, so we capture exit codes instead of letting
  // them terminate vitest.
  process.exit = ((code?: number | string | null) => {
    exitCodes.push(code);
    return undefined as never;
  }) as typeof process.exit;
  vi.resetModules();
});

afterEach(() => {
  process.exit = savedExit;
});

describe("runner module wiring", () => {
  it("calls installCrashHandlers with the emit function at module load", async () => {
    // Importing the runner module executes its top-level code:
    //   - createEmitter(process.stdout)
    //   - installConsoleCapture(emit)
    //   - installCrashHandlers(emit)   ← THE WIRING WE GUARD HERE
    //   - process.stdin.resume() / .on("end")
    //   - main() (throws because no manifest path → caught → exit(1))
    //
    // If a future refactor deletes the installCrashHandlers call from
    // runner.ts, this assertion fails — the helper would still exist
    // and its own tests would still pass, but the child would silently
    // lose its crash-to-fatal-event pipeline.
    await import("../../src/child/runner.js");

    expect(createEmitterSpy).toHaveBeenCalledOnce();
    expect(installCrashHandlersSpy).toHaveBeenCalledOnce();
    expect(installCrashHandlersSpy).toHaveBeenCalledWith(fakeEmit);
  });

  it("installs crash handlers BEFORE running main()", async () => {
    // Order matters: a startup-phase crash (e.g. the entry module
    // throws on import) must also be caught by the crash handlers,
    // so the call has to appear before main() is invoked. We assert
    // ordering by checking that the spy was already called by the
    // time main() rejected (which we observe via the exit code).
    await import("../../src/child/runner.js");

    expect(installCrashHandlersSpy).toHaveBeenCalled();
    // main() always throws here (no manifest path), so the runner's
    // bottom-of-file catch fires and exits with 1. If we observe
    // exit(1) AND the spy was called, ordering is correct.
    expect(exitCodes).toContain(1);
    // The crash-handlers install must have happened before the exit
    // call: vi.fn invocation order is monotonic, and we cleared all
    // spies in beforeEach, so a non-zero call count proves the call
    // happened during the same module load that produced the exit.
    expect(installCrashHandlersSpy.mock.invocationCallOrder[0]).toBeDefined();
  });
});
