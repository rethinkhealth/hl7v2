import { fields } from "../../src/stores/fields";

describe("fields", () => {
  it("loads the fields of a segment, keyed by sequence", async () => {
    const msh = await fields.load("2.5", "MSH");

    expect(msh?.segmentId).toBe("MSH");
    expect(msh?.bySequence.get(1)).toEqual({
      datatype: "ST",
      id: "MSH-1",
      item: "1",
      maxLength: 1,
      name: "Field Separator",
      optionality: "R",
      repetitions: 1,
      sequence: 1,
    });
  });

  it("lists the sequences of the required fields", async () => {
    const msh = await fields.load("2.5", "MSH");

    expect([...(msh?.requiredSequences ?? [])]).toEqual([
      1, 2, 7, 9, 10, 11, 12,
    ]);
  });

  // The field stays at sequence 2, so DG1-3 is still at 3, and it carries only
  // the columns the standard prints for it.
  it("keeps a withdrawn field at its sequence, with only what its row prints", async () => {
    // v2.6 DG1-2 (Diagnosis Coding Method) is withdrawn
    const dg1 = await fields.load("2.6", "DG1");

    expect(dg1?.bySequence.get(2)).toEqual({
      id: "DG1-2",
      item: "376",
      name: "Diagnosis Coding Method",
      optionality: "W",
      repetitions: 1,
      sequence: 2,
    });
    expect(dg1?.requiredSequences.has(2)).toBe(false);
  });

  // RP/# as printed: 2 for OBR-17, and "unbounded" for PID-3, which has no limit.
  it("gives a field's repetition limit as a number, or unbounded", async () => {
    const obr = await fields.load("2.6", "OBR");
    const pid = await fields.load("2.6", "PID");

    expect(obr?.bySequence.get(17)?.repetitions).toBe(2);
    expect(pid?.bySequence.get(3)?.repetitions).toBe("unbounded");
  });

  it("loads the fields of the version asked for", async () => {
    const v21 = await fields.load("2.1", "PID");
    const v282 = await fields.load("2.8.2", "PID");

    expect(v21?.bySequence.size).toBeLessThan(v282?.bySequence.size ?? 0);
  });

  it("resolves the same value for repeated loads", async () => {
    const first = await fields.load("2.5", "PID");
    const second = await fields.load("2.5", "PID");

    expect(first).toBe(second);
  });

  it("resolves undefined for a segment the version does not bundle", async () => {
    await expect(fields.load("2.5", "ZZZ")).resolves.toBeUndefined();
  });

  it("resolves undefined for a version that is not bundled", async () => {
    await expect(fields.load("9.9", "PID")).resolves.toBeUndefined();
  });
});
