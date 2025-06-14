import {
  SegmentError,
  ComponentError,
  FieldError,
  HL7v2Error,
  type IValidator,
  type ValidationResult,
  type JsonSchema
} from "./types";

export class SchemaValidator implements IValidator {
  private readonly schema: JsonSchema | undefined;

  constructor(schema: JsonSchema | undefined = undefined) {
    this.schema = schema;
  }

  private getRef(property: any): string | null {
    // check if property has a $ref or anyOf
    if (property?.$ref) {
      return property.$ref;
    }
    if (property?.anyOf) {
      // if anyOf, return the first $ref
      return property.anyOf[0].$ref;
    }
    return null;
  }

  public getGroups(resource?: string): string[] {
    let groups: any[] = [];
    if (resource) {
      // Resource-based groups
      groups = Object.keys(this.schema?.$defs?.[resource].properties || {}).filter((a) =>
        this.getRef(this.schema?.$defs?.[resource].properties?.[a])?.startsWith("/schemas")
      );
    } else {
      // Root groups
      groups = Object.keys(this.schema?.properties || {}).filter((a) =>
        this.getRef(this.schema?.properties?.[a])?.startsWith("/schemas")
      );
    }
    return groups;
  }

  public getSegments(resource?: string): string[] {
    let segments: string[] = [];
    if (resource) {
      // Resource-based groups
      segments = Object.keys(this.schema?.$defs?.[resource].properties || {}).filter(
        (a) => !this.getRef(this.schema?.$defs?.[a])?.includes("/schemas")
      );
    } else {
      // Root groups
      segments = Object.keys(this.schema?.properties || {}).filter(
        (a) => !this.getRef(this.schema?.properties?.[a])?.includes("/schemas")
      );
    }
    return segments;
  }

  public isSegment(id: string, resource?: string): boolean {
    // if the element starts with Z (custom segment), then it is a segment
    if (id.startsWith("Z")) return true;
    // if the element is a segment of the group, then it is a segment
    if (this.getSegments(resource).includes(id)) return true;
    // otherwise, it is not a segment
    return false;
  }

  public validate(message: any): ValidationResult {
    const errors: HL7v2Error[] = [];

    if (!this.schema) {
      return {
        isValid: false,
        errors: [new HL7v2Error("No schema provided")]
      };
    }

    // Validate required segments
    if (this.schema.required) {
      for (const requiredSegment of this.schema.required) {
        if (!message[requiredSegment]) {
          errors.push(new SegmentError(requiredSegment, "Required segment is missing"));
        }
      }
    }

    // Validate each segment in the message
    for (const [segmentName, segmentData] of Object.entries(message)) {
      const segmentSchema = this.schema.properties?.[segmentName];
      if (!segmentSchema) {
        errors.push(new SegmentError(segmentName, "Unknown segment"));
        continue;
      }

      // Validate segment metadata
      const metadata = segmentSchema.metadata;
      if (metadata) {
        // Check minOccurs
        if (metadata.minOccurs === "1" && !segmentData) {
          errors.push(new SegmentError(segmentName, "Required segment is empty"));
        }

        // Check maxOccurs
        if (metadata.maxOccurs === "1" && Array.isArray(segmentData)) {
          errors.push(new SegmentError(segmentName, "Segment cannot be repeated"));
        }
      }

      // Validate segment fields
      if (segmentData && !Array.isArray(segmentData)) {
        this.validateSegmentFields(
          segmentName,
          segmentData as Record<string, unknown>,
          segmentSchema,
          errors
        );
      } else if (Array.isArray(segmentData)) {
        // Handle repeated segments
        for (const instance of segmentData) {
          this.validateSegmentFields(
            segmentName,
            instance as Record<string, unknown>,
            segmentSchema,
            errors
          );
        }
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  private validateSegmentFields(
    segmentName: string,
    segmentData: Record<string, unknown>,
    segmentSchema: JsonSchema,
    errors: HL7v2Error[]
  ): void {
    // Get the segment definition from the schema
    const segmentDef = this.getRef(segmentSchema);
    if (!segmentDef) {
      errors.push(new SegmentError(segmentName, "Invalid segment definition"));
      return;
    }

    // Validate each field in the segment
    for (const [fieldNumber, fieldValue] of Object.entries(segmentData)) {
      // Skip special fields for MSH segment
      if (segmentName === "MSH" && (fieldNumber === "1" || fieldNumber === "2")) {
        continue;
      }

      // Validate field value
      if (typeof fieldValue === "object" && fieldValue !== null && !Array.isArray(fieldValue)) {
        // Handle component fields
        for (const [componentNumber, componentValue] of Object.entries(fieldValue)) {
          if (typeof componentValue !== "string") {
            errors.push(
              new ComponentError(
                segmentName,
                Number.parseInt(fieldNumber),
                Number.parseInt(componentNumber),
                "Component value must be a string"
              )
            );
          }
        }
      } else if (Array.isArray(fieldValue)) {
        // Handle repeated fields
        for (const repeat of fieldValue) {
          if (typeof repeat === "object" && repeat !== null) {
            for (const [componentNumber, componentValue] of Object.entries(repeat)) {
              if (typeof componentValue !== "string") {
                errors.push(
                  new ComponentError(
                    segmentName,
                    Number.parseInt(fieldNumber),
                    Number.parseInt(componentNumber),
                    "Component value must be a string"
                  )
                );
              }
            }
          } else if (typeof repeat !== "string") {
            errors.push(
              new FieldError(
                segmentName,
                Number.parseInt(fieldNumber),
                "Field repeat must be a string"
              )
            );
          }
        }
      } else if (typeof fieldValue !== "string") {
        errors.push(
          new FieldError(segmentName, Number.parseInt(fieldNumber), "Field value must be a string")
        );
      }
    }
  }
}
