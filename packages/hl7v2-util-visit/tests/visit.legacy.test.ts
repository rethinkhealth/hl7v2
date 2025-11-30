import type { Group, Nodes, Segment } from "@rethinkhealth/hl7v2-ast";
import { c, f, g, m, s } from "@rethinkhealth/hl7v2-builder";
import { describe, expect, it } from "vitest";
import type { VisitInfo } from "../src";
import { EXIT, SKIP, visit } from "../src";
import { setupConfig } from "./test-helpers";

describe("visit (legacy config)", () => {
  setupConfig("./tests/configs/legacy");

  it("should visit all nodes in order", () => {
    const ast = m(
      s("MSH", f(c()), f()),
      g("PATIENT_GROUP", s("PID", f())),
      s("NK1")
    );
    const visitedNodes: string[] = [];
    visit(ast, (node) => {
      visitedNodes.push(node.type);
    });

    expect(visitedNodes).toEqual([
      "root",
      "segment",
      "segment-header",
      "field",
      "field-repetition",
      "component",
      "subcomponent",
      "field",
      "field-repetition",
      "component",
      "subcomponent",
      "group",
      "segment",
      "segment-header",
      "field",
      "field-repetition",
      "component",
      "subcomponent",
      "segment",
      "segment-header",
    ]);
  });

  it("should filter nodes by type string", () => {
    const ast = m(
      s("MSH", f(c()), f()),
      g("PATIENT_GROUP", s("PID", f())),
      s("NK1")
    );
    const visitedSegments: string[] = [];
    visit(ast, "segment", (node) => {
      visitedSegments.push(node.type);
    });
    expect(visitedSegments).toEqual(["segment", "segment", "segment"]);
  });

  it("should filter nodes by object properties", () => {
    const ast = m(
      s("MSH", f(c()), f()),
      g("PATIENT_GROUP", s("PID", f())),
      s("NK1")
    );
    const visitedNodes: string[] = [];
    visit(ast, { name: "PATIENT_GROUP" }, (node) => {
      visitedNodes.push((node as Group).name || "");
    });
    expect(visitedNodes).toEqual(["PATIENT_GROUP"]);
  });

  it("should filter nodes with a test function", () => {
    const ast = m(
      s("MSH", f(c()), f()),
      g("PATIENT_GROUP", s("PID", f())),
      s("NK1")
    );
    const visitedFields: string[] = [];
    visit(
      ast,
      (node) => node.type === "field",
      (node) => {
        visitedFields.push(node.type);
      }
    );
    expect(visitedFields).toEqual(["field", "field", "field"]);
  });

  it("should stop traversal when visitor returns EXIT", () => {
    const ast = m(
      s("MSH", f(c()), f()),
      g("PATIENT_GROUP", s("PID", f())),
      s("NK1")
    );
    const visitedNodes: string[] = [];
    visit(ast, (node) => {
      visitedNodes.push(node.type);
      if (node.type === "group") {
        return EXIT;
      }
    });
    expect(visitedNodes).toEqual([
      "root",
      "segment",
      "segment-header",
      "field",
      "field-repetition",
      "component",
      "subcomponent",
      "field",
      "field-repetition",
      "component",
      "subcomponent",
      "group",
    ]);
  });

  it("should skip children when visitor returns SKIP", () => {
    const ast = m(
      s("MSH", f(c()), f()),
      g("PATIENT_GROUP", s("PID", f())),
      s("NK1")
    );
    const visitedNodes: string[] = [];
    visit(ast, (node) => {
      visitedNodes.push(node.type);
      if (node.type === "segment" && node.children[0]?.value === "MSH") {
        return SKIP;
      }
    });
    expect(visitedNodes).toEqual([
      "root",
      "segment", // MSH is visited
      // MSH children are skipped
      "group",
      "segment",
      "segment-header",
      "field",
      "field-repetition",
      "component",
      "subcomponent",
      "segment",
      "segment-header",
    ]);
  });

  describe("VisitInfo structure", () => {
    it("should provide correct info with index, sequence, and depth", () => {
      const ast = m(
        s("MSH", f(c("value1")), f("value2")),
        g("PATIENT_GROUP", s("PID", f(c("value3")))),
        s("NK1")
      );
      const infos: Array<{ info: VisitInfo; ancestors: Nodes[] }> = [];
      visit(ast, "component", (_node, ancestors, info) => {
        infos.push({ info: { ...info }, ancestors: [...ancestors] });
      });

      // Should find 3 components total
      expect(infos).toHaveLength(3);

      // First component (value1) in MSH field 1
      const first = infos[0];
      expect(first.info.depth).toBe(5); // root > segment > field > field-repetition > component
      expect(first.info.index).toBe(0);
      expect(first.info.sequence).toBe(1);
      expect(first.ancestors).toHaveLength(4); // parents, not including self

      // Check ancestors
      expect(first.ancestors[0]?.type).toBe("root");
      expect(first.ancestors[1]?.type).toBe("segment");
      expect(first.ancestors[2]?.type).toBe("field");
      expect(first.ancestors[3]?.type).toBe("field-repetition");

      // Second component (value2) in MSH field 2
      const second = infos[1];
      expect(second.info.depth).toBe(5);
      expect(second.info.index).toBe(0); // First component in its field-repetition
      expect(second.info.sequence).toBe(1);

      // Third component (value3) in PID field 1 inside PATIENT_GROUP
      const third = infos[2];
      expect(third.info.depth).toBe(6); // root > group > segment > field > field-repetition > component
      expect(third.ancestors).toHaveLength(5);
      expect(third.ancestors[1]?.type).toBe("group");
    });

    it("should provide metadata for segments", () => {
      const ast = m(
        s("MSH", f(c()), f()),
        g("PATIENT_GROUP", s("PID", f())),
        s("NK1")
      );
      const headers: string[] = [];
      visit(ast, "segment", (_node, _ancestors, info) => {
        if (info.metadata?.header) {
          headers.push(info.metadata.header as string);
        }
      });
      expect(headers).toEqual(["MSH", "PID", "NK1"]);
    });

    it("should provide metadata for groups", () => {
      const ast = m(
        s("MSH", f(c()), f()),
        g("PATIENT_GROUP", s("PID", f())),
        s("NK1")
      );
      visit(ast, "group", (_node, _ancestors, info) => {
        expect(info.metadata?.name).toBe("PATIENT_GROUP");
      });
    });

    it("should have empty ancestors for root node", () => {
      const ast = m(
        s("MSH", f(c()), f()),
        g("PATIENT_GROUP", s("PID", f())),
        s("NK1")
      );
      visit(ast, "root", (_node, ancestors, info) => {
        expect(ancestors).toEqual([]);
        expect(info.depth).toBe(1);
        expect(info.index).toBe(0);
        expect(info.sequence).toBe(1);
      });
    });

    it("should track parent hierarchy correctly via ancestors", () => {
      const ast = m(
        s("MSH", f(c()), f()),
        g("PATIENT_GROUP", s("PID", f())),
        s("NK1")
      );
      visit(ast, "segment", (node, ancestors) => {
        if (node.children[0]?.value === "PID") {
          // PID is inside PATIENT_GROUP
          const types = ancestors.map((a) => a.type);
          expect(types).toEqual(["root", "group"]);

          // Check parent is group
          const parent = ancestors.at(-1) as Group;
          expect(parent.type).toBe("group");
          expect(parent.name).toBe("PATIENT_GROUP");
        }
      });
    });

    it("should correctly track depth in nested structure", () => {
      const ast = m(
        s("MSH", f(c()), f()),
        g("PATIENT_GROUP", s("PID", f())),
        s("NK1")
      );
      const depths: number[] = [];
      visit(ast, (_node, _ancestors, info) => {
        depths.push(info.depth);
      });
      // Should start at 1 and increment as we go deeper
      expect(depths[0]).toBe(1); // root
      expect(Math.max(...depths)).toBeGreaterThanOrEqual(5); // deepest is subcomponent
    });
  });

  describe("Starting from non-root nodes", () => {
    it("should work when starting from segment", () => {
      const segment = s("PID", f(c("value1")), f(c("value2")));
      const visitedTypes: string[] = [];
      visit(segment, (node) => {
        visitedTypes.push(node.type);
      });

      expect(visitedTypes).toEqual([
        "segment",
        "segment-header",
        "field",
        "field-repetition",
        "component",
        "subcomponent",
        "field",
        "field-repetition",
        "component",
        "subcomponent",
      ]);
    });

    it("should work when starting from field", () => {
      const field = f(c("comp1"), c("comp2"));
      const visitedTypes: string[] = [];
      visit(field, (node) => {
        visitedTypes.push(node.type);
      });

      expect(visitedTypes).toEqual([
        "field",
        "field-repetition",
        "component",
        "subcomponent",
        "component",
        "subcomponent",
      ]);
    });

    it("should have correct depth when starting from non-root", () => {
      const field = f(c("value"));
      visit(field, "component", (_node, ancestors, info) => {
        expect(ancestors).toHaveLength(2); // field > field-repetition
        expect(info.depth).toBe(3); // field=1, field-repetition=2, component=3
        expect(info.index).toBe(0);
        expect(info.sequence).toBe(1);
      });
    });
  });

  describe("Metadata availability", () => {
    it("should not have metadata when not applicable", () => {
      const field = f(c("value"));
      visit(field, "field", (_node, _ancestors, info) => {
        expect(info.metadata).toBeUndefined();
      });
    });
  });

  describe("Index and sequence tracking for siblings", () => {
    it("should correctly track field indices (0-based) and sequences (1-based)", () => {
      const segment = s("PID", f(c("field1")), f(c("field2")), f(c("field3")));
      const indices: number[] = [];
      const sequences: number[] = [];
      visit(segment, "field", (_node, _ancestors, info) => {
        indices.push(info.index);
        sequences.push(info.sequence);
      });
      // index is 0-based array position
      expect(indices).toEqual([0, 1, 2]);
      // sequence: segment-header=0, fields get 1, 2, 3
      expect(sequences).toEqual([1, 2, 3]);
    });

    it("should correctly track component indices and sequences", () => {
      const field = f(c("comp1"), c("comp2"), c("comp3"));
      const indices: number[] = [];
      const sequences: number[] = [];
      visit(field, "component", (_node, _ancestors, info) => {
        indices.push(info.index);
        sequences.push(info.sequence);
      });
      expect(indices).toEqual([0, 1, 2]);
      expect(sequences).toEqual([1, 2, 3]);
    });

    it("should give segment-header sequence=0", () => {
      const segment = s("PID", f(c("field1")));
      visit(segment, "segment-header", (_node, _ancestors, info) => {
        expect(info.index).toBe(0);
        expect(info.sequence).toBe(0); // Header gets sequence 0
      });
    });
  });

  describe("Edge cases", () => {
    it("should handle empty children arrays gracefully", () => {
      const segment = s("NK1"); // Segment with only header, no fields
      const visitedTypes: string[] = [];
      visit(segment, (node) => {
        visitedTypes.push(node.type);
      });

      expect(visitedTypes).toEqual(["segment", "segment-header"]);
    });

    it("should handle nodes without children property", () => {
      const subcomponent = { type: "subcomponent", value: "test" } as const;
      const visitedTypes: string[] = [];
      visit(subcomponent, (node) => {
        visitedTypes.push(node.type);
      });

      expect(visitedTypes).toEqual(["subcomponent"]);
    });

    it("should handle deeply nested structures", () => {
      const ast = m(g("GROUP1", g("GROUP2", s("PID", f(c("value"))))));

      let maxDepth = 0;
      visit(ast, (_node, _ancestors, info) => {
        if (info.depth > maxDepth) {
          maxDepth = info.depth;
        }
      });

      // Should track depth correctly even in deeply nested structure
      expect(maxDepth).toBeGreaterThanOrEqual(6);
    });

    it("should handle test object with explicit undefined value", () => {
      const ast = m(s("MSH", f(c())), g("PATIENT_GROUP", s("PID", f())));
      const visitedTypes: string[] = [];

      // Match nodes that don't have a specific property
      visit(ast, { name: undefined } as Partial<Segment>, (node) => {
        visitedTypes.push(node.type);
      });

      // Should match segments (which don't have name property)
      expect(visitedTypes).toContain("segment");
    });

    it("should handle empty root message", () => {
      const ast = m(); // Empty message
      const visitedTypes: string[] = [];
      visit(ast, (node) => {
        visitedTypes.push(node.type);
      });

      expect(visitedTypes).toEqual(["root"]);
    });

    it("should handle multiple skip operations in same tree", () => {
      const ast = m(
        s("MSH", f(c()), f(c())),
        s("PID", f(c()), f(c())),
        s("NK1", f(c()), f(c()))
      );
      const visitedHeaders: string[] = [];

      visit(ast, (node) => {
        if (node.type === "segment") {
          const header = node.children[0]?.value;
          visitedHeaders.push(header || "");

          // Skip MSH and NK1 children
          if (header === "MSH" || header === "NK1") {
            return SKIP;
          }
        }
      });

      // Should visit all segment headers but only PID children
      expect(visitedHeaders).toEqual(["MSH", "PID", "NK1"]);
    });

    // Note: unist-util-visit-parents does not handle sparse children arrays.
    // The old custom implementation handled them, but we now delegate to the library.
    // This is considered acceptable as sparse arrays are unusual in well-formed ASTs.
  });

  describe("API Design: Test vs Visitor disambiguation", () => {
    it("should treat 2-arg function as visitor, not test", () => {
      const ast = m(s("MSH", f(c())), s("PID", f(c())));
      const visitedTypes: string[] = [];

      // Function as 2nd arg is always treated as Visitor
      visit(ast, (node) => {
        visitedTypes.push(node.type);
      });

      // Should visit ALL nodes (not filtering)
      expect(visitedTypes).toContain("root");
      expect(visitedTypes).toContain("segment");
      expect(visitedTypes).toContain("field");
    });

    it("should require explicit 3-arg form for test functions", () => {
      const ast = m(s("MSH", f(c())), s("PID", f(c())));
      const visitedTypes: string[] = [];

      // Correct way: explicit 3-arg form with test function
      visit(
        ast,
        (node) => node.type === "segment",
        (node) => {
          visitedTypes.push(node.type);
        }
      );

      // Should only visit segments (filtering applied)
      expect(visitedTypes).toEqual(["segment", "segment"]);
      expect(visitedTypes).not.toContain("root");
      expect(visitedTypes).not.toContain("field");
    });
  });

  describe("Security: Prototype pollution protection", () => {
    it("should ignore __proto__ in test object", () => {
      const ast = m(s("MSH", f(c()), f()));
      const visitedNodes: string[] = [];

      visit(
        ast,
        { __proto__: "malicious", type: "segment" } as Partial<Segment>,
        (node) => {
          visitedNodes.push(node.type);
        }
      );

      // Should match segments normally, ignoring __proto__
      expect(visitedNodes).toEqual(["segment"]);
    });

    it("should ignore constructor in test object", () => {
      const ast = m(s("MSH", f(c()), f()));
      const visitedNodes: string[] = [];

      visit(
        ast,
        {
          constructor: "malicious",
          type: "field",
        } as unknown as Partial<Segment>,
        (node) => {
          visitedNodes.push(node.type);
        }
      );

      // Should match fields normally, ignoring constructor
      expect(visitedNodes).toEqual(["field", "field"]);
    });

    it("should ignore prototype in test object", () => {
      const ast = m(s("MSH", f(c()), f()));
      const visitedNodes: string[] = [];

      visit(
        ast,
        {
          prototype: "malicious",
          type: "component",
        } as unknown as Partial<Segment>,
        (node) => {
          visitedNodes.push(node.type);
        }
      );

      // Should match components normally, ignoring prototype
      expect(visitedNodes).toEqual(["component", "component"]);
    });
  });
});
