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

      // First component is in MSH field 1
      expect(paths).toMatchSnapshot();
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
});
