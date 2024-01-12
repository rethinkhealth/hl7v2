import Ajv from "ajv/dist/2020";

import { Versions } from "./constants";
import { Message } from "./message";
import hl7v2_schemas from "./schema";

export class Validator {
  private _ajv: Ajv;

  constructor() {
    this._ajv = new Ajv({
      strict: false, // #TODO: Replace with strict mode. log errors but do not throw
    });
    this._ajv.addKeyword("metadata");
  }

  public validate(message: Message): string | boolean {
    const version = message.version;
    const schema = hl7v2_schemas[version as Versions];

    // if no schema is found return false
    if (!schema) {
      return false;
    }

    const validatorInstance = this._ajv
      // including the segments schema
      .addSchema(schema.segments)
      .addSchema(schema.fields)
      // TODO: Add support for data types
      // TODO: Add support for custom schemas
      .compile(schema[message.header.messageType as keyof typeof schema]);

    // try to validate otherwise return formatted error from AJV\JSON Schema
    const valid = validatorInstance(message.toJson());
    if (!valid) {
      // TODO: Add support for custom errors
      console.log(validatorInstance.errors);
      return false;
    } else {
      return true;
    }
  }
}
