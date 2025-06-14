import fs from "node:fs";
import path from "node:path";
import Ajv, {JSONSchemaType} from "ajv"
import { HL7v2Client } from "../src/client";

import ADT_A01 from "../src/schema/2.5.1/ADT_A01.schema.json"

describe("validate - real messages", () => {
  it("should validate a real message (ADT 01 - 2.8)", () => {
    const message = fs.readFileSync(path.join(__dirname, "data", "ADT_01.2_8.txt"), "utf8");
    const jsonMessage = new HL7v2Client().parse(message);

    // Validation
    const ajv = new Ajv()
    const validate = ajv.compile(ADT_A01)

    const valid = validate(jsonMessage)

    expect(valid).toBe(true);
  });
});
