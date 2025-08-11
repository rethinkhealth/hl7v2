// scripts/profile.parse.ts
/** biome-ignore-all lint/suspicious/noConsole: required for profiling */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { performance } from 'node:perf_hooks';
import { parseHL7v2 } from '@rethinkhealth/hl7v2';

// ----------- Config -----------
const FIXTURE = 'large_batch.hl7v2'; // change to typical_batch.hl7 for smaller profile
const ITERATIONS = 500; // small number so CPU/heap profiling completes quickly
// ------------------------------

const filePath = join(process.cwd(), 'fixtures', FIXTURE);
const input = readFileSync(filePath, 'utf8');

console.log(`Profiling parser with fixture: ${FIXTURE}`);
console.log(
  `Size: ${(Buffer.byteLength(input) / (1024 * 1024)).toFixed(2)} MB`
);
console.log(`Iterations: ${ITERATIONS}`);
console.log('------------------------------------');

global.gc?.(); // reset heap before run (requires --expose-gc)

const start = performance.now();
for (let i = 0; i < ITERATIONS; i++) {
  parseHL7v2().parse(input); // pass any options you want to profile
}
const dur = performance.now() - start;

console.log(`Total time: ${dur.toFixed(2)} ms`);
console.log(`Avg per parse: ${(dur / ITERATIONS).toFixed(2)} ms`);
