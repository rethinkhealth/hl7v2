import type { HL7v2Node } from '@rethinkhealth/hl7v2-ast';
import type {
  ParseContext,
  ValidationHook,
  ValidationResult,
} from '../interfaces';

/**
 * Basic validation hook that checks for common HL7v2 message structure issues
 */
export class BasicValidationHook implements ValidationHook {
  validate(node: HL7v2Node, _context: ParseContext): ValidationResult {
    const warnings: string[] = [];
    const errors: string[] = [];

    // Check if message starts with MSH segment
    if (node.type === 'root' && node.children && node.children.length > 0) {
      const firstSegment = node.children[0];
      if (firstSegment?.name !== 'MSH') {
        errors.push('HL7v2 message must start with MSH segment');
      }
    }

    // Check for empty segments
    if (
      node.type === 'segment' &&
      (!node.children || node.children.length === 0)
    ) {
      warnings.push(`Segment ${node.name} appears to be empty`);
    }

    // Check for required MSH fields
    if (
      node.type === 'segment' &&
      node.name === 'MSH' &&
      (!node.children || node.children.length < 12)
    ) {
      errors.push('MSH segment must have at least 12 fields');
    }

    return {
      isValid: errors.length === 0,
      warnings: warnings.length > 0 ? warnings : undefined,
      errors: errors.length > 0 ? errors : undefined,
    };
  }
}

/**
 * Custom validation hook for specific segment requirements
 */
export class SegmentRequirementValidationHook implements ValidationHook {
  private requirements: Map<string, number>;

  constructor(requirements: Map<string, number>) {
    this.requirements = requirements;
  }

  validate(node: HL7v2Node, _context: ParseContext): ValidationResult {
    const warnings: string[] = [];
    const errors: string[] = [];

    if (node.type === 'segment' && node.name) {
      const requiredFields = this.requirements.get(node.name);
      if (
        requiredFields &&
        node.children &&
        node.children.length < requiredFields
      ) {
        errors.push(
          `Segment ${node.name} requires at least ${requiredFields} fields, but only ${node.children.length} found`
        );
      }
    }

    return {
      isValid: errors.length === 0,
      warnings: warnings.length > 0 ? warnings : undefined,
      errors: errors.length > 0 ? errors : undefined,
    };
  }
}
