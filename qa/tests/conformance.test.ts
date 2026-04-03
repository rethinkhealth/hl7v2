/**
 * QR1: Message Conformance — Golden-file snapshot suite.
 *
 * Runs the full HL7v2 pipeline against every fixture in qa/fixtures/ and
 * produces two layers of verification:
 *
 * 1. **Human-readable summary** (inline snapshot) — segment list, field counts,
 *    and diagnostics at a glance. Review this to confirm correctness.
 *
 * 2. **Full pipeline snapshot** (external snapshot file) — complete JSON result
 *    and diagnostic details. Catches regressions when any plugin changes.
 *
 * Fixtures are auto-discovered: drop a new .hl7 file into qa/fixtures/ and
 * it's automatically tested. Files prefixed with "invalid-" are excluded —
 * those are consumed by the diagnostics test suite (QR2).
 */
import { readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

import { parseHL7v2 } from "@rethinkhealth/hl7v2";
import type { VFile } from "vfile";

const FIXTURES_DIR = resolve(import.meta.dirname, "../fixtures");

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Discover all .hl7 fixture files, excluding "invalid-*" files
 * (those are for the diagnostics suite).
 */
function discoverFixtures(): string[] {
  return readdirSync(FIXTURES_DIR)
    .filter((f) => f.endsWith(".hl7") && !f.startsWith("invalid-"))
    .toSorted();
}

interface SegmentJson {
  segment: string;
  fields: unknown[];
}

/**
 * Build a human-readable summary of the pipeline output.
 *
 * Example output:
 * ```
 * adt-a01-basic.hl7
 *   segments: MSH(12) EVN(2) PID(13) PV1(3)
 *   diagnostics: 0
 * ```
 */
function summarize(filename: string, file: VFile): string {
  const result = file.result as (
    | SegmentJson
    | { group: string; children: unknown[] }
  )[];
  const lines: string[] = [filename];

  // Segment list with field counts
  const segmentList = result
    .map((entry) => {
      if ("segment" in entry) {
        return `${entry.segment}(${entry.fields.length})`;
      }
      return `[${entry.group}]`;
    })
    .join(" ");
  lines.push(`  segments: ${segmentList}`);

  // Diagnostics
  if (file.messages.length === 0) {
    lines.push("  diagnostics: 0");
  } else {
    lines.push(`  diagnostics: ${file.messages.length}`);
    for (const msg of file.messages) {
      const rule = msg.ruleId ? `[${msg.ruleId}]` : "";
      lines.push(`    - ${rule} ${msg.message}`);
    }
  }

  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

const fixtures = discoverFixtures();

describe("QR1: message conformance", () => {
  it.each(fixtures)(
    "%s — pipeline output matches snapshot",
    async (filename) => {
      const filepath = join(FIXTURES_DIR, filename);
      const source = readFileSync(filepath, "utf8");

      const file = await parseHL7v2.process(source);

      // Layer 1: Human-readable summary (inline snapshot).
      // Review this to confirm the parse is correct at a glance.
      expect(summarize(filename, file)).toMatchSnapshot();

      // Layer 2: Full pipeline output (external snapshot).
      // Catches detailed regressions in AST shape, diagnostic positions, etc.
      expect({
        result: file.result,
        diagnosticCount: file.messages.length,
        diagnostics: file.messages.map((msg) => ({
          message: msg.message,
          ruleId: msg.ruleId,
          source: msg.source,
          place: msg.place,
        })),
      }).toMatchSnapshot();
    }
  );

  it("auto-discovers fixture files", () => {
    // Sanity check: we should have at least 7 message-type fixtures
    // and several edge-case fixtures.
    expect(fixtures.length).toBeGreaterThanOrEqual(10);
  });
});
