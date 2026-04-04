#!/usr/bin/env node
import { runGlion } from "./run.js";

try {
  const code = await runGlion({
    argv: process.argv.slice(2),
    cwd: process.cwd(),
  });
  process.exit(code);
} catch (error) {
  process.stderr.write(
    `glion: unexpected error: ${error instanceof Error ? error.message : String(error)}\n`
  );
  process.exit(1);
}
