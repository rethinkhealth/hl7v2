import type { Segment } from "@rethinkhealth/hl7v2-ast";

import { c, f, m, r, s } from "../src";

describe("builder", () => {
  describe("root", () => {
    it("should build a simple root", () => {
      const root = m();
      expect(root).toStrictEqual({
        children: [],
        type: "root",
      });
    });

    it("should build a root with a single segment", () => {
      const root = m(s("MSH", f("another value")));
      expect(root).toStrictEqual({
        children: [
          {
            type: "segment",
            children: [
              { type: "segment-header", value: "MSH" },
              {
                type: "field",
                children: [
                  {
                    type: "field-repetition",
                    children: [
                      {
                        type: "component",
                        children: [
                          { type: "subcomponent", value: "another value" },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        type: "root",
      });
    });

    it("should build a root with a multiple segments", () => {
      const root = m(s("MSH", f("another value")), s("PID", f("12345")));
      expect(root).toStrictEqual({
        children: [
          {
            type: "segment",
            children: [
              { type: "segment-header", value: "MSH" },
              {
                type: "field",
                children: [
                  {
                    type: "field-repetition",
                    children: [
                      {
                        type: "component",
                        children: [
                          { type: "subcomponent", value: "another value" },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "segment",
            children: [
              { type: "segment-header", value: "PID" },
              {
                type: "field",
                children: [
                  {
                    type: "field-repetition",
                    children: [
                      {
                        type: "component",
                        children: [{ type: "subcomponent", value: "12345" }],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        type: "root",
      });
    });
  });

  describe("segment", () => {
    it("should build a segment with a single-value field", () => {
      const segment = s("MSH", f("another value"));

      expect(segment).toStrictEqual({
        children: [
          { type: "segment-header", value: "MSH" },
          {
            type: "field",
            children: [
              {
                type: "field-repetition",
                children: [
                  {
                    type: "component",
                    children: [
                      { type: "subcomponent", value: "another value" },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        type: "segment",
      });
    });

    it("should build a segment with an array of fields", () => {
      const segment = s("MSH", f("another value"), f("another value 2"));
      expect(segment).toStrictEqual({
        children: [
          { type: "segment-header", value: "MSH" },
          {
            type: "field",
            children: [
              {
                type: "field-repetition",
                children: [
                  {
                    type: "component",
                    children: [
                      { type: "subcomponent", value: "another value" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "field",
            children: [
              {
                type: "field-repetition",
                children: [
                  {
                    type: "component",
                    children: [
                      { type: "subcomponent", value: "another value 2" },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        type: "segment",
      });
    });
  });

  describe("field", () => {
    it("should build an empty field", () => {
      const field = f();
      expect(field).toStrictEqual({
        children: [
          {
            type: "field-repetition",
            children: [
              {
                type: "component",
                children: [{ type: "subcomponent", value: "" }],
              },
            ],
          },
        ],
        type: "field",
      });
    });

    it("should build a single value field", () => {
      const field = f("hello world");
      expect(field).toStrictEqual({
        children: [
          {
            type: "field-repetition",
            children: [
              {
                type: "component",
                children: [{ type: "subcomponent", value: "hello world" }],
              },
            ],
          },
        ],
        type: "field",
      });
    });

    it("should build a field with a single component", () => {
      const field = f(c("hello world!"));
      expect(field).toStrictEqual({
        children: [
          {
            type: "field-repetition",
            children: [
              {
                type: "component",
                children: [{ type: "subcomponent", value: "hello world!" }],
              },
            ],
          },
        ],
        type: "field",
      });
    });

    it("should build a field with an array of components", () => {
      const field = f([c("A"), c("B"), c("C")]);

      expect(field).toStrictEqual({
        children: [
          {
            type: "field-repetition",
            children: [
              {
                type: "component",
                children: [{ type: "subcomponent", value: "A" }],
              },
              {
                type: "component",
                children: [{ type: "subcomponent", value: "B" }],
              },
              {
                type: "component",
                children: [{ type: "subcomponent", value: "C" }],
              },
            ],
          },
        ],
        type: "field",
      });
    });

    it("should build a field with an array of repeated components (field repetition)", () => {
      // Given
      const field = f([
        r([c("A"), c(["B.1", "B.2"])]),
        r([c("C")]),
        r([c("D")]),
      ]);

      // Then
      expect(field).toStrictEqual({
        children: [
          {
            type: "field-repetition",
            children: [
              {
                type: "component",
                children: [{ type: "subcomponent", value: "A" }],
              },
              {
                type: "component",
                children: [
                  { type: "subcomponent", value: "B.1" },
                  { type: "subcomponent", value: "B.2" },
                ],
              },
            ],
          },
          {
            type: "field-repetition",
            children: [
              {
                type: "component",
                children: [{ type: "subcomponent", value: "C" }],
              },
            ],
          },
          {
            type: "field-repetition",
            children: [
              {
                type: "component",
                children: [{ type: "subcomponent", value: "D" }],
              },
            ],
          },
        ],
        type: "field",
      });
    });

    it("should build the same results using a single repetition or component(s)", () => {
      const fieldWithRepetition = f(r(c("A"), c(["B.1", "B.2"])));

      const fieldWithComponents = f(c("A"), c(["B.1", "B.2"]));

      expect(fieldWithRepetition).toStrictEqual(fieldWithComponents);
    });
  });

  describe("component", () => {
    it("should build an empty component", () => {
      const component = c();
      expect(component).toStrictEqual({
        children: [{ type: "subcomponent", value: "" }],
        type: "component",
      });
    });

    it("should build a component with a single value", () => {
      const component = c("hello world!");
      expect(component).toStrictEqual({
        children: [{ type: "subcomponent", value: "hello world!" }],
        type: "component",
      });
    });

    it("should build a component with an array of values", () => {
      const component = c(["hello world!", "hello world 2!"]);
      expect(component).toStrictEqual({
        children: [
          { type: "subcomponent", value: "hello world!" },
          { type: "subcomponent", value: "hello world 2!" },
        ],
        type: "component",
      });
    });
  });

  describe("complex scenarios", () => {
    it("should build a segment with an array of fields, each with an array of components", () => {
      const message = m(
        // MSH Segment
        s(
          "MSH",
          f(),
          f(),
          f("1234"),
          f([c(["A", "A.2", "A.3"]), c("B"), c("C")])
        ),
        // PID Segment
        s("PID", f("12345"), f([c("DOE"), c("JOHN")]))
      );

      expect(message).toMatchSnapshot();
    });
  });

  describe("emptyMode experimental feature", () => {
    beforeEach(() => {
      // Clear module cache to ensure fresh imports
      vi.resetModules();
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    describe("legacy mode (default)", () => {
      beforeEach(() => {
        // Mock loadConfig to return legacy mode
        vi.doMock<typeof import("@rethinkhealth/hl7v2-config")>(
          "@rethinkhealth/hl7v2-config",
          () => ({
            loadConfig: () => ({
              settings: {
                experimental: {
                  emptyMode: "legacy",
                },
              },
            }),
          })
        );
      });

      it("should create empty field with full structure in legacy mode", async () => {
        // biome-ignore lint/nursery/noShadow: dynamic import intentionally shadows top-level for mocking
        const { f } = await import("../src");
        const field = f();
        expect(field).toStrictEqual({
          children: [
            {
              type: "field-repetition",
              children: [
                {
                  type: "component",
                  children: [{ type: "subcomponent", value: "" }],
                },
              ],
            },
          ],
          type: "field",
        });
      });

      it("should create empty repetition with full structure in legacy mode", async () => {
        // biome-ignore lint/nursery/noShadow: dynamic import intentionally shadows top-level for mocking
        const { r } = await import("../src");
        const rep = r();
        expect(rep).toStrictEqual({
          children: [
            {
              type: "component",
              children: [{ type: "subcomponent", value: "" }],
            },
          ],
          type: "field-repetition",
        });
      });

      it("should create empty component with full structure in legacy mode", async () => {
        // biome-ignore lint/nursery/noShadow: dynamic import intentionally shadows top-level for mocking
        const { c } = await import("../src");
        const comp = c();
        expect(comp).toStrictEqual({
          children: [{ type: "subcomponent", value: "" }],
          type: "component",
        });
      });

      it("should handle non-empty fields normally in legacy mode", async () => {
        // biome-ignore lint/nursery/noShadow: dynamic import intentionally shadows top-level for mocking
        const { f } = await import("../src");
        const field = f("hello");

        expect(field).toStrictEqual({
          children: [
            {
              type: "field-repetition",
              children: [
                {
                  type: "component",
                  children: [{ type: "subcomponent", value: "hello" }],
                },
              ],
            },
          ],
          type: "field",
        });
      });

      it("should build segment with empty fields in legacy mode", async () => {
        // biome-ignore lint/nursery/noShadow: dynamic import intentionally shadows top-level for mocking
        const { s, f } = await import("../src");
        const segment = s("PID", f("1"), f(), f());

        expect(segment.children).toHaveLength(4); // header + 3 fields
        expect(segment.children[2]).toStrictEqual({
          children: [
            {
              type: "field-repetition",
              children: [
                {
                  type: "component",
                  children: [{ type: "subcomponent", value: "" }],
                },
              ],
            },
          ],
          type: "field",
        });
      });

      it("should create empty field with full structure when passed empty array", async () => {
        // biome-ignore lint/nursery/noShadow: dynamic import intentionally shadows top-level for mocking
        const { f } = await import("../src");
        const field = f([]);

        expect(field).toStrictEqual({
          children: [
            {
              type: "field-repetition",
              children: [
                {
                  type: "component",
                  children: [{ type: "subcomponent", value: "" }],
                },
              ],
            },
          ],
          type: "field",
        });
      });

      it("should create empty repetition when passed empty array", async () => {
        // biome-ignore lint/nursery/noShadow: dynamic import intentionally shadows top-level for mocking
        const { r } = await import("../src");
        const rep = r([]);

        expect(rep).toStrictEqual({
          children: [
            {
              type: "component",
              children: [{ type: "subcomponent", value: "" }],
            },
          ],
          type: "field-repetition",
        });
      });

      it("should create empty component when passed empty array", async () => {
        // biome-ignore lint/nursery/noShadow: dynamic import intentionally shadows top-level for mocking
        const { c } = await import("../src");
        const comp = c([]);

        expect(comp).toStrictEqual({
          children: [{ type: "subcomponent", value: "" }],
          type: "component",
        });
      });
    });

    describe("empty mode", () => {
      beforeEach(() => {
        // Mock loadConfig to return empty mode
        vi.doMock<typeof import("@rethinkhealth/hl7v2-config")>(
          "@rethinkhealth/hl7v2-config",
          () => ({
            loadConfig: () => ({
              settings: {
                experimental: {
                  emptyMode: "empty",
                },
              },
            }),
          })
        );
      });

      it("should create empty field with empty children array in empty mode", async () => {
        // biome-ignore lint/nursery/noShadow: dynamic import intentionally shadows top-level for mocking
        const { f } = await import("../src");
        const field = f();
        expect(field).toStrictEqual({
          children: [],
          type: "field",
        });
      });

      it("should create empty repetition with empty children array in empty mode", async () => {
        // biome-ignore lint/nursery/noShadow: dynamic import intentionally shadows top-level for mocking
        const { r } = await import("../src");
        const rep = r();
        expect(rep).toStrictEqual({
          children: [],
          type: "field-repetition",
        });
      });

      it("should create empty component with empty children array in empty mode", async () => {
        // biome-ignore lint/nursery/noShadow: dynamic import intentionally shadows top-level for mocking
        const { c } = await import("../src");
        const comp = c();
        expect(comp).toStrictEqual({
          children: [],
          type: "component",
        });
      });

      it("should handle non-empty fields normally in empty mode", async () => {
        // biome-ignore lint/nursery/noShadow: dynamic import intentionally shadows top-level for mocking
        const { f } = await import("../src");
        const field = f("hello");

        expect(field).toStrictEqual({
          children: [
            {
              type: "field-repetition",
              children: [
                {
                  type: "component",
                  children: [{ type: "subcomponent", value: "hello" }],
                },
              ],
            },
          ],
          type: "field",
        });
      });

      it("should handle non-empty repetitions normally in empty mode", async () => {
        // biome-ignore lint/nursery/noShadow: dynamic import intentionally shadows top-level for mocking
        const { r } = await import("../src");
        const rep = r("A");

        expect(rep).toStrictEqual({
          children: [
            {
              type: "component",
              children: [{ type: "subcomponent", value: "A" }],
            },
          ],
          type: "field-repetition",
        });
      });

      it("should handle non-empty components normally in empty mode", async () => {
        // biome-ignore lint/nursery/noShadow: dynamic import intentionally shadows top-level for mocking
        const { c } = await import("../src");
        const comp = c("test");

        expect(comp).toStrictEqual({
          children: [{ type: "subcomponent", value: "test" }],
          type: "component",
        });
      });

      it("should build segment with empty fields in empty mode", async () => {
        // biome-ignore lint/nursery/noShadow: dynamic import intentionally shadows top-level for mocking
        const { s, f } = await import("../src");
        const segment = s("PID", f("1"), f(), f());

        expect(segment).toStrictEqual({
          children: [
            { type: "segment-header", value: "PID" },
            {
              type: "field",
              children: [
                {
                  type: "field-repetition",
                  children: [
                    {
                      type: "component",
                      children: [{ type: "subcomponent", value: "1" }],
                    },
                  ],
                },
              ],
            },
            {
              type: "field",
              children: [],
            },
            {
              type: "field",
              children: [],
            },
          ],
          type: "segment",
        });
      });

      it("should build complex message with mixed empty and non-empty fields", async () => {
        // biome-ignore lint/nursery/noShadow: dynamic import intentionally shadows top-level for mocking
        const { m, s, f, c } = await import("../src");
        // Simulating: PID|||ID^^^FAC^MR||
        // PID.1 empty, PID.2 empty, PID.3 has content, PID.4 empty
        const message = m(
          s(
            "PID",
            f(), // PID.1 empty
            f(), // PID.2 empty
            f([
              // PID.3: ID^^^FAC^MR
              c("ID"),
              c(), // empty component
              c(), // empty component
              c("FAC"),
              c("MR"),
            ]),
            f() // PID.4 empty
          )
        );

        const seg = message.children[0] as Segment;
        expect(seg.children).toHaveLength(5); // header + 4 fields

        // PID.1 is empty
        expect(seg.children[1]).toStrictEqual({
          children: [],
          type: "field",
        });

        // PID.2 is empty
        expect(seg.children[2]).toStrictEqual({
          children: [],
          type: "field",
        });

        // PID.3 has complex content with empty components
        expect(seg.children[3]).toStrictEqual({
          children: [
            {
              type: "field-repetition",
              children: [
                {
                  type: "component",
                  children: [{ type: "subcomponent", value: "ID" }],
                },
                {
                  type: "component",
                  children: [],
                },
                {
                  type: "component",
                  children: [],
                },
                {
                  type: "component",
                  children: [{ type: "subcomponent", value: "FAC" }],
                },
                {
                  type: "component",
                  children: [{ type: "subcomponent", value: "MR" }],
                },
              ],
            },
          ],
          type: "field",
        });

        // PID.4 is empty
        expect(seg.children[4]).toStrictEqual({
          children: [],
          type: "field",
        });
      });

      it("should handle empty repetitions in fields", async () => {
        // biome-ignore lint/nursery/noShadow: dynamic import intentionally shadows top-level for mocking
        const { f, r } = await import("../src");
        // Field with two empty repetitions
        const field = f([r(), r()]);

        expect(field).toStrictEqual({
          children: [
            {
              type: "field-repetition",
              children: [],
            },
            {
              type: "field-repetition",
              children: [],
            },
          ],
          type: "field",
        });
      });

      it("should handle mixed empty and non-empty repetitions", async () => {
        // biome-ignore lint/nursery/noShadow: dynamic import intentionally shadows top-level for mocking
        const { f, r } = await import("../src");
        // Field: A~~ (first has content, second and third are empty)
        const field = f([r("A"), r(), r()]);

        expect(field).toStrictEqual({
          children: [
            {
              type: "field-repetition",
              children: [
                {
                  type: "component",
                  children: [{ type: "subcomponent", value: "A" }],
                },
              ],
            },
            {
              type: "field-repetition",
              children: [],
            },
            {
              type: "field-repetition",
              children: [],
            },
          ],
          type: "field",
        });
      });

      it("should create empty field when passed empty array", async () => {
        // biome-ignore lint/nursery/noShadow: dynamic import intentionally shadows top-level for mocking
        const { f } = await import("../src");
        const field = f([]);

        expect(field).toStrictEqual({
          children: [],
          type: "field",
        });
      });

      it("should create empty repetition when passed empty array", async () => {
        // biome-ignore lint/nursery/noShadow: dynamic import intentionally shadows top-level for mocking
        const { r } = await import("../src");
        const rep = r([]);

        expect(rep).toStrictEqual({
          children: [],
          type: "field-repetition",
        });
      });

      it("should create empty component when passed empty array", async () => {
        // biome-ignore lint/nursery/noShadow: dynamic import intentionally shadows top-level for mocking
        const { c } = await import("../src");
        const comp = c([]);

        expect(comp).toStrictEqual({
          children: [],
          type: "component",
        });
      });
    });
  });
});
