import type { Nodes } from "@rethinkhealth/hl7v2-ast";
import { c, f, g, m, r, s } from "@rethinkhealth/hl7v2-builder";

import { format } from "../src/format";
import { select } from "../src/select";

const makeSample = () =>
  m(
    s("MSH", f("|"), f("MyApp")),
    s(
      "PID",
      f("1"),
      f(""),
      f(""),
      f(c("Smith"), c("John"), c("Sarah")),
      f(r(c("123456"), c("DOE"), c("JOHN")), r(c("A"), c("III"), c("L")))
    )
  );

describe(format, () => {
  const root = makeSample();

  it("formats a segment", () => {
    const result = select(root, "PID");
    expect(format(result!.node, result!.ancestors)).toBe("PID");
  });

  it("formats a field", () => {
    const result = select(root, "PID-4");
    expect(format(result!.node, result!.ancestors)).toBe("PID-4");
  });

  it("formats a field repetition (first)", () => {
    const result = select(root, "PID-5[1]");
    expect(format(result!.node, result!.ancestors)).toBe("PID-5[1]");
  });

  it("formats a field repetition (second)", () => {
    const result = select(root, "PID-5[2]");
    expect(format(result!.node, result!.ancestors)).toBe("PID-5[2]");
  });

  it("formats a component", () => {
    const result = select(root, "PID-4.2");
    expect(format(result!.node, result!.ancestors)).toBe("PID-4.2");
  });

  it("formats a component with explicit repetition", () => {
    const result = select(root, "PID-4[1].3");
    expect(format(result!.node, result!.ancestors)).toBe("PID-4.3");
  });

  it("formats a component on non-first repetition", () => {
    const result = select(root, "PID-5[2].1");
    expect(format(result!.node, result!.ancestors)).toBe("PID-5[2].1");
  });

  it("formats a subcomponent", () => {
    const result = select(root, "PID-4.1.1");
    expect(format(result!.node, result!.ancestors)).toBe("PID-4.1.1");
  });

  describe("with segment repetitions", () => {
    const message = m(
      s("MSH", f("|")),
      s("PID", f("First")),
      s("PID", f("Second")),
      s("PID", f("Third"))
    );

    it("omits [1] for first segment", () => {
      const result = select(message, "PID");
      expect(format(result!.node, result!.ancestors)).toBe("PID");
    });

    it("includes [N] for subsequent segments", () => {
      const result = select(message, "PID[2]");
      expect(format(result!.node, result!.ancestors)).toBe("PID[2]");
    });

    it("includes [N] for third segment", () => {
      const result = select(message, "PID[3]");
      expect(format(result!.node, result!.ancestors)).toBe("PID[3]");
    });

    it("formats fields on repeated segments", () => {
      const result = select(message, "PID[2]-1");
      expect(format(result!.node, result!.ancestors)).toBe("PID[2]-1");
    });
  });

  describe("with groups", () => {
    const message = m(
      s("MSH", f("|")),
      g(
        "ORDER",
        s("ORC", f("OrderControl")),
        s("OBR", f("ObservationRequest"))
      ),
      g("PATIENT", s("PID", f("PatientID")))
    );

    it("formats a segment within a group", () => {
      const result = select(message, "ORDER-ORC");
      expect(format(result!.node, result!.ancestors)).toBe("ORDER-ORC");
    });

    it("formats a field within a group", () => {
      const result = select(message, "ORDER-ORC-1");
      expect(format(result!.node, result!.ancestors)).toBe("ORDER-ORC-1");
    });
  });

  describe("with nested groups", () => {
    const message = m(
      s("MSH", f("|")),
      g(
        "ORDERS",
        s("ORC", f("OrderControl")),
        g("RESULT", s("OBX", f("Result1"))),
        g("RESULT", s("OBX", f("Result2")))
      )
    );

    it("formats a segment in a nested group", () => {
      const result = select(message, "ORDERS-RESULT-OBX");
      expect(format(result!.node, result!.ancestors)).toBe("ORDERS-RESULT-OBX");
    });

    it("formats a segment in second nested group repetition", () => {
      const result = select(message, "ORDERS-RESULT[2]-OBX");
      expect(format(result!.node, result!.ancestors)).toBe(
        "ORDERS-RESULT[2]-OBX"
      );
    });
  });

  describe("with repeated groups", () => {
    const message = m(
      s("MSH", f("|")),
      g("ORDER", s("OBX", f("Obs1"))),
      g("ORDER", s("OBX", f("Obs2")))
    );

    it("omits [1] for first group", () => {
      const result = select(message, "ORDER-OBX");
      expect(format(result!.node, result!.ancestors)).toBe("ORDER-OBX");
    });
  });

  describe("with group as target node", () => {
    const message = m(
      s("MSH", f("|")),
      g("ORDER", s("ORC", f("OrderControl"))),
      g("ORDER", s("ORC", f("OrderControl2")))
    );

    it("formats a group node", () => {
      const result = select(message, "ORDER");
      expect(result).not.toBeNull();
      expect(result!.node.type).toBe("group");
      expect(format(result!.node, result!.ancestors)).toBe("ORDER");
    });

    it("formats a repeated group node", () => {
      const result = select(message, "ORDER[2]");
      expect(result).not.toBeNull();
      expect(result!.node.type).toBe("group");
      expect(format(result!.node, result!.ancestors)).toBe("ORDER[2]");
    });

    it("formats a nested group as target", () => {
      const nested = m(
        s("MSH", f("|")),
        g("ORDER", g("RESULT", s("OBX", f("Value"))))
      );
      const result = select(nested, "ORDER-RESULT");
      expect(result).not.toBeNull();
      expect(result!.node.type).toBe("group");
      expect(format(result!.node, result!.ancestors)).toBe("ORDER-RESULT");
    });
  });

  describe("round-trips with select", () => {
    const message = m(
      s("MSH", f("|")),
      s("PID", f("1"), f(""), f("PatientID"), f(c("Smith"), c("John"))),
      s("PID", f("2")),
      g(
        "ORDER",
        s("ORC", f("OrderControl")),
        g("RESULT", s("OBX", f(r(c("Val1", "Sub1"), c("Val2")))))
      )
    );

    it.each([
      "PID",
      "PID[2]",
      "PID-3",
      "PID-4.2",
      "ORDER-ORC",
      "ORDER-ORC-1",
      "ORDER-RESULT-OBX",
      "ORDER-RESULT-OBX-1[1]",
      "ORDER-RESULT-OBX-1.1.1",
    ])("round-trips: %s", (path) => {
      const result = select(message, path);
      expect(result).not.toBeNull();
      expect(format(result!.node, result!.ancestors)).toBe(path);
    });
  });

  describe("implicit group resolution produces fully-qualified path", () => {
    const message = m(
      s("MSH", f("|")),
      g("ORDER", g("RESULT", s("OBX", f("Value"))))
    );

    it("includes group ancestors even when select used a short path", () => {
      const result = select(message, "OBX");
      expect(result).not.toBeNull();
      // select("OBX") finds it inside groups, format produces the full path
      expect(format(result!.node, result!.ancestors)).toBe("ORDER-RESULT-OBX");
    });
  });

  describe("nested visit requires manually concatenated ancestors", () => {
    const message = m(
      s("MSH", f("|")),
      g("ORDER", s("OBR", f("Request"), f("Details")))
    );

    it("works with full ancestor chain from root", () => {
      // Simulates what a lint rule would do with nested visits:
      // visit(tree, "segment", (segment, segmentAncestors) => {
      //   visit(segment, "field", (field, fieldAncestors) => {
      //     // fieldAncestors is [segment], NOT [root, group, segment]
      //     // Must concatenate: [...segmentAncestors, segment, ...fieldAncestors]
      //   })
      // })
      const segResult = select(message, "ORDER-OBR");
      const fieldResult = select(message, "ORDER-OBR-2");

      // Full ancestors from select — works correctly
      expect(format(fieldResult!.node, fieldResult!.ancestors)).toBe(
        "ORDER-OBR-2"
      );

      // Subtree-relative ancestors (as nested visit would give) — loses group
      const subtreeAncestors = [segResult!.node];
      expect(format(fieldResult!.node, subtreeAncestors as Nodes[])).toBe(
        "OBR-2"
      );
    });
  });

  describe("error handling", () => {
    it("throws on malformed ancestor chain with no segment or group", () => {
      const tree = m(s("MSH", f("|")));
      expect(() => format(tree, [])).toThrow(
        "no segment or group node found in ancestor chain"
      );
    });
  });
});
