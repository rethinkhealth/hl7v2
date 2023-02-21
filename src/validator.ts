import Ajv, { ValidateFunction } from "ajv/dist/2020";
import betterAjvErrors from "better-ajv-errors";

export class Validator {
  private _ajv: Ajv;
  private _validate: ValidateFunction;

  constructor(readonly schema: any) {
    this._ajv = new Ajv();
    this._validate = this._ajv.compile(this.schema);
  }

  public validate(data: any) {
    // try to validate otherwise return formatted error from AJV\JSON Schema
    const valid = this._validate(data);
    if (!valid) {
      const output = betterAjvErrors(this.schema, data, this._validate.errors!);
      console.log(output);
    }
  }
}
