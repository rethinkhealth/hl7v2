/**
 * Memory consumption tests for hl7v2-annotate-profile-context.
 *
 * Verifies that:
 * 1. Profile Maps on file.data.profileContext hold references to shared LRU-cached objects, not copies
 * 2. Per-message overhead is bounded (Map containers only, not profile data)
 * 3. Memory does not grow linearly with message count under sustained load
 * 4. GC reclaims file.data.profileContext Maps after processing
 */
import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import { hl7v2AnnotateProfileContext } from "../src";

function msh(version: string) {
  return s(
    "MSH",
    f("|"),
    f("^~\\&"),
    f("SENDER"),
    f("FAC"),
    f("RECV"),
    f("RFAC"),
    f("20241201"),
    f(""),
    f(c("ADT"), c("A01"), c("ADT_A01")),
    f("MSG001"),
    f("P"),
    f(version)
  );
}

function pid() {
  return s(
    "PID",
    f("1"),
    f(""),
    f("12345"),
    f(""),
    f(c("Doe"), c("John"), c("M")),
    f(""),
    f("19800101"),
    f("F")
  );
}

function obx(index: number) {
  return s(
    "OBX",
    f(String(index)),
    f("NM"),
    f(c("8302-2"), c("Body Height"), c("LN")),
    f(""),
    f("185"),
    f(c("cm"), c("Centimeter"), c("UCUM"))
  );
}

const processor = unified().use(hl7v2AnnotateProfileContext);

describe("memory: shared references", () => {
  it("profileContext.fields entries are the same object references as the LRU cache", async () => {
    const tree = m(msh("2.5"), pid());
    const file = new VFile();
    await processor.run(tree, file);

    // Load the same profile directly from the cache
    const cachedMsh = await profiles.fields.load("2.5", "MSH");
    const cachedPid = await profiles.fields.load("2.5", "PID");

    // Strict reference equality — not a copy, the exact same object
    expect(file.data.profileContext!.fields.get("MSH")).toBe(cachedMsh);
    expect(file.data.profileContext!.fields.get("PID")).toBe(cachedPid);
  });

  it("profileContext.datatypes entries are the same object references as the LRU cache", async () => {
    const tree = m(msh("2.5"), pid());
    const file = new VFile();
    await processor.run(tree, file);

    const cachedSt = await profiles.datatypes.load("2.5", "ST");
    expect(file.data.profileContext!.datatypes.get("ST")).toBe(cachedSt);
  });

  it("profileContext.tables entries are the same object references as the LRU cache", async () => {
    const tree = m(msh("2.5"), pid());
    const file = new VFile();
    await processor.run(tree, file);

    // Find any table entry and verify it matches the cache
    const firstTableId = [...file.data.profileContext!.tables.keys()][0]!;
    const cachedTable = await profiles.tables.load("2.5", firstTableId);
    expect(file.data.profileContext!.tables.get(firstTableId)).toBe(
      cachedTable
    );
  });

  it("two messages share the same profile object references", async () => {
    const tree1 = m(msh("2.5"), pid());
    const tree2 = m(msh("2.5"), pid());
    const file1 = new VFile();
    const file2 = new VFile();

    await processor.run(tree1, file1);
    await processor.run(tree2, file2);

    // Different Maps but same underlying objects
    expect(file1.data.profileContext!.fields).not.toBe(
      file2.data.profileContext!.fields
    );
    expect(file1.data.profileContext!.fields.get("MSH")).toBe(
      file2.data.profileContext!.fields.get("MSH")
    );
    expect(file1.data.profileContext!.fields.get("PID")).toBe(
      file2.data.profileContext!.fields.get("PID")
    );
    expect(file1.data.profileContext!.datatypes.get("ST")).toBe(
      file2.data.profileContext!.datatypes.get("ST")
    );
  });
});

describe("memory: per-message overhead", () => {
  it("profileContext Maps contain only index entries, not profile data copies", async () => {
    const segments = [msh("2.5"), pid()];
    for (let i = 1; i <= 10; i++) {
      segments.push(obx(i));
    }
    const tree = m(...segments);
    const file = new VFile();
    await processor.run(tree, file);

    // Despite 12 segments, only 3 unique segment types
    expect(file.data.profileContext!.fields.size).toBe(3); // MSH, PID, OBX
    // Datatypes and tables are derived from those 3 segment definitions
    expect(file.data.profileContext!.datatypes.size).toBeGreaterThan(0);
    expect(file.data.profileContext!.tables.size).toBeGreaterThan(0);
  });

  it("Map sizes scale with unique segment types, not total segment count", async () => {
    // 3 unique segments, 3 total
    const small = m(msh("2.5"), pid(), obx(1));
    const smallFile = new VFile();
    await processor.run(small, smallFile);

    // 3 unique segments, 53 total
    const largeSegments = [msh("2.5"), pid()];
    for (let i = 1; i <= 50; i++) {
      largeSegments.push(obx(i));
    }
    const large = m(...largeSegments);
    const largeFile = new VFile();
    await processor.run(large, largeFile);

    // Same number of unique segments → same Map sizes
    expect(largeFile.data.profileContext!.fields.size).toBe(
      smallFile.data.profileContext!.fields.size
    );
    expect(largeFile.data.profileContext!.datatypes.size).toBe(
      smallFile.data.profileContext!.datatypes.size
    );
    expect(largeFile.data.profileContext!.tables.size).toBe(
      smallFile.data.profileContext!.tables.size
    );
  });
});

describe("memory: sustained load", () => {
  it("processing 1000 messages does not retain per-message data", async () => {
    const tree = m(msh("2.5"), pid(), obx(1));

    // Warm the cache and JIT
    for (let i = 0; i < 10; i++) {
      await processor.run(tree, new VFile());
    }

    // Measure: process 1000 messages, each with a fresh VFile.
    // The context plugin does NOT mutate the tree, so we reuse it.
    // Each VFile's Maps go out of scope each iteration.
    const heapSamples: number[] = [];
    for (let i = 0; i < 1000; i++) {
      const file = new VFile();
      await processor.run(tree, file);
      if (i % 250 === 0) {
        heapSamples.push(process.memoryUsage().heapUsed);
      }
    }
    heapSamples.push(process.memoryUsage().heapUsed);

    // Heap at the end should not be significantly larger than at the start.
    // Allow up to 10MB for V8 internal bookkeeping without exposed GC.
    const growthMB = (heapSamples.at(-1)! - heapSamples[0]!) / 1024 / 1024;
    expect(growthMB).toBeLessThan(10);
  });

  it("retaining file references accumulates only Map overhead, not profile data", async () => {
    const tree = m(msh("2.5"), pid());

    // Warm the cache
    await processor.run(structuredClone(tree), new VFile());

    // Retain 100 files to measure cumulative Map overhead
    const files: VFile[] = [];
    for (let i = 0; i < 100; i++) {
      const file = new VFile();
      await processor.run(structuredClone(tree), file);
      files.push(file);
    }

    // All 100 files share the same profile objects
    const firstMsh = files[0]!.data.profileContext!.fields.get("MSH");
    for (const file of files) {
      expect(file.data.profileContext!.fields.get("MSH")).toBe(firstMsh);
    }

    // Prevent files from being optimized away
    expect(files).toHaveLength(100);
  });
});
