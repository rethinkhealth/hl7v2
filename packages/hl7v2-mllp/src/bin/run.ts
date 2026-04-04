import { runDev } from "./commands/dev.js";
import { runStart } from "./commands/start.js";

export interface RunGlionOptions {
  argv: string[];
  cwd: string;
  stdout?: NodeJS.WritableStream;
  stderr?: NodeJS.WritableStream;
}

const HELP_TEXT = `glion — MLLP server dev tool

Usage:
  glion dev   [--config <path>]   Start dev server with live TUI and file watcher
  glion start [--config <path>]   Start production server (no TUI, JSON-line stdout)
  glion --help                    Show this help
  glion --version                 Show version

Config:
  By default glion looks for glion.config.ts / .mts / .mjs / .js,
  .glionrc.ts / .js, or "glion" field in package.json. If neither is
  found, it looks for a conventional entry file (glion.app.ts or
  src/glion.app.ts) and runs with defaults.
`;

export async function runGlion(opts: RunGlionOptions): Promise<number> {
  const stdout = opts.stdout ?? process.stdout;
  const stderr = opts.stderr ?? process.stderr;
  const args = [...opts.argv];

  if (args.length === 0 || args[0] === "--help" || args[0] === "-h") {
    stdout.write(HELP_TEXT);
    return 0;
  }

  if (args[0] === "--version" || args[0] === "-v") {
    // Version is read at build time; for now, a static string.
    // Task 15 will wire this to package.json.
    stdout.write("glion 0.0.0-dev\n");
    return 0;
  }

  const command = args.shift();
  const configFlagIndex = args.indexOf("--config");
  const configPath =
    configFlagIndex === -1 ? undefined : args[configFlagIndex + 1];

  switch (command) {
    case "start": {
      return await runStart({ cwd: opts.cwd, configPath, stdout, stderr });
    }
    case "dev": {
      return await runDev({ cwd: opts.cwd, configPath, stdout, stderr });
    }
    default: {
      stderr.write(`glion: unknown command "${command}"\n\n${HELP_TEXT}`);
      return 1;
    }
  }
}
