#!/usr/bin/env node
// Simulates a runtime crash: emits ready, then exits 1 after 50ms.
const emit = (e) =>
  process.stdout.write(
    `${JSON.stringify({ ...e, ts: new Date().toISOString() })}\n`
  );

emit({ t: "ready", port: 2575, tls: false, pid: process.pid });

setTimeout(() => {
  process.exit(1);
}, 50);
