/**
 * Crash resilience tests for the HL7v2 parser.
 *
 * These tests reproduce parser crashes discovered by the QA fuzz suite (QR3).
 * The parser should never throw — it should return a Root node with diagnostics
 * for malformed input, not crash with an unhandled exception.
 *
 * Tracking: https://github.com/rethinkhealth/hl7v2/issues/551
 *
 * Root cause: processor.ts openField() throws "Cannot open field without an
 * active segment" when a FIELD_DELIM token arrives before any TEXT token has
 * been seen (which would set the segment name). The tokenizer emits FIELD_DELIM
 * for delimiter characters, but the processor assumes a segment name always
 * comes first.
 *
 * Affected inputs: any string that starts with a delimiter character (|, ^, ~, &)
 * before a 3-letter segment name. In real-world usage, this happens when:
 * - Users paste partial messages into editors
 * - Hospital interfaces send truncated/corrupted transmissions
 * - Network streams deliver fragments starting mid-field
 */
import { parseHL7v2 } from "../src/parser";

describe("crash resilience — #551", () => {
  /**
   * These are the minimal counterexamples discovered by fast-check.
   * Each one should parse without throwing, returning a Root node.
   */
  describe("counterexamples from QA fuzz suite", () => {
    const crashInputs = [
      { input: "|", description: "lone field separator" },
      { input: "~", description: "lone repetition separator" },
      { input: "^", description: "lone component separator" },
      { input: "&", description: "lone subcomponent separator" },
      {
        input: "|\r|&&",
        description: "field sep, segment end, more delimiters",
      },
      { input: "|\\~", description: "field sep + escape + repetition" },
      { input: "\\\\", description: "double backslash (escape char)" },
      { input: "\\\r", description: "escape char + segment terminator" },
      { input: "\r|\r\\~^\\", description: "segment end then delimiters" },
    ];

    for (const { input, description } of crashInputs) {
      it(`does not throw on: ${description} (${JSON.stringify(input)})`, () => {
        expect(() => parseHL7v2(input)).not.toThrow();
      });
    }
  });

  describe("parser returns a Root node for all crash inputs", () => {
    const crashInputs = ["|", "~", "^", "&", "||", "^~|", "\r|\r"];

    for (const input of crashInputs) {
      it(`returns Root for ${JSON.stringify(input)}`, () => {
        let root: ReturnType<typeof parseHL7v2> | undefined;
        try {
          root = parseHL7v2(input);
        } catch {
          // Test below will fail
        }
        expect(root).toBeDefined();
        expect(root?.type).toBe("root");
      });
    }
  });

  describe("root cause analysis — token sequences that trigger the throw", () => {
    /**
     * The crash happens in openField() at processor.ts:133-136:
     *
     *   const openField = (start) => {
     *     if (!seg) {
     *       throw new Error("Cannot open field without an active segment...");
     *     }
     *     ...
     *   };
     *
     * openField is called from:
     * 1. FIELD_DELIM handler (line 300-304) — when !field, calls openField
     * 2. REPETITION_DELIM handler (line 310-311) — when !field, calls openField
     * 3. openComponent (line 199-200) — when !field, calls openField
     * 4. ensureForText (line 231-232) — when !field, calls openField
     *
     * The crash occurs when ANY of these code paths run before a TEXT token
     * has been processed with expectingSegmentName=true (which calls openSegment
     * and sets seg to a non-null value).
     *
     * Token sequences that trigger the crash:
     * - FIELD_DELIM as first token → "|" input
     * - REPETITION_DELIM as first token → "~" input
     * - COMPONENT_DELIM as first token → "^" input
     * - SUBCOMP_DELIM as first token → "&" input
     * - SEGMENT_END then FIELD_DELIM → "\r|" input
     *
     * Non-crashing sequences (for comparison):
     * - TEXT as first token → "ABC" → sets segment name, seg is non-null
     * - MSH bootstrap → "MSH|..." → handled by special bootstrap path
     */

    it("FIELD_DELIM as first token crashes", () => {
      // Input "|" produces: FIELD_DELIM token
      // processor: FIELD_DELIM handler → !field → openField(start) → !seg → THROW
      expect(() => parseHL7v2("|")).not.toThrow();
    });

    it("REPETITION_DELIM as first token crashes", () => {
      // Input "~" produces: REPETITION_DELIM token
      // processor: REPETITION_DELIM handler → !field → openField(start) → !seg → THROW
      expect(() => parseHL7v2("~")).not.toThrow();
    });

    it("COMPONENT_DELIM as first token crashes", () => {
      // Input "^" produces: COMPONENT_DELIM token
      // processor: COMPONENT_DELIM handler → openComponent(end) → !field → openField(start) → !seg → THROW
      expect(() => parseHL7v2("^")).not.toThrow();
    });

    it("SUBCOMP_DELIM as first token crashes", () => {
      // Input "&" produces: SUBCOMP_DELIM token
      // processor: SUBCOMP_DELIM handler → ensureComponent(start) → !field → openField(start) → !seg → THROW
      expect(() => parseHL7v2("&")).not.toThrow();
    });

    it("SEGMENT_END then FIELD_DELIM crashes", () => {
      // Input "\r|" produces: SEGMENT_END, FIELD_DELIM
      // SEGMENT_END resets state (seg=null), then FIELD_DELIM → openField → !seg → THROW
      expect(() => parseHL7v2("\r|")).not.toThrow();
    });

    it("delimiter after valid segment does not crash", () => {
      // Verify the happy path works — TEXT sets seg, then delimiters are fine
      expect(() => parseHL7v2("PID|")).not.toThrow();
      expect(() => parseHL7v2("PID|123")).not.toThrow();
      expect(() => parseHL7v2("MSH|^~\\&|SENDER")).not.toThrow();
    });
  });
});
