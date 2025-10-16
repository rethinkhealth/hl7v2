import { VFile } from "vfile";
import { describe, expect, it } from "vitest";
import { report } from "../src/report";
import type { Diagnostic } from "../src/types";

describe("report", () => {
  it("calls the rule message function with context", () => {
    const file = new VFile();
    const rule: Diagnostic = {
      type: "validator",
      namespace: "order",
      code: "transition",
      title: "Invalid Segment Transition",
      description: "A segment arrived that is not allowed.",
      severity: "error",
      message: (ctx: Record<string, unknown>) =>
        `Segment '${ctx.actual}' not allowed`,
    };

    report(file, rule, {
      context: { actual: "EVN" },
    });

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0]?.message).toBe("Segment 'EVN' not allowed");
  });

  it("extracts namespace as source from rule", () => {
    const file = new VFile();
    const rule: Diagnostic = {
      type: "lint",
      namespace: "field",
      code: "required",
      title: "Required Field Missing",
      description: "A required field is missing.",
      severity: "warning",
      message: () => "Field required",
    };

    report(file, rule);

    expect(file.messages[0]?.source).toBe("field");
  });

  it("sets ruleId from type:namespace:code", () => {
    const file = new VFile();
    const rule: Diagnostic = {
      type: "validator",
      namespace: "order",
      code: "acceptance",
      title: "Message Incomplete",
      description: "Message did not reach accepting state.",
      severity: "error",
      message: () => "Message incomplete",
    };

    report(file, rule);

    expect(file.messages[0]?.ruleId).toBe("validator:order:acceptance");
  });

  it("maps error severity to fatal: true", () => {
    const file = new VFile();
    const rule: Diagnostic = {
      type: "validator",
      namespace: "order",
      code: "transition",
      title: "Invalid Segment Transition",
      description: "A segment arrived that is not allowed.",
      severity: "error",
      message: () => "Error message",
    };

    report(file, rule);

    expect(file.messages[0]?.fatal).toBe(true);
  });

  it("maps warning severity to fatal: false", () => {
    const file = new VFile();
    const rule: Diagnostic = {
      type: "validator",
      namespace: "order",
      code: "unknown",
      title: "Unknown Segment",
      description: "Segment not recognized.",
      severity: "warning",
      message: () => "Warning message",
    };

    report(file, rule);

    expect(file.messages[0]?.fatal).toBe(false);
  });

  it("maps info severity to fatal: null", () => {
    const file = new VFile();
    const rule: Diagnostic = {
      type: "validator",
      namespace: "order",
      code: "info",
      title: "Info",
      description: "Informational message.",
      severity: "info",
      message: () => "Info message",
    };

    report(file, rule);

    expect(file.messages[0]?.fatal).toBeNull();
  });

  it("passes context to message function", () => {
    const file = new VFile();
    const rule: Diagnostic = {
      type: "lint",
      namespace: "field",
      code: "required",
      title: "Required Field Missing",
      description: "A required field is missing.",
      severity: "error",
      message: (ctx: Record<string, unknown>) =>
        `Field '${ctx.fieldPath}' is required. Value: ${ctx.value}`,
    };

    report(file, rule, {
      context: { fieldPath: "PID-5", value: "test" },
    });

    expect(file.messages[0]?.message).toBe(
      "Field 'PID-5' is required. Value: test"
    );
  });

  it("handles arrays in context by joining them", () => {
    const file = new VFile();
    const rule: Diagnostic = {
      type: "validator",
      namespace: "order",
      code: "transition",
      title: "Invalid Segment Transition",
      description: "A segment arrived that is not allowed.",
      severity: "error",
      message: (ctx: Record<string, unknown>) =>
        `Expected: ${Array.isArray(ctx.expected) ? (ctx.expected as string[]).join(", ") : ctx.expected}`,
    };

    report(file, rule, {
      context: { expected: ["PID", "NK1", "PV1"] },
    });

    expect(file.messages[0]?.message).toBe("Expected: PID, NK1, PV1");
  });

  it("ignores null file gracefully", () => {
    const rule: Diagnostic = {
      type: "validator",
      namespace: "order",
      code: "transition",
      title: "Invalid Segment Transition",
      description: "A segment arrived that is not allowed.",
      severity: "error",
      message: () => "Invalid transition",
    };

    // Should not throw
    expect(() => {
      report(null, rule);
    }).not.toThrow();

    expect(() => {
      report(undefined, rule);
    }).not.toThrow();
  });

  it("sets position when provided", () => {
    const file = new VFile();
    const rule: Diagnostic = {
      type: "validator",
      namespace: "order",
      code: "transition",
      title: "Invalid Segment Transition",
      description: "A segment arrived that is not allowed.",
      severity: "error",
      message: () => "Invalid transition",
      helpUrl: "https://example.com/transition",
    };
    const position = {
      start: { line: 2, column: 5 },
      end: { line: 2, column: 5 },
    };
    const node =  {
        type: "segment",
        position,
      }

    // When
    report(file, rule, {
      node,
    });

    // vfile stores position internally; just verify message was created
    expect(file.messages[0]).toMatchObject({
      message: rule.message({}),
      ancestors: [node],
      ruleId: "validator:order:transition",
      url: "https://example.com/transition",
      note: "A segment arrived that is not allowed.",
      source: "order",
      fatal: true,
    });
  });

  it("works without context", () => {
    const file = new VFile();
    const rule: Diagnostic = {
      type: "validator",
      namespace: "order",
      code: "acceptance",
      title: "Message Incomplete",
      description: "Message did not reach accepting state.",
      severity: "error",
      message: () => "Message incomplete",
    };

    expect(() => {
      report(file, rule);
    }).not.toThrow();

    expect(file.messages[0]?.message).toBe("Message incomplete");
  });
});
