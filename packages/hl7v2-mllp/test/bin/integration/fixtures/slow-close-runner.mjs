#!/usr/bin/env node
// Simulates a hung close: emits ready, ignores SIGTERM.
const emit = (e) =>
  process.stdout.write(
    JSON.stringify({ ...e, ts: new Date().toISOString() }) + "\n"
  );

emit({ t: "ready", port: 2575, tls: false, pid: process.pid });

process.on("SIGTERM", () => {
  /* deliberately do nothing — force the supervisor to SIGKILL */
});

setInterval(() => {
  /* keep alive */
}, 1000);
