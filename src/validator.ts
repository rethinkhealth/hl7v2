import Ajv, { ValidateFunction } from "ajv/dist/2020";
import betterAjvErrors from "better-ajv-errors";

import { JsonSchema } from "./jsonschema";
import * as hl7v2_schema from "./schema";

export class Validator {
  private _ajv: Ajv;
  private _validate: ValidateFunction;

  public readonly schema: {
    current: JsonSchema;
    fields: JsonSchema;
    segments: JsonSchema;
  };

  constructor(schema: JsonSchema) {
    this._ajv = new Ajv({
      strict: false, // #TODO: Replace with strict mode. log errors but do not throw
    });
    this._ajv.addKeyword("metadata");

    // Assign schema
    this.schema = {
      current: schema,
      segments: hl7v2_schema.v_2_8.segments as JsonSchema,
      fields: hl7v2_schema.v_2_8.fields as JsonSchema,
    };

    this._validate = this._ajv
      // including the segments schema
      .addSchema(this.schema.segments)
      .addSchema(this.schema.fields)
      // TODO: Add support for data types
      // TODO: Add support for custom schemas
      .compile(this.schema.current);
  }

  public validate(data: any): string | boolean {
    // try to validate otherwise return formatted error from AJV\JSON Schema
    const valid = this._validate(data);
    if (!valid) {
      const output = betterAjvErrors(
        this.schema,
        data,
        this._validate.errors!,
        {
          indent: 2,
          format: "cli",
        }
      );
      return output;
    } else {
      return true;
    }
  }
}
