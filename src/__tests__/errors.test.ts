import { ComponentError, FieldError, HL7v2Error, SegmentError } from "../types/errors";
import type { ValidationResult } from "../types/errors";

describe("HL7v2 Error Classes", () => {
  describe("HL7v2Error", () => {
    it("should create a base error with correct name and message", () => {
      const error = new HL7v2Error("Test error message");
      expect(error).toBeInstanceOf(Error);
      expect(error).toBeInstanceOf(HL7v2Error);
      expect(error.name).toBe("HL7v2Error");
      expect(error.message).toBe("Test error message");
    });
  });

  describe("SegmentError", () => {
    it("should create a segment error with correct name and formatted message", () => {
      const error = new SegmentError("MSH", "Invalid segment format");
      expect(error).toBeInstanceOf(HL7v2Error);
      expect(error).toBeInstanceOf(SegmentError);
      expect(error.name).toBe("SegmentError");
      expect(error.message).toBe("Error in segment MSH: Invalid segment format");
    });

    it("should handle empty segment name", () => {
      const error = new SegmentError("", "Empty segment name");
      expect(error.message).toBe("Error in segment : Empty segment name");
    });
  });

  describe("FieldError", () => {
    it("should create a field error with correct name and formatted message", () => {
      const error = new FieldError("MSH", 3, "Invalid field value");
      expect(error).toBeInstanceOf(HL7v2Error);
      expect(error).toBeInstanceOf(FieldError);
      expect(error.name).toBe("FieldError");
      expect(error.message).toBe("Error in MSH.3: Invalid field value");
    });

    it("should handle zero field number", () => {
      const error = new FieldError("MSH", 0, "Zero field number");
      expect(error.message).toBe("Error in MSH.0: Zero field number");
    });
  });

  describe("ComponentError", () => {
    it("should create a component error with correct name and formatted message", () => {
      const error = new ComponentError("MSH", 3, 1, "Invalid component value");
      expect(error).toBeInstanceOf(HL7v2Error);
      expect(error).toBeInstanceOf(ComponentError);
      expect(error.name).toBe("ComponentError");
      expect(error.message).toBe("Error in MSH.3.1: Invalid component value");
    });

    it("should handle zero component number", () => {
      const error = new ComponentError("MSH", 3, 0, "Zero component number");
      expect(error.message).toBe("Error in MSH.3.0: Zero component number");
    });
  });

  describe("ValidationResult", () => {
    it("should create a valid validation result", () => {
      const result: ValidationResult = {
        isValid: true,
        errors: []
      };
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it("should create an invalid validation result with errors", () => {
      const errors = [
        new SegmentError("MSH", "Invalid segment"),
        new FieldError("PID", 3, "Invalid field")
      ];
      const result: ValidationResult = {
        isValid: false,
        errors
      };
      expect(result.isValid).toBe(false);
      expect(result.errors).toHaveLength(2);
      expect(result.errors[0]).toBeInstanceOf(SegmentError);
      expect(result.errors[1]).toBeInstanceOf(FieldError);
    });
  });
});
