import { parse } from "../src/parse";

describe(parse, () => {
  it("parses simple segments", () => {
    expect(parse("PID")).toStrictEqual({
      segment: { name: "PID" },
    });
  });

  it("parses groups and repetitions", () => {
    expect(parse("ORDERS[2].RESULT.OBX[3].5[1].2.1")).toStrictEqual({
      component: 2,
      field: 5,
      groups: [{ name: "ORDERS", repetition: 2 }, { name: "RESULT" }],
      repetition: 1,
      segment: { name: "OBX", repetition: 3 },
      subcomponent: 1,
    });
  });

  it("parses segment with repetition", () => {
    expect(parse("PID[2]")).toStrictEqual({
      segment: { name: "PID", repetition: 2 },
    });
  });

  it("parses the first segment repetition, since repetitions count from 1", () => {
    expect(parse("ORDER.OBX[1]")).toStrictEqual({
      groups: [{ name: "ORDER" }],
      segment: { name: "OBX", repetition: 1 },
    });
  });

  it("parses field without repetition", () => {
    expect(parse("PID.3")).toStrictEqual({
      field: 3,
      segment: { name: "PID" },
    });
  });

  it("parses field with repetition", () => {
    expect(parse("PID.5[2]")).toStrictEqual({
      field: 5,
      repetition: 2,
      segment: { name: "PID" },
    });
  });

  it("parses component without subcomponent", () => {
    expect(parse("PID.5.2")).toStrictEqual({
      component: 2,
      field: 5,
      segment: { name: "PID" },
    });
  });

  it("parses full path with all parts", () => {
    expect(parse("PID.5[1].2.3")).toStrictEqual({
      component: 2,
      field: 5,
      repetition: 1,
      segment: { name: "PID" },
      subcomponent: 3,
    });
  });

  describe("error handling", () => {
    it("throws when path is empty", () => {
      expect(() => parse("")).toThrow("Path must be a non-empty string");
    });

    it("throws when path is not a string", () => {
      // @ts-expect-error - testing runtime behavior
      expect(() => parse(null)).toThrow("Path must be a non-empty string");
    });

    it("throws when path has leading spaces", () => {
      expect(() => parse(" PID")).toThrow(
        "Path cannot contain leading/trailing spaces"
      );
    });

    it("throws when path has trailing spaces", () => {
      expect(() => parse("PID ")).toThrow(
        "Path cannot contain leading/trailing spaces"
      );
    });

    it("throws when path format is invalid", () => {
      expect(() => parse("invalid-path-123")).toThrow(
        'Invalid HL7 path format: "invalid-path-123". Expected [GROUP[N].]...NAME[N][.FIELD[REPETITION][.COMPONENT[.SUBCOMPONENT]]].'
      );
    });

    it("throws when a path has more steps than a subcomponent", () => {
      expect(() => parse("PID.5.1.2.3")).toThrow("Invalid HL7 path format");
    });

    it("throws when a name follows the field number", () => {
      expect(() => parse("PID.5.OBX")).toThrow("Invalid HL7 path format");
    });

    it("throws when a field reference is not a field number", () => {
      expect(() => parse("PID.5x")).toThrow("Invalid HL7 path format");
    });

    it("throws when a step is empty", () => {
      expect(() => parse("ORDER..OBR")).toThrow("Invalid HL7 path format");
    });

    it("throws when segment repetition is zero in a group path", () => {
      expect(() => parse("ORDER.OBR[0].1")).toThrow(
        "Segment repetition must be ≥1"
      );
    });

    it("throws when segment repetition is zero", () => {
      expect(() => parse("PID[0]")).toThrow("Segment repetition must be ≥1");
    });

    it("throws when group repetition is zero", () => {
      expect(() => parse("ORDER[0].OBR")).toThrow(
        "Group repetition must be ≥1"
      );
    });

    it("throws when field number is zero", () => {
      expect(() => parse("PID.0")).toThrow("Field number must be ≥1");
    });

    it("throws when repetition number is zero", () => {
      expect(() => parse("PID.5[0]")).toThrow("Repetition number must be ≥1");
    });

    it("throws when component number is zero", () => {
      expect(() => parse("PID.5.0")).toThrow("Component number must be ≥1");
    });

    it("throws when subcomponent number is zero", () => {
      expect(() => parse("PID.5.1.0")).toThrow(
        "Subcomponent number must be ≥1"
      );
    });
  });
});

describe("precomputed MSH paths", () => {
  it("parses MSH.3 to field 3 of MSH", () => {
    expect(parse("MSH.3")).toStrictEqual({
      field: 3,
      segment: { name: "MSH" },
    });
  });

  it("parses MSH.4 to field 4 of MSH", () => {
    expect(parse("MSH.4")).toStrictEqual({
      field: 4,
      segment: { name: "MSH" },
    });
  });

  it("parses MSH.5 to field 5 of MSH", () => {
    expect(parse("MSH.5")).toStrictEqual({
      field: 5,
      segment: { name: "MSH" },
    });
  });

  it("parses MSH.6 to field 6 of MSH", () => {
    expect(parse("MSH.6")).toStrictEqual({
      field: 6,
      segment: { name: "MSH" },
    });
  });

  it("parses MSH.9 to field 9 of MSH", () => {
    expect(parse("MSH.9")).toStrictEqual({
      field: 9,
      segment: { name: "MSH" },
    });
  });

  it("parses MSH.9.1 to component 1 of field 9 of MSH", () => {
    expect(parse("MSH.9.1")).toStrictEqual({
      component: 1,
      field: 9,
      segment: { name: "MSH" },
    });
  });

  it("parses MSH.9.2 to component 2 of field 9 of MSH", () => {
    expect(parse("MSH.9.2")).toStrictEqual({
      component: 2,
      field: 9,
      segment: { name: "MSH" },
    });
  });

  it("parses MSH.9.3 to component 3 of field 9 of MSH", () => {
    expect(parse("MSH.9.3")).toStrictEqual({
      component: 3,
      field: 9,
      segment: { name: "MSH" },
    });
  });

  it("parses MSH.10 to field 10 of MSH", () => {
    expect(parse("MSH.10")).toStrictEqual({
      field: 10,
      segment: { name: "MSH" },
    });
  });

  it("parses MSH.12 to field 12 of MSH", () => {
    expect(parse("MSH.12")).toStrictEqual({
      field: 12,
      segment: { name: "MSH" },
    });
  });

  it("parses MSH.12.1 to component 1 of field 12 of MSH", () => {
    expect(parse("MSH.12.1")).toStrictEqual({
      component: 1,
      field: 12,
      segment: { name: "MSH" },
    });
  });
});
