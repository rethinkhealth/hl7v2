#!/usr/bin/env node
// Simulates a healthy child: emits ready, responds to SIGTERM cleanly.
const emit = (e) =>
  process.stdout.write(
    `${JSON.stringify({ ...e, ts: new Date().toISOString() })}\n`
  );

emit({ t: "ready", port: 2575, tls: false, pid: process.pid });
emit({ t: "conn.open", id: 1, remote: "1.1.1.1:1000" });

process.on("SIGTERM", () => {
  emit({ t: "closing" });
  emit({ t: "closed" });
  process.exit(0);
});

// Keep alive
setInterval(() => {
  /* keep alive */
}, 1000);
