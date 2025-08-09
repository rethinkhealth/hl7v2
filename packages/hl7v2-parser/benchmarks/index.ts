// bench/index.mjs
// Usage:
//   npm run build
//   npm run bench
//
// Environment variables:
//   ITER=20000       # iterations per message (default 10000)
//   WARMUP=3         # warmup rounds (default 2)
//   JSONIFY=false    # set true to JSON.stringify trees (simulates downstream cost)
//
// Notes:
// - This uses the compiled output from dist/ (ESM).
// - Keep messages realistic; long ORU^R01s will stress tokenizer & parser.

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { performance } from 'node:perf_hooks';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const { parseHL7v2 } = await import('../dist/index.js');

const ENV = (name, def) => process.env[name] ?? def;
const ITER = Number.parseInt(ENV('ITER', '10000'), 10);
const WARMUP = Number.parseInt(ENV('WARMUP', '2'), 10);
const JSONIFY = String(ENV('JSONIFY', 'false')).toLowerCase() === 'true';

const messages = [
  ['ADT_A01', 'adt_a01.hl7'],
  ['ORU_R01', 'oru_r01.hl7'],
  ['ORM_O01', 'orm_o01.hl7'],
].map(([label, file]) => [label, path.join(__dirname, 'messages', file)]);

async function loadMessages() {
  const loaded = [];
  for (const [label, p] of messages) {
    const s = await readFile(p, 'utf8');
    loaded.push([label, s]);
  }
  return loaded;
}

function memMB(bytes) {
  return (bytes / (1024 * 1024)).toFixed(2);
}

function runOne(label, source) {
  // Warmup
  for (let w = 0; w < WARMUP; w++) {
    for (let i = 0; i < Math.min(ITER, 2000); i++) {
      const tree = parseHL7v2(source);
      if (JSONIFY) JSON.stringify(tree);
    }
  }

  // GC hint (no guarantees)
  globalThis.gc?.();

  const startMem = process.memoryUsage().heapUsed;
  const t0 = performance.now();

  for (let i = 0; i < ITER; i++) {
    const tree = parseHL7v2(source);
    if (JSONIFY) JSON.stringify(tree);
  }

  const t1 = performance.now();
  const endMem = process.memoryUsage().heapUsed;
  const dt = (t1 - t0) / 1000; // seconds
  const ops = ITER / dt;
  const memDelta = endMem - startMem;

  return {
    label,
    bytes: source.length,
    iter: ITER,
    seconds: dt.toFixed(3),
    opsPerSec: Math.round(ops).toLocaleString(),
    heapDeltaMB: memMB(memDelta),
  };
}

const loaded = await loadMessages();
const results = loaded.map(([label, source]) => runOne(label, source));

console.table(results);
