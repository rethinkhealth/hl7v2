import type { HL7v2Error } from "./errors";

// Validation Types
export interface ValidationResult {
    isValid: boolean;
    errors: HL7v2Error[];
  }
  

export interface IValidator {
  validate(message: any): ValidationResult;
}
