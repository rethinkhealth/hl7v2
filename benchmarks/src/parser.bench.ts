// scripts/bench.parse.ts
import { readFileSync } from 'node:fs';
import { performance } from 'node:perf_hooks';
import { parseHL7v2 } from '@rethinkhealth/hl7v2';

type Case = { name: string; input: string; iters?: number };

const cases: Case[] = [
  {
    name: 'tiny',
    input: readFileSync('fixtures/tiny.hl7v2', 'utf8'),
    iters: 2000,
  },
  {
    name: 'typical',
    input: readFileSync('fixtures/typical_batch.hl7v2', 'utf8'),
    iters: 100,
  },
  {
    name: 'large',
    input: readFileSync('fixtures/large_batch.hl7v2', 'utf8'),
    iters: 5,
  },
];

function bytesLen(s: string) {
  return Buffer.byteLength(s);
}

function benchOne(c: Case) {
  const iters = c.iters ?? 50;
  // warmup
  for (let i = 0; i < Math.min(10, iters); i++) {
    parseHL7v2().parse(c.input);
  }
  const start = performance.now();
  for (let i = 0; i < iters; i++) {
    parseHL7v2().parse(c.input);
  }
  const durMs = performance.now() - start;
  const nsPerOp = (durMs * 1e6) / iters;
  const mbps = (bytesLen(c.input) * iters) / (1024 * 1024) / (durMs / 1000);
  return {
    case: c.name,
    iters,
    ms: +durMs.toFixed(2),
    nsPerOp: Math.round(nsPerOp),
    MBps: +mbps.toFixed(1),
  };
}

for (const c of cases) {
  // biome-ignore lint/suspicious/noConsole: benchmark output
  console.log(benchOne(c));
}
