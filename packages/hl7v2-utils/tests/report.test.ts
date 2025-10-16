import { VFile } from "vfile";
import { describe, expect, it } from "vitest";
import { report } from "../src/report";
import type { Diagnostic } from "../src/types";

describe("report", () => {
  it("matches the vfile message snapshot", () => {
    // With
    const file = new VFile();
    const rule: Diagnostic = {
      type: "validator",
      namespace: "order",
      code: "transition",
      description: "A segment arrived that is not allowed.",
      severity: "error",
      message: ({ actual, expected }: { actual: string; expected: string[] }) =>
        `Expected ${expected.join(", ")}, got '${actual}'`,
      helpUrl: "https://example.com/transition",
    };
    const node = {
      type: "segment",
      position: {
        start: { line: 2, column: 5 },
        end: { line: 2, column: 25 },
      },
    };

    // When
    report(file, rule, {
      node,
      context: { actual: "EVN", expected: ["PID", "NK1"] },
    });

    // Then
    expect(JSON.stringify(file.messages, null, 2)).toMatchSnapshot();
  });

  it("returns early if file is null", () => {
    const rule: Diagnostic = {
      type: "validator",
      namespace: "order",
      code: "transition",
      message: () => "Invalid transition",
    };
    expect(report(null, rule)).toBeUndefined();
  });

  it("calls the rule message function with context", () => {
    const file = new VFile();
    const rule: Diagnostic = {
      type: "validator",
      namespace: "order",
      code: "transition",
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
      description: "Segment not recognized.",
      severity: "warning",
      message: () => "Warning message",
    };

    report(file, rule);

    expect(file.messages[0]?.fatal).toBe(false);
  });

  it("maps info severity to fatal: null when severity is info", () => {
    const file = new VFile();
    const rule: Diagnostic = {
      type: "validator",
      namespace: "order",
      code: "info",
      description: "Informational message.",
      severity: "info",
      message: () => "Info message",
    };

    report(file, rule);

    expect(file.messages[0]?.fatal).toBeNull();
  });

  it("maps null severity to fatal: null", () => {
    const file = new VFile();
    const rule: Diagnostic = {
      type: "validator",
      namespace: "order",
      code: "info",
      description: "Informational message.",
      severity: null,
      message: () => "Info message",
    };

    report(file, rule);

    expect(file.messages[0]?.fatal).toBeNull();
  });

  it("maps undefined severity to fatal: undefined", () => {
    const file = new VFile();
    const rule: Diagnostic = {
      type: "validator",
      namespace: "order",
      code: "info",
      description: "Informational message.",
      severity: undefined,
      message: () => "Info message",
    };

    report(file, rule);

    expect(file.messages[0]?.fatal).toBeUndefined();
  });

  it("passes context to message function", () => {
    const file = new VFile();
    const rule: Diagnostic = {
      type: "lint",
      namespace: "field",
      code: "required",
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
      description: "A segment arrived that is not allowed.",
      severity: "error",
      message: () => "Invalid transition",
      helpUrl: "https://example.com/transition",
    };
    const position = {
      start: { line: 2, column: 5 },
      end: { line: 2, column: 5 },
    };
    const node = {
      type: "segment",
      position,
    };

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
