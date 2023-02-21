import fs from "fs";
import path from "path";

import { Message } from "../message";
import { Validator } from "../validator";

describe("Validator", () => {
  it("should validate the message against the schema", async () => {
    // Given
    const raw = fs.readFileSync(
      path.join(__dirname, "../samples/siu_s12.txt"),
      "utf-8"
    );
    const schema = JSON.parse(
      fs.readFileSync(
        path.join(__dirname, "../schema/SIU_12.schema.json"),
        "utf-8"
      )
    );
    const message = new Message(raw);

    // When
    const result = new Validator(schema).validate(message.toJson());

    // Then
    expect(result).toBeTruthy();
  });
});
