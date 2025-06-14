import fs from "node:fs";
import path from "node:path";

import { HL7v2Client } from "../src/client";
import { SchemaValidator } from "../src/validator";
import { HL7v2Error, SegmentError, FieldError, ComponentError } from "../src/types";
import type { JsonSchema } from "../src/types";

describe.skip("SchemaValidator", () => {
  // Sample schema for testing
  const testSchema = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    type: "object",
    properties: {
      MSH: {
        $ref: "segments.schema.json#/definitions/MSH",
        metadata: {
          minOccurs: "1",
          maxOccurs: "1",
          optionality: "Required",
          repeatability: "Unique"
        }
      },
      PID: {
        $ref: "segments.schema.json#/definitions/PID",
        metadata: {
          minOccurs: "1",
          maxOccurs: "1",
          optionality: "Required",
          repeatability: "Unique"
        }
      },
      NK1: {
        anyOf: [
          {
            $ref: "segments.schema.json#/definitions/NK1"
          },
          {
            type: "array",
            items: {
              $ref: "segments.schema.json#/definitions/NK1"
            }
          }
        ],
        metadata: {
          minOccurs: "0",
          maxOccurs: "unbounded",
          optionality: "Optional",
          repeatability: "Multiple"
        }
      }
    },
    required: ["MSH", "PID"]
  } satisfies JsonSchema;

  let validator: SchemaValidator;

  beforeEach(() => {
    validator = new SchemaValidator(testSchema);
  });

  describe("validate - segments", () => {
    it("should return error when no schema is provided", () => {
      const emptyValidator = new SchemaValidator();
      const result = emptyValidator.validate({});
      expect(result.isValid).toBe(false);
      expect(result.errors).toHaveLength(1);
      expect(result.errors[0]).toBeInstanceOf(HL7v2Error);
      expect(result.errors[0].message).toBe("No schema provided");
    });

    it("should validate a valid message", () => {
      const message = {
        MSH: {
          "1": "|",
          "2": "^~\\&",
          "3": "SENDING_APP",
          "4": "SENDING_FACILITY",
          "5": "RECEIVING_APP",
          "6": "RECEIVING_FACILITY",
          "7": "20240315120000",
          "9": {
            "1": "ADT",
            "2": "A01"
          }
        },
        PID: {
          "1": "1",
          "3": {
            "1": "12345",
            "2": "5",
            "3": "M11"
          },
          "5": {
            "1": "SMITH",
            "2": "JOHN"
          }
        }
      };

      const result = validator.validate(message);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it("should validate repeated segments", () => {
      const message = {
        MSH: {
          "1": "|",
          "2": "^~\\&",
          "3": "SENDING_APP",
          "4": "SENDING_FACILITY",
          "5": "RECEIVING_APP",
          "6": "RECEIVING_FACILITY",
          "7": "20240315120000",
          "9": {
            "1": "ADT",
            "2": "A01"
          }
        },
        PID: {
          "1": "1",
          "3": {
            "1": "12345",
            "2": "5",
            "3": "M11"
          }
        },
        NK1: [
          {
            "1": "1",
            "2": {
              "1": "NUCLEAR",
              "2": "NELDA",
              "3": "W"
            }
          },
          {
            "1": "2",
            "2": {
              "1": "NUCLEAR",
              "2": "NELDA",
              "3": "W"
            }
          }
        ]
      };

      const result = validator.validate(message);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it("should return error for missing required segment", () => {
      const message = {
        MSH: {
          "1": "|",
          "2": "^~\\&",
          "3": "SENDING_APP"
        }
      };

      const result = validator.validate(message);
      expect(result.isValid).toBe(false);
      expect(result.errors).toHaveLength(1);
      expect(result.errors[0]).toBeInstanceOf(SegmentError);
      expect(result.errors[0].message).toBe("Error in segment PID: Required segment is missing");
    });

    it("should return error for repeated non-repeatable segment", () => {
      const message = {
        MSH: {
          "1": "|",
          "2": "^~\\&",
          "3": "SENDING_APP"
        },
        PID: [
          {
            "1": "1"
          },
          {
            "1": "2"
          }
        ]
      };

      const result = validator.validate(message);
      expect(result.isValid).toBe(false);
      expect(result.errors).toHaveLength(1);
      expect(result.errors[0]).toBeInstanceOf(SegmentError);
      expect(result.errors[0].message).toBe("Error in segment PID: Segment cannot be repeated");
    });

    it("should return error for unknown segment", () => {
      const message = {
        MSH: {
          "1": "|",
          "2": "^~\\&",
          "3": "SENDING_APP"
        },
        PID: {
          "1": "1"
        },
        UNKNOWN: {
          "1": "value"
        }
      };

      const result = validator.validate(message);
      expect(result.isValid).toBe(false);
      expect(result.errors).toHaveLength(1);
      expect(result.errors[0]).toBeInstanceOf(SegmentError);
      expect(result.errors[0].message).toBe("Error in segment UNKNOWN: Unknown segment");
    });

    it("should return multiple errors for a message with multiple validation issues for segments", () => {
      const message = {
        MSH: {
          "1": "|",
          "2": "^~\\&",
          "3": 123,
          "4": {
            "1": 456
          }
        },
        PID: [
          // Invalid repeated segment
          {
            "1": 789,
            "3": {
              "1": 123,
              "2": "5"
            }
          },
          {
            "1": "2"
          }
        ],
        UNKNOWN: {
          // Unknown segment
          "1": "value"
        }
      };

      const result = validator.validate(message);
      expect(result.isValid).toBe(false);
      expect(result.errors).toHaveLength(6);

      // Check each error
      const errorMessages = result.errors.map((error) => error.message);
      expect(errorMessages).toContain("Error in MSH.3: Field value must be a string");
      expect(errorMessages).toContain("Error in MSH.4.1: Component value must be a string");
      expect(errorMessages).toContain("Error in segment PID: Segment cannot be repeated");
      expect(errorMessages).toContain("Error in PID.1: Field value must be a string");
      expect(errorMessages).toContain("Error in PID.3.1: Component value must be a string");
      expect(errorMessages).toContain("Error in segment UNKNOWN: Unknown segment");

      // Verify error types
      expect(result.errors[0]).toBeInstanceOf(FieldError);
      expect(result.errors[1]).toBeInstanceOf(ComponentError);
      expect(result.errors[2]).toBeInstanceOf(SegmentError);
      expect(result.errors[3]).toBeInstanceOf(FieldError);
      expect(result.errors[4]).toBeInstanceOf(ComponentError);
      expect(result.errors[5]).toBeInstanceOf(SegmentError);
    });
  });

  describe("validate - real messages", () => {
    it("should validate a real message (ADT 01 - 2.8)", () => {
      const message = fs.readFileSync(path.join(__dirname, "data", "ADT_01.2_8.txt"), "utf8");
      const jsonMessage = new HL7v2Client().parse(message);
      const result = validator.validate(jsonMessage);
      expect(result.errors).toHaveLength(0);
      expect(result.isValid).toBe(true);
    });
  });
});
