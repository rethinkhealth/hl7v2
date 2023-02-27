import fs from "fs";

import { Command } from "commander";

import { setupEmitter, transformXsd } from "./utils";

import { Message, Validator } from "../src";

const program = new Command();

program
  .name("hl7v2-util")
  .description("CLI to parse and manipulate HL7v2 messages")
  .version("0.0.2");

program
  .command("parse <message>")
  .description("Parse an HL7v2 message")
  .option(
    "-o, --output <char>",
    "Output file to write transformed message to",
    undefined
  )
  .option("-l, --logging <char>", "Logging level (warn, info, debug)", "info")
  .option("-v, --validate", "Validate message against JSON Schema", false)
  .action(async (filePath: string, options) => {
    const message = fs.readFileSync(filePath, "utf-8");
    const emitter = setupEmitter(options);

    const parsedMessage = new Message(message, { emitter, terminator: "\n" });

    if (options.validate) {
      const validator = new Validator(parsedMessage.schema);
      const validation = validator.validate(parsedMessage.toJson());
      if (!validation) {
        console.log("Validation passed.");
      } else {
        console.log("Validation failed:");
        console.log(validation);
      }
    }

    if (options.output && options.output !== "") {
      fs.writeFileSync(options.output, parsedMessage.toString());
    } else {
      console.dir(parsedMessage.toJson(), { depth: null, colors: true });
    }
  });

program
  .command("convert <xsd>")
  .description("Convert XSD to JSON Schema")
  .option(
    "-e, --expression <char>",
    "JSONata expression to transform message",
    undefined
  )
  .option("-l, --logging <char>", "Logging level (warn, info, debug)", "info")
  .option(
    "-o, --output <char>",
    "Output file to write transformed message to",
    undefined
  )
  .action(async (filePath: string, options) => {
    const parsedMessage = await transformXsd(filePath, options.expression);
    const output = options.output || undefined;
    if (output && output !== "") {
      fs.writeFileSync(output, JSON.stringify(parsedMessage, null, 2));
    } else {
      console.dir(parsedMessage, { depth: null, colors: true });
    }
  });

program.parse();

// pnpm cli convert ./xml/segments.xsd -e ./src/jsonata/segments.jsonata -o ./src/schema/segements.json
// pnpm cli convert ./xml/fields.xsd -e ./src/jsonata/fields.jsonata -o ./src/schema/fields.json
// pnpm cli convert ./xml/SIU_S12.xsd -e ./src/jsonata/message.jsonata -o ./src/schema/SIU.schema.json
// pnpm cli convert ./xml/VXU_V04.xsd -e ./src/jsonata/message.jsonata -o ./src/schema/SIU.schema.json
