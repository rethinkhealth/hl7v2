import { createLazyImport, lazyImport } from "../../src/stores/utils";

describe("lazyImport", () => {
  it("imports the profile at a path in a versioned directory", async () => {
    expect(
      await lazyImport<{ id: string }>("../profiles/v2.5/tables/0001.json")
    ).toMatchObject({ id: "0001" });
  });

  it("imports the profile at a path in the UTG directory", async () => {
    expect(
      await lazyImport<{ id: string }>("../profiles/utg/v2-0001.json")
    ).toMatchObject({ id: "v2-0001" });
  });

  it("imports a file of a version itself", async () => {
    const segments = await lazyImport<{ segments: { id: string }[] }>(
      "../profiles/v2.5/segments.json"
    );

    expect(segments?.segments.some(({ id }) => id === "PID")).toBe(true);
  });

  it("resolves undefined for a file a version does not bundle", async () => {
    expect(await lazyImport("../profiles/v9.9/segments.json")).toBeUndefined();
  });

  it("resolves the same value for repeated imports", async () => {
    const first = await lazyImport("../profiles/v2.5/tables/0001.json");
    const second = await lazyImport("../profiles/v2.5/tables/0001.json");

    expect(first).toBe(second);
  });

  it("resolves undefined for a directory that is not bundled", async () => {
    expect(
      await lazyImport("../profiles/v9.9/tables/0001.json")
    ).toBeUndefined();
  });

  it("resolves undefined for a profile the directory does not bundle", async () => {
    expect(
      await lazyImport("../profiles/v2.5/tables/ZZZZ.json")
    ).toBeUndefined();
  });

  it("resolves undefined for a path that leaves its directory", async () => {
    expect(
      await lazyImport("../profiles/v2.5/fields/../tables/0001.json")
    ).toBeUndefined();
  });
});

describe("createLazyImport", () => {
  const PID = "../profiles/v2.5/fields/PID.json";
  const MSH = "../profiles/v2.5/fields/MSH.json";
  const FIELDS_INDEX = "../profiles/v2.5/fields/index.ts";
  const SEGMENTS = "../profiles/v2.5/segments.json";

  /** An import that resolves `value` and counts its calls. */
  const counted = <T>(value: T) => vi.fn(() => Promise.resolve(value));

  it("imports a bundled profile once across loads", async () => {
    const importPid = counted({ id: "PID" });
    const load = createLazyImport(
      {},
      { [FIELDS_INDEX]: counted({ "./PID.json": importPid }) }
    );

    await load(PID);
    await load(PID);

    expect(importPid).toHaveBeenCalledOnce();
  });

  it("shares one import between loads that overlap", async () => {
    const importSegments = counted({ segments: [] });
    const load = createLazyImport({ [SEGMENTS]: importSegments }, {});

    const [first, second] = await Promise.all([load(SEGMENTS), load(SEGMENTS)]);

    expect(importSegments).toHaveBeenCalledOnce();
    expect(first).toBe(second);
  });

  it("imports a directory's index once for every profile in it", async () => {
    const importIndex = counted({
      "./MSH.json": counted({ id: "MSH" }),
      "./PID.json": counted({ id: "PID" }),
    });
    const load = createLazyImport({}, { [FIELDS_INDEX]: importIndex });

    await Promise.all([load(PID), load(MSH)]);

    expect(importIndex).toHaveBeenCalledOnce();
  });

  it("imports a profile again after its import rejected", async () => {
    const importPid = vi
      .fn<() => Promise<unknown>>()
      .mockRejectedValueOnce(new Error("chunk failed to load"))
      .mockResolvedValueOnce({ id: "PID" });
    const load = createLazyImport(
      {},
      { [FIELDS_INDEX]: counted({ "./PID.json": importPid }) }
    );

    await expect(load(PID)).rejects.toThrow("chunk failed to load");
    expect(await load(PID)).toStrictEqual({ id: "PID" });
    expect(importPid).toHaveBeenCalledTimes(2);
  });

  it("imports a directory's index again after its import rejected", async () => {
    const importIndex = vi
      .fn<() => Promise<Record<string, () => Promise<unknown>>>>()
      .mockRejectedValueOnce(new Error("chunk failed to load"))
      .mockResolvedValueOnce({ "./PID.json": counted({ id: "PID" }) });
    const load = createLazyImport({}, { [FIELDS_INDEX]: importIndex });

    await expect(load(PID)).rejects.toThrow("chunk failed to load");
    expect(await load(PID)).toStrictEqual({ id: "PID" });
  });

  it("imports only the index for a name its directory does not bundle", async () => {
    const importPid = counted({ id: "PID" });
    const importIndex = counted({ "./PID.json": importPid });
    const load = createLazyImport({}, { [FIELDS_INDEX]: importIndex });

    expect(await load("../profiles/v2.5/fields/ZPI.json")).toBeUndefined();
    expect(await load("../profiles/v2.5/fields/ZPI.json")).toBeUndefined();
    expect(importIndex).toHaveBeenCalledOnce();
    expect(importPid).not.toHaveBeenCalled();
  });

  it("imports nothing for a directory that is not bundled", async () => {
    const importIndex = counted({});
    const importSegments = counted({ segments: [] });
    const load = createLazyImport(
      { [SEGMENTS]: importSegments },
      { [FIELDS_INDEX]: importIndex }
    );

    expect(await load("../profiles/v9.9/fields/PID.json")).toBeUndefined();
    expect(importIndex).not.toHaveBeenCalled();
    expect(importSegments).not.toHaveBeenCalled();
  });

  it("resolves undefined for a path that names an Object.prototype member", async () => {
    const load = createLazyImport(
      {},
      { [FIELDS_INDEX]: counted({ "./PID.json": counted({ id: "PID" }) }) }
    );

    expect(await load("__proto__")).toBeUndefined();
    expect(await load("constructor")).toBeUndefined();
    expect(await load("/index.ts")).toBeUndefined();
    expect(await load("../profiles/v2.5/fields/__proto__")).toBeUndefined();
  });
});
