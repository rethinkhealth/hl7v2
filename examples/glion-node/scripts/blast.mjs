#!/usr/bin/env node
/**
 * Sends HL7v2 messages at a target rate over persistent connections,
 * simulating realistic MLLP traffic from N upstream systems.
 *
 * Usage:
 *   node scripts/blast.mjs                        # defaults
 *   node scripts/blast.mjs -m 50                  # 50 msg/s
 *   node scripts/blast.mjs -m 100 -p 4321 -c 5   # 100 msg/s, port 4321, 5 senders
 *   node scripts/blast.mjs --help
 */
import net from "node:net";

const HELP = `blast — send MLLP traffic to a glion server

Each -c sender opens ONE persistent TCP connection and pipelines
messages over it, just like a real upstream EHR would.

Flags:
  -m <n>    Messages per second  (default: 10)
  -p <n>    Target port          (default: 2575)
  -c <n>    Concurrent senders   (default: 3)
  -h <host> Host                 (default: 127.0.0.1)
  --help    Show this help
`;

function parseArgs(argv) {
  const opts = { rate: 10, port: 2575, concurrency: 3, host: "127.0.0.1" };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--help") {
      process.stdout.write(HELP);
      process.exit(0);
    }
    if (arg === "-m") {
      opts.rate = Number(argv[++i]);
      continue;
    }
    if (arg === "-p") {
      opts.port = Number(argv[++i]);
      continue;
    }
    if (arg === "-c") {
      opts.concurrency = Number(argv[++i]);
      continue;
    }
    if (arg === "-h") {
      opts.host = argv[++i];
      continue;
    }
  }
  return opts;
}

const {
  rate: RATE,
  port: PORT,
  concurrency: CONCURRENCY,
  host: HOST,
} = parseArgs(process.argv.slice(2));

const VT = "\u000B";
const FS_CR = "\u001C\u000D";
const TRIGGERS = ["ADT^A01", "ADT^A04", "ORU^R01", "ORM^O01", "ADT^A08"];

function timestamp() {
  const d = new Date();
  return (
    String(d.getFullYear()) +
    String(d.getMonth() + 1).padStart(2, "0") +
    String(d.getDate()).padStart(2, "0") +
    String(d.getHours()).padStart(2, "0") +
    String(d.getMinutes()).padStart(2, "0") +
    String(d.getSeconds()).padStart(2, "0")
  );
}

function frame(i) {
  const trigger = TRIGGERS[i % TRIGGERS.length];
  const [, event] = trigger.split("^");
  const raw = [
    `MSH|^~\\&|BLAST|TEST|RECV|TEST|${timestamp()}||${trigger}|MSG${String(i).padStart(6, "0")}|P|2.5.1`,
    `EVN|${event}|${timestamp()}`,
    `PID|||${i}||Doe^John^Q|||M`,
    "",
  ].join("\r");
  return VT + raw + FS_CR;
}

/** Random delay around the target per-sender interval, +/- 50%. */
function jitteredDelay() {
  const perSender = 1000 / (RATE / CONCURRENCY);
  return perSender * (0.5 + Math.random());
}

let seq = 0;
let acked = 0;
const start = performance.now();

/**
 * One persistent sender: opens a single TCP connection and sends
 * messages back-to-back over it, waiting for each ACK before sending
 * the next (MLLP is request/response per message on a single conn).
 */
function startSender(id) {
  const sock = net.connect(PORT, HOST);
  let buf = "";

  sock.on("connect", () => {
    scheduleNext();
  });

  sock.on("data", (chunk) => {
    buf += chunk.toString();
    // ACK is MLLP-framed: look for the end-of-block marker.
    if (buf.includes("\u001C\u000D")) {
      buf = "";
      acked++;
      scheduleNext();
    }
  });

  sock.on("error", (err) => {
    process.stderr.write(`sender ${id}: ${err.message}\n`);
    // Reconnect after a brief pause.
    setTimeout(() => startSender(id), 1000);
  });

  sock.on("close", () => {
    // Server closed the connection (reload, shutdown). Reconnect.
    setTimeout(() => startSender(id), 500);
  });

  function scheduleNext() {
    setTimeout(() => {
      const i = seq++;
      sock.write(frame(i));
    }, jitteredDelay());
  }
}

for (let c = 0; c < CONCURRENCY; c++) {
  startSender(c);
}

setInterval(() => {
  const s = ((performance.now() - start) / 1000).toFixed(1);
  process.stdout.write(
    `${s}s  sent=${seq}  acked=${acked}  rate=${(acked / s).toFixed(1)} msg/s\n`
  );
}, 5000);

process.stdout.write(
  `${CONCURRENCY} persistent connections to ${HOST}:${PORT} at ~${RATE} msg/s total\n` +
    "Ctrl-C to stop.\n\n"
);
