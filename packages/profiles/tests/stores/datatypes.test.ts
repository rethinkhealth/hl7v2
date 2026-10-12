import { datatypes } from "../../src/stores/datatypes";

describe("datatypes", () => {
  it("loads a composite datatype, its components keyed by sequence", async () => {
    const cwe = await datatypes.load("2.5", "CWE");

    expect(cwe).toMatchObject({
      id: "CWE",
      kind: "composite",
      title: "Coded with Exceptions",
      version: "2.5",
    });
    expect(cwe?.componentsBySequence.get(3)).toEqual({
      datatypeId: "ID",
      name: "Name of Coding System",
      optionality: "O",
      sequence: 3,
      table: "HL70396",
    });
  });

  it("keeps a withdrawn component at its sequence, with no datatype", async () => {
    const xpn = await datatypes.load("2.7", "XPN");

    expect(xpn?.componentsBySequence.get(6)).toEqual({
      name: "Degree (e.g., MD)",
      optionality: "W",
      sequence: 6,
    });
  });

  it("gives no component optionality before v2.5", async () => {
    const xpn = await datatypes.load("2.4", "XPN");

    expect(xpn?.componentsBySequence.get(1)?.optionality).toBeUndefined();
    expect(xpn?.requiredSequences.size).toBe(0);
  });

  it("loads a primitive datatype with no components", async () => {
    const st = await datatypes.load("2.5", "ST");

    expect(st?.kind).toBe("primitive");
    expect(st?.componentsBySequence.size).toBe(0);
  });

  it("lists the sequences of the required components", async () => {
    const rpt = await datatypes.load("2.6", "RPT");

    expect([...(rpt?.requiredSequences ?? [])]).toEqual([1]);
  });

  // `requiredSequences` lists only R components; RE may be left empty.
  it("does not count a component whose optionality is RE as required", async () => {
    // v2.7 XPN.1 (Family Name) is RE: required, but may be empty
    const xpn = await datatypes.load("2.7", "XPN");

    expect(xpn?.componentsBySequence.get(1)?.optionality).toBe("RE");
    expect(xpn?.requiredSequences.has(1)).toBe(false);
  });

  it("loads the datatype of the version asked for", async () => {
    const v21 = await datatypes.load("2.1", "CE");
    const v25 = await datatypes.load("2.5", "CE");

    expect(v21?.version).toBe("2.1");
    expect(v25?.version).toBe("2.5");
  });

  it("resolves the same value for repeated loads", async () => {
    const first = await datatypes.load("2.5", "CWE");
    const second = await datatypes.load("2.5", "CWE");

    expect(first).toBe(second);
  });

  it("resolves undefined for a datatype the version does not bundle", async () => {
    await expect(datatypes.load("2.5", "ZZZZZ")).resolves.toBeUndefined();
  });

  it("resolves undefined for a version that is not bundled", async () => {
    await expect(datatypes.load("9.9", "CWE")).resolves.toBeUndefined();
  });
});
