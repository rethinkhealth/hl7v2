import { VFile } from "vfile";
import { describe, expect, it } from "vitest";
import { report } from "../src/report";
import type { Diagnostic } from "../src/types";

describe("report", () => {
  it("matches the vfile message snapshot", () => {
    // With
    const file = new VFile();
    const rule: Diagnostic = {
      code: "test-message-error",
      message: "You have an error sending the message",
      namespace: "hl7v2-test-package",
      description: "Test **diagnostics**",
      helpUrl: "https://test.com/test1234",
      severity: "error",
    };
    const node = {
      type: "segment",
      position: {
        start: { line: 2, column: 5 },
        end: { line: 2, column: 25 },
      },
    };

    // When
    report(rule, file, node);

    // Then
    expect(JSON.stringify(file.messages, null, 2)).toMatchSnapshot();
  });

  it("returns early if file is null", () => {
    const rule: Diagnostic = {
      code: "test-message-error",
      message: "You have an error sending the message",
      namespace: "hl7v2-test-package",
      description: "Test **diagnostics**",
      helpUrl: "https://test.com/test1234",
      severity: "error",
    };
    expect(() => report(rule)).not.toThrow();
  });

  it("extracts namespace as source from diagnostics", () => {
    const file = new VFile();
    const rule: Diagnostic = {
      code: "test-message-error",
      message: "You have an error sending the message",
      namespace: "hl7v2-test-package",
      description: "Test **diagnostics**",
      helpUrl: "https://test.com/test1234",
      severity: "error",
    };

    report(rule, file);

    expect(file.messages[0]?.source).toBe("hl7v2-test-package");
  });

  it("sets ruleId from type:namespace:code", () => {
    const file = new VFile();
    const rule: Diagnostic = {
      code: "test-message-error",
      message: "You have an error sending the message",
      namespace: "hl7v2-test-package",
      description: "Test **diagnostics**",
      helpUrl: "https://test.com/test1234",
      severity: "error",
    };

    report(rule, file);

    expect(file.messages[0]?.ruleId).toBe(
      "hl7v2-test-package:test-message-error"
    );
  });

  it("maps error severity to fatal: true", () => {
    const file = new VFile();
    const rule: Diagnostic = {
      code: "test-message-error",
      message: "You have an error sending the message",
      namespace: "hl7v2-test-package",
      description: "Test **diagnostics**",
      helpUrl: "https://test.com/test1234",
      severity: "error",
    };

    report(rule, file);

    expect(file.messages[0]?.fatal).toBe(true);
  });

  it("maps warning severity to fatal: false", () => {
    const file = new VFile();
    const rule: Diagnostic = {
      code: "test-message-error",
      message: "You have an error sending the message",
      namespace: "hl7v2-test-package",
      description: "Test **diagnostics**",
      helpUrl: "https://test.com/test1234",
      severity: "warning",
    };

    report(rule, file);

    expect(file.messages[0]?.fatal).toBe(false);
  });

  it("maps info severity to fatal: undefined when severity is info", () => {
    const file = new VFile();
    const rule: Diagnostic = {
      code: "test-message-error",
      message: "You have an error sending the message",
      namespace: "hl7v2-test-package",
      description: "Test **diagnostics**",
      helpUrl: "https://test.com/test1234",
      severity: "info",
    };

    report(rule, file);

    expect(file.messages[0]?.fatal).toBeUndefined();
  });

  it("maps null severity to fatal: null", () => {
    const file = new VFile();
    const rule: Diagnostic = {
      code: "test-message-error",
      message: "You have an error sending the message",
      namespace: "hl7v2-test-package",
      description: "Test **diagnostics**",
      helpUrl: "https://test.com/test1234",
      severity: null as any,
    };

    report(rule, file);

    expect(file.messages[0]?.fatal).toBeUndefined();
  });
});
