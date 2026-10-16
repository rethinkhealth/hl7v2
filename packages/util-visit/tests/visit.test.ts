import type { Group, Nodes, Segment } from "@glion/ast";
import { c, f, g, m, s } from "@glion/builder";

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

    expect(visitedNodes).toStrictEqual([
      "root",
      "segment",
      "field",
      "field-repetition",
      "component",
      "field",
      "group",
      "segment",
      "field",
      "segment",
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
    expect(visitedSegments).toStrictEqual(["segment", "segment", "segment"]);
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
    expect(visitedNodes).toStrictEqual(["PATIENT_GROUP"]);
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
    expect(visitedFields).toStrictEqual(["field", "field", "field"]);
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
      // oxlint-disable-next-line jest/no-conditional-in-test
      if (node.type === "group") {
        return EXIT;
      }
    });
    expect(visitedNodes).toStrictEqual([
      "root",
      "segment",
      "field",
      "field-repetition",
      "component",
      "field",
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
      if (node.type === "segment" && node.name === "MSH") {
        return SKIP;
      }
    });
    expect(visitedNodes).toStrictEqual([
      "root",
      "segment", // MSH is visited
      // MSH children are skipped
      "group",
      "segment",
      "field",
      "segment",
    ]);
  });

  describe("ancestors", () => {
    it("gives each node its ancestors from the root to its parent", () => {
      const ast = m(
        s("MSH", f(c("value1")), f("value2")),
        g("PATIENT_GROUP", s("PID", f(c("value3")))),
        s("NK1")
      );
      const chains: string[][] = [];
      visit(ast, "component", (_node, ancestors) => {
        chains.push(ancestors.map((ancestor) => ancestor.type));
      });

      expect(chains).toStrictEqual([
        ["root", "segment", "field", "field-repetition"],
        ["root", "segment", "field", "field-repetition"],
        ["root", "group", "segment", "field", "field-repetition"],
      ]);
    });

    it("should have empty ancestors for root node", () => {
      const ast = m(s("MSH", f(c()), f()));
      let visited = false;
      visit(ast, "root", (_node, ancestors) => {
        expect(ancestors).toStrictEqual([]);
        visited = true;
      });
      expect(visited).toBeTruthy();
    });

    it("should track parent hierarchy correctly via ancestors", () => {
      const ast = m(
        s("MSH", f(c()), f()),
        g("PATIENT_GROUP", s("PID", f())),
        s("NK1")
      );
      visit(ast, "segment", (node, ancestors) => {
        if (node.name === "PID") {
          // PID is inside PATIENT_GROUP
          const types = ancestors.map((a) => a.type);
          expect(types).toStrictEqual(["root", "group"]);

          // Check parent is group
          const parent = ancestors.at(-1) as Group;
          expect(parent.type).toBe("group");
          expect(parent.name).toBe("PATIENT_GROUP");
        }
      });
    });
  });

  describe("a type test", () => {
    // Each tree here breaks the HL7v2 hierarchy on purpose: the node out of
    // place is visited only when the walk enters its parent.
    const names = (tree: Nodes, type: string) => {
      const visited: string[] = [];
      visit(tree, type as Nodes["type"], (node) => {
        const { name } = node as { name?: string };
        visited.push(name ?? node.type);
      });
      return visited;
    };

    it("does not enter a segment to look for segments", () => {
      const pid = s("PID", f("a"));
      (pid.children as Nodes[]).push(s("ZPI"));

      expect(names(m(pid), "segment")).toStrictEqual(["PID"]);
    });

    it("enters a segment for a test function that matches segments", () => {
      const pid = s("PID", f("a"));
      (pid.children as Nodes[]).push(s("ZPI"));
      const visited: string[] = [];
      visit(
        m(pid),
        (node) => node.type === "segment",
        (node) => {
          visited.push((node as Segment).name);
        }
      );

      expect(visited).toStrictEqual(["PID", "ZPI"]);
    });

    it("does not enter a field to look for fields", () => {
      const field = f("a");
      (field.children as Nodes[]).push(f("inner"));
      const visited: Nodes[] = [];
      visit(m(s("PID", field)), "field", (node) => {
        visited.push(node);
      });

      expect(visited).toStrictEqual([field]);
    });

    it("finds a group in a group", () => {
      const inner = g("INNER", s("PID"));
      const outer = g("OUTER", inner);

      expect(names(m(outer), "group")).toStrictEqual(["OUTER", "INNER"]);
    });

    it("finds segments in groups", () => {
      expect(
        names(
          m(s("MSH"), g("PATIENT", s("PID"), g("VISIT", s("PV1")))),
          "segment"
        )
      ).toStrictEqual(["MSH", "PID", "PV1"]);
    });

    it("enters a node of a type @glion/ast does not define", () => {
      const custom = {
        children: [s("ZPI")],
        type: "custom",
      } as unknown as Nodes;

      expect(names(m(custom as Segment), "segment")).toStrictEqual(["ZPI"]);
    });

    it("enters every node to look for a type @glion/ast does not define", () => {
      const custom = { type: "custom" } as unknown as Nodes;
      const field = f("a");
      (field.children as Nodes[]).push(custom);

      expect(names(m(s("PID", field)), "custom")).toStrictEqual(["custom"]);
    });
  });

  describe("starting from non-root nodes", () => {
    it("should work when starting from segment", () => {
      const segment = s("PID", f(c("value1")), f(c("value2")));
      const visitedTypes: string[] = [];
      visit(segment, (node) => {
        visitedTypes.push(node.type);
      });

      expect(visitedTypes).toStrictEqual([
        "segment",
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

      expect(visitedTypes).toStrictEqual([
        "field",
        "field-repetition",
        "component",
        "subcomponent",
        "component",
        "subcomponent",
      ]);
    });

    it("gives ancestors from the node the visit starts at", () => {
      const field = f(c("value"));
      const chains: string[][] = [];
      visit(field, "component", (_node, ancestors) => {
        chains.push(ancestors.map((ancestor) => ancestor.type));
      });
      expect(chains).toStrictEqual([["field", "field-repetition"]]);
    });
  });

  describe("a visitor that changes its parent's children", () => {
    it("continues at the index it returns, after removing the current node", () => {
      const segment = s("PID", f("a"), f("b"), f("c"), f("d"));
      const last = segment.children.at(-1);
      visit(segment, "field", (node, ancestors) => {
        if (node === last) {
          return;
        }
        const parent = ancestors.at(-1) as Segment;
        const index = parent.children.indexOf(node);
        parent.children.splice(index, 1);
        return index;
      });
      expect(segment.children).toStrictEqual([last]);
    });

    it("visits a sibling inserted after the current node", () => {
      const segment = s("PID", f("a"), f("b"));
      const [first, second] = segment.children;
      const inserted = f("inserted");
      const visited: Nodes[] = [];
      visit(segment, "field", (node, ancestors) => {
        visited.push(node);
        if (node === first) {
          (ancestors.at(-1) as Segment).children.splice(1, 0, inserted);
        }
      });
      expect(visited).toStrictEqual([first, inserted, second]);
    });

    it("visits a child its parent's visitor prepends", () => {
      const segment = s("PID", f("a"), f("b"));
      const [first, second] = segment.children;
      const prepended = f("prepended");
      const visited: Nodes[] = [];
      visit(segment, (node) => {
        if (node === segment) {
          segment.children.unshift(prepended);
          return;
        }
        if (node.type === "field") {
          visited.push(node);
        }
      });
      expect(visited).toStrictEqual([prepended, first, second]);
    });
  });

  describe("edge cases", () => {
    it("should handle empty children arrays gracefully", () => {
      const segment = s("NK1"); // Segment with no fields
      const visitedTypes: string[] = [];
      visit(segment, (node) => {
        visitedTypes.push(node.type);
      });

      expect(visitedTypes).toStrictEqual(["segment"]);
    });

    it("should handle nodes without children property", () => {
      const subcomponent = { type: "subcomponent", value: "test" } as const;
      const visitedTypes: string[] = [];
      visit(subcomponent, (node) => {
        visitedTypes.push(node.type);
      });

      expect(visitedTypes).toStrictEqual(["subcomponent"]);
    });

    it("should handle deeply nested structures", () => {
      const ast = m(g("GROUP1", g("GROUP2", s("PID", f(c("value"))))));

      let deepest: string[] = [];
      visit(ast, "subcomponent", (_node, ancestors) => {
        deepest = ancestors.map((ancestor) => ancestor.type);
      });

      expect(deepest).toStrictEqual([
        "root",
        "group",
        "group",
        "segment",
        "field",
        "field-repetition",
        "component",
      ]);
    });

    it("should handle test object with explicit undefined value", () => {
      const ast = m(s("MSH", f(c())), g("PATIENT_GROUP", s("PID", f())));
      const visitedTypes: string[] = [];

      // Match nodes that don't have a specific property
      visit(ast, { name: undefined } as Partial<Segment>, (node) => {
        visitedTypes.push(node.type);
      });

      // Should match nodes that don't have a name property (e.g., root, field)
      expect(visitedTypes).toContain("root");
    });

    it("should handle empty root message", () => {
      const ast = m(); // Empty message
      const visitedTypes: string[] = [];
      visit(ast, (node) => {
        visitedTypes.push(node.type);
      });

      expect(visitedTypes).toStrictEqual(["root"]);
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
          visitedHeaders.push(node.name || "");

          // Skip MSH and NK1 children
          if (node.name === "MSH" || node.name === "NK1") {
            return SKIP;
          }
        }
      });

      // Should visit all segment headers but only PID children
      expect(visitedHeaders).toStrictEqual(["MSH", "PID", "NK1"]);
    });

    // Note: unist-util-visit-parents does not handle sparse children arrays.
    // The old custom implementation handled them, but we now delegate to the library.
    // This is considered acceptable as sparse arrays are unusual in well-formed ASTs.
  });

  describe("aPI Design: Test vs Visitor disambiguation", () => {
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
      expect(visitedTypes).toStrictEqual(["segment", "segment"]);
      expect(visitedTypes).not.toContain("root");
      expect(visitedTypes).not.toContain("field");
    });
  });

  describe("test objects match own properties only", () => {
    it("matches no node when a test key names an inherited property", () => {
      const ast = m(s("MSH", f(c()), f()));
      const visitedNodes: string[] = [];

      visit(
        ast,
        { toString: "x", type: "field" } as unknown as Partial<Segment>,
        (node) => {
          visitedNodes.push(node.type);
        }
      );

      expect(visitedNodes).toStrictEqual([]);
    });

    it("matches no node for an own __proto__ key, as JSON.parse creates", () => {
      const ast = m(s("MSH", f(c()), f()));
      const visitedNodes: string[] = [];

      visit(
        ast,
        JSON.parse(
          '{"__proto__":"malicious","type":"segment"}'
        ) as Partial<Segment>,
        (node) => {
          visitedNodes.push(node.type);
        }
      );

      expect(visitedNodes).toStrictEqual([]);
    });

    it("matches no node for a constructor key", () => {
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

      expect(visitedNodes).toStrictEqual([]);
    });

    it("matches no node for a prototype key", () => {
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

      expect(visitedNodes).toStrictEqual([]);
    });

    it("reads the test object when the test is created", () => {
      const ast = m(s("MSH", f()), s("PID", f()));
      const test: Partial<Segment> = { name: "MSH" };
      const visitedNames: string[] = [];

      visit(ast, test, (node) => {
        visitedNames.push((node as Segment).name);
        test.name = "PID";
      });

      expect(visitedNames).toStrictEqual(["MSH"]);
    });
  });
});
