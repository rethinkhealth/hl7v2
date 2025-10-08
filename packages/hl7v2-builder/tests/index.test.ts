import { describe, expect, it } from "vitest";
import { c, f, m, r, s } from "../src";

describe("builder", () => {
  describe("root", () => {
    it("should build a simple root", () => {
      const root = m();
      expect(root).toEqual({
        type: "root",
        children: [],
      });
    });

    it("should build a root with a single segment", () => {
      const root = m(s("MSH", f("another value")));
      expect(root).toEqual({
        type: "root",
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
      });
    });

    it("should build a root with a multiple segments", () => {
      const root = m(s("MSH", f("another value")), s("PID", f("12345")));
      expect(root).toEqual({
        type: "root",
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
      });
    });
  });

  describe("segment", () => {
    it("should build a segment with a single-value field", () => {
      const segment = s("MSH", f("another value"));

      expect(segment).toEqual({
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
      });
    });

    it("should build a segment with an array of fields", () => {
      const segment = s("MSH", f("another value"), f("another value 2"));
      expect(segment).toEqual({
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
      });
    });
  });

  describe("field", () => {
    it("should build an empty field", () => {
      const field = f();
      expect(field).toEqual({
        type: "field",
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
      });
    });

    it("should build a single value field", () => {
      const field = f("hello world");
      expect(field).toEqual({
        type: "field",
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
      });
    });

    it("should build a field with a single component", () => {
      const field = f(c("hello world!"));
      expect(field).toEqual({
        type: "field",
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
      });
    });

    it("should build a field with an array of components", () => {
      const field = f([c("A"), c("B"), c("C")]);

      expect(field).toEqual({
        type: "field",
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
      expect(field).toEqual({
        type: "field",
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
      });
    });

    it("should build the same results using a single repetition or component(s)", () => {
      const fieldWithRepetition = f(r(c("A"), c(["B.1", "B.2"])));

      const fieldWithComponents = f(c("A"), c(["B.1", "B.2"]));

      expect(fieldWithRepetition).toEqual(fieldWithComponents);
    });
  });

  describe("component", () => {
    it("should build an empty component", () => {
      const component = c();
      expect(component).toEqual({
        type: "component",
        children: [{ type: "subcomponent", value: "" }],
      });
    });

    it("should build a component with a single value", () => {
      const component = c("hello world!");
      expect(component).toEqual({
        type: "component",
        children: [{ type: "subcomponent", value: "hello world!" }],
      });
    });

    it("should build a component with an array of values", () => {
      const component = c(["hello world!", "hello world 2!"]);
      expect(component).toEqual({
        type: "component",
        children: [
          { type: "subcomponent", value: "hello world!" },
          { type: "subcomponent", value: "hello world 2!" },
        ],
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
});
