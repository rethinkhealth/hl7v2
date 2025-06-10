/* eslint-disable typescript-sort-keys/interface */
// Adapted from: https://gist.github.com/enriched/c84a2a99f886654149908091a3183e15
// with a few changes such as:
// * format attribute added.
// * type of $schema is a string.
// * $defs added.
export interface JsonSchema {
  $ref?: string;
  // =============================================
  // Schema Metadata
  // =============================================
  /**
   * This is important because it tells refs where
   * the root of the document is located
   */
  id?: string;
  /**
   * It is recommended that the meta-schema is
   * included in the root of any JSON Schema
   */
  $schema?: string;
  /**
   * Title of the schema
   */
  title?: string;
  /**
   * Schema description
   */
  description?: string;
  /**
   * Default json for the object represented by
   * this schema
   */
  default?: any;

  // =============================================
  // Number Validation
  // =============================================
  /**
   * The value must be a multiple of the number
   * (e.g. 10 is a multiple of 5)
   */
  multipleOf?: number;
  maximum?: number;
  /**
   * If true maximum must be > value, >= otherwise
   */
  exclusiveMaximum?: boolean;
  minimum?: number;
  /**
   * If true minimum must be < value, <= otherwise
   */
  exclusiveMinimum?: boolean;

  // =============================================
  // String Validation
  // =============================================
  maxLength?: number;
  minLength?: number;
  /**
   * This is a regex string that the value must
   * conform to
   */
  pattern?: string;

  /**
   * For semantic validation.
   */
  format?: string;

  // =============================================
  // Array Validation
  // =============================================
  additionalItems?: boolean | JsonSchema;
  items?: JsonSchema | JsonSchema[];
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;

  // =============================================
  // Object Validation
  // =============================================
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  additionalProperties?: boolean | JsonSchema;
  /**
   * Holds simple JSON Schema definitions for
   * referencing from elsewhere.
   */
  definitions?: { [key: string]: JsonSchema };
  /**
   * The keys that can exist on the object with the
   * json schema that should validate their value
   */
  properties?: { [property: string]: JsonSchema };
  /**
   * The key of this object is a regex for which
   * properties the schema applies to
   */
  patternProperties?: { [pattern: string]: JsonSchema };
  /**
   * If the key is present as a property then the
   * string of properties must also be present.
   * If the value is a JSON Schema then it must
   * also be valid for the object if the key is
   * present.
   */
  dependencies?: { [key: string]: JsonSchema | string[] };

  /**
   * Sometimes we have small sub-schemas that are only intended for use in the
   * current schema and it doesn’t make sense to define them as separate
   * schemas. Although we can identify any sub-schema using JSON Pointers or
   * named anchors, the $defs keyword gives us a standardized place to keep
   * sub-schemas intended for reuse in the current schema document.
   */
  $defs?: { [property: string]: JsonSchema };

  // =============================================
  // Generic
  // =============================================
  /**
   * Enumerates the values that this schema can be
   * e.g.
   * {"type": "string",
   *  "enum": ["red", "green", "blue"]}
   */
  enum?: any[];
  /**
   * The basic type of this schema, can be one of
   * [string, number, object, array, boolean, null]
   * or an array of the acceptable types
   */
  type?: string | string[];

  // =============================================
  // Combining Schemas
  // =============================================
  allOf?: JsonSchema[];
  anyOf?: JsonSchema[];
  oneOf?: JsonSchema[];
  /**
   * The entity being validated must not match this schema
   */
  not?: JsonSchema;

  // =============================================
  //Custom keywords for HL7v2
  // =============================================
  /**
   * The HL7v2 metadata for the field.
   */
  metadata?: {
    /**
     * Maximum number of occurrences of the field.
     *
     * - 1 = Only one occurrence is allowed.
     * - 0 = The field is optional.
     * - unbounded = The field can occur more than once.
     */
    maxOccurs?: "1" | "0" | "unbounded";
    /**
     * Minimum number of occurrences of the field.
     *
     * - 1 = At least one occurrence is required.
     * - 0 = The field is optional.
     */
    minOccurs?: "1" | "0";
    /**
     * The optionality of the field.
     *
     * - Required = The field is required.
     * - Optional = The field is optional.
     */
    optionality?: "Required" | "Optional";
    /**
     * The repeatability of the field.
     *
     * - Unique = The field can only occur once.
     * - Multiple = The field can occur more than once.
     */
    repeatability?: "Unique" | "Multiple";
  };
}
/**
 * This is the interface for the JSON Schema specific to HL7v2.
 */
export class HL7v2Schema {
  constructor(public schema: JsonSchema) {}

  private getRef(property: any): string | null {
    // check if property has a $ref or anyOf
    if (property?.$ref) {
      return property.$ref;
    } else if (property?.anyOf) {
      // if anyOf, return the first $ref
      return property.anyOf[0].$ref;
    } else {
      return null;
    }
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
}
