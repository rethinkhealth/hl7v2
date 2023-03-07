import Ajv, { ValidateFunction } from "ajv/dist/2020";
import betterAjvErrors from "better-ajv-errors";

import { JsonSchema } from "./schema";

const SEGMENTS_SCHEMA_LOCATION = "./schema/2.8/segments.schema.json"

export class Validator {
  private _ajv: Ajv;
  private _validate: ValidateFunction;

  public readonly schema: {
    current: JsonSchema;
    fields: JsonSchema | undefined;
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
      segments: require(SEGMENTS_SCHEMA_LOCATION),
      fields: undefined,
    };

    this._validate = this._ajv
      // including the segments schema
      .addSchema(this.schema.segments)
      // TODO: Add support for fields schema
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
