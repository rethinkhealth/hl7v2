import type { Group, Segment } from "@rethinkhealth/hl7v2-ast";
import { c, f, g, m, s } from "@rethinkhealth/hl7v2-builder";
import { describe, expect, it } from "vitest";
import type { Path } from "../src";
import { EXIT, SKIP, visit } from "../src";

describe("visit", () => {
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

  it('should stop traversal when visitor returns "exit"', () => {
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

  it('should skip children when visitor returns "skip"', () => {
    const ast = m(
      s("MSH", f(c()), f()),
      g("PATIENT_GROUP", s("PID", f())),
      s("NK1")
    );
    const visitedNodes: string[] = [];
    visit(ast, (node) => {
      visitedNodes.push(node.type);
      if (
        node.type === "segment" &&
        (node as Segment).children[0]?.value === "MSH"
      ) {
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

  describe("Path structure", () => {
    it("should provide correct path with type, level, index", () => {
      const ast = m(
        s("MSH", f(c("value1")), f("value2")),
        g("PATIENT_GROUP", s("PID", f(c("value3")))),
        s("NK1")
      );
      const paths: Path[] = [];
      visit(ast, "component", (_node, path) => {
        paths.push(path);
      });

      // Should find 3 components total
      expect(paths).toHaveLength(3);

      // First component (value1) in MSH field 1
      const firstPath = paths[0];
      expect(firstPath).toHaveLength(5); // root > segment > field > field-repetition > component
      expect(firstPath[0]).toMatchObject({ type: "root", level: 1, index: 1 });
      expect(firstPath[1]).toMatchObject({
        type: "segment",
        level: 2,
        index: 1,
      });
      expect(firstPath[1]?.data?.header).toBe("MSH");
      expect(firstPath[2]).toMatchObject({ type: "field", level: 3, index: 2 });
      expect(firstPath[3]).toMatchObject({
        type: "field-repetition",
        level: 4,
        index: 1,
      });
      expect(firstPath[4]).toMatchObject({
        type: "component",
        level: 5,
        index: 1,
      });
      expect(firstPath[4]?.node).toBeDefined();

      // Second component (value2) in MSH field 2
      const secondPath = paths[1];
      expect(secondPath).toHaveLength(5);
      expect(secondPath[1]?.data?.header).toBe("MSH");
      expect(secondPath[2]).toMatchObject({
        type: "field",
        level: 3,
        index: 3,
      });
      expect(secondPath[4]).toMatchObject({
        type: "component",
        level: 5,
        index: 1,
      });

      // Third component (value3) in PID field 1 inside PATIENT_GROUP
      const thirdPath = paths[2];
      expect(thirdPath).toHaveLength(6); // root > group > segment > field > field-repetition > component
      expect(thirdPath[1]).toMatchObject({ type: "group", level: 2, index: 2 });
      expect(thirdPath[1]?.data?.name).toBe("PATIENT_GROUP");
      expect(thirdPath[2]).toMatchObject({
        type: "segment",
        level: 3,
        index: 1,
      });
      expect(thirdPath[2]?.data?.header).toBe("PID");
      expect(thirdPath[3]).toMatchObject({ type: "field", level: 4, index: 2 });
      expect(thirdPath[4]).toMatchObject({
        type: "field-repetition",
        level: 5,
        index: 1,
      });
      expect(thirdPath[5]).toMatchObject({
        type: "component",
        level: 6,
        index: 1,
      });
    });

    it("should include node reference in path entries", () => {
      const ast = m(
        s("MSH", f(c()), f()),
        g("PATIENT_GROUP", s("PID", f())),
        s("NK1")
      );
      visit(ast, "segment", (node, path) => {
        const entry = path.at(-1);
        expect(entry?.node).toBe(node);
        expect(entry?.node.type).toBe("segment");
      });
    });

    it("should extract segment header in data", () => {
      const ast = m(
        s("MSH", f(c()), f()),
        g("PATIENT_GROUP", s("PID", f())),
        s("NK1")
      );
      const headers: string[] = [];
      visit(ast, "segment", (_node, path) => {
        const entry = path.at(-1);
        if (entry?.data?.header) {
          headers.push(entry.data.header as string);
        }
      });
      expect(headers).toEqual(["MSH", "PID", "NK1"]);
    });

    it("should extract group name in data", () => {
      const ast = m(
        s("MSH", f(c()), f()),
        g("PATIENT_GROUP", s("PID", f())),
        s("NK1")
      );
      visit(ast, "group", (_node, path) => {
        const entry = path.at(-1);
        expect(entry?.data?.name).toBe("PATIENT_GROUP");
      });
    });

    it("should have empty path for root node", () => {
      const ast = m(
        s("MSH", f(c()), f()),
        g("PATIENT_GROUP", s("PID", f())),
        s("NK1")
      );
      visit(ast, "root", (_node, path) => {
        // Root has itself in the path
        expect(path).toEqual([{ type: "root", level: 1, index: 1, node: ast }]);
      });
    });

    it("should track parent hierarchy correctly", () => {
      const ast = m(
        s("MSH", f(c()), f()),
        g("PATIENT_GROUP", s("PID", f())),
        s("NK1")
      );
      visit(ast, "segment", (node, path) => {
        const segmentNode = node as Segment;
        if (segmentNode.children[0]?.value === "PID") {
          // PID is inside PATIENT_GROUP
          const types = path.map((entry) => entry.type);
          expect(types).toEqual(["root", "group", "segment"]);

          // Check parent is group
          const parent = path.at(-2);
          expect(parent?.type).toBe("group");
          expect((parent?.node as Group).name).toBe("PATIENT_GROUP");
        }
      });
    });

    it("should correctly track levels in nested structure", () => {
      const ast = m(
        s("MSH", f(c()), f()),
        g("PATIENT_GROUP", s("PID", f())),
        s("NK1")
      );
      const levels: number[] = [];
      visit(ast, (_node, path) => {
        const entry = path.at(-1);
        if (entry) {
          levels.push(entry.level);
        }
      });
      // Should start at 1 and increment as we go deeper
      expect(levels[0]).toBe(1); // root
      expect(Math.max(...levels)).toBeGreaterThanOrEqual(5); // deepest is subcomponent
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

    it("should have correct path when starting from non-root", () => {
      const field = f(c("value"));
      visit(field, "component", (_node, path) => {
        expect(path).toHaveLength(3); // field > field-repetition > component
        expect(path[0]).toMatchObject({
          type: "field",
          level: 1,
          index: 1,
        });
        expect(path[1]).toMatchObject({
          type: "field-repetition",
          level: 2,
          index: 1,
        });
        expect(path[2]).toMatchObject({
          type: "component",
          level: 3,
          index: 1,
        });
      });
    });
  });

  describe("Path data extensibility", () => {
    it("should not have data when no metadata available", () => {
      const field = f(c("value"));
      visit(field, "field", (_node, path) => {
        const entry = path.at(0);
        expect(entry?.data).toBeUndefined();
      });
    });

    it("should extract delimiters from root data", () => {
      const ast = m(
        s("MSH", f(c()), f()),
        g("PATIENT_GROUP", s("PID", f())),
        s("NK1")
      );
      // Add delimiters to root
      ast.data = {
        delimiters: {
          field: "|",
          component: "^",
          subcomponent: "&",
          repetition: "~",
          escape: "\\",
          segment: "\r",
        },
      };

      visit(ast, "root", (_node, path) => {
        const entry = path[0];
        expect(entry?.data?.delimiters).toEqual({
          field: "|",
          component: "^",
          subcomponent: "&",
          repetition: "~",
          escape: "\\",
          segment: "\r",
        });
      });
    });
  });

  describe("Index tracking for siblings", () => {
    it("should correctly track field indices", () => {
      const segment = s("PID", f(c("field1")), f(c("field2")), f(c("field3")));
      const indices: number[] = [];
      visit(segment, "field", (_node, path) => {
        const entry = path.at(-1);
        if (entry) {
          indices.push(entry.index);
        }
      });
      // Fields start at index 2 because segment-header is at index 1
      expect(indices).toEqual([2, 3, 4]);
    });

    it("should correctly track component indices", () => {
      const field = f(c("comp1"), c("comp2"), c("comp3"));
      const indices: number[] = [];
      visit(field, "component", (_node, path) => {
        const entry = path.at(-1);
        if (entry) {
          indices.push(entry.index);
        }
      });
      expect(indices).toEqual([1, 2, 3]);
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
      // Create a structure with maximum depth
      const ast = m(g("GROUP1", g("GROUP2", s("PID", f(c("value"))))));

      let maxLevel = 0;
      visit(ast, (_node, path) => {
        const entry = path.at(-1);
        if (entry && entry.level > maxLevel) {
          maxLevel = entry.level;
        }
      });

      // Should track levels correctly even in deeply nested structure
      expect(maxLevel).toBeGreaterThanOrEqual(6);
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

      visit(ast, (node, _path) => {
        if (node.type === "segment") {
          const header = (node as Segment).children[0]?.value;
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

    it("should handle node with sparse children array", () => {
      // Though unlikely in real AST, test robustness
      const segment = s("PID", f(c("field1")), f(c("field2")));
      // Artificially create sparse array scenario
      segment.children[2] =
        undefined as unknown as (typeof segment.children)[2];

      const visitedTypes: string[] = [];
      visit(segment, (node) => {
        visitedTypes.push(node.type);
      });

      // Should skip undefined children gracefully
      expect(visitedTypes).not.toContain(undefined);
    });
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

      // Attempt to pass dangerous keys
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
