#!/usr/bin/env node
// Simulates a startup failure: emits fatal, exits 1 before ready.
process.stdout.write(
  JSON.stringify({
    t: "fatal",
    kind: "config-invalid",
    message: "simulated startup failure",
    ts: new Date().toISOString(),
  }) + "\n"
);
process.exit(1);
