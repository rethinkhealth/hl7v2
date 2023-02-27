import fs from "fs";

import { Command } from "commander";
import glob from "tiny-glob";

import { setupEmitter, transformXsd, scanDir } from "./utils";

import { Message, Validator } from "../src";

function list(val: string, memo: string[]) {
  if (!memo) memo = [];
  memo.push(val);
  return memo;
}

/**
 * This CLI is used to parse and manipulate HL7v2 messages.
 *
 * Examples:
 * - pnpm cli convert ./xml/segments.xsd -e ./src/jsonata/segments.jsonata -o ./src/schema/segments.json
 * - pnpm cli convert ./xml/fields.xsd -e ./src/jsonata/fields.jsonata -o ./src/schema/fields.json
 * - pnpm cli convert ./xml/SIU_S12.xsd -e ./src/jsonata/message.jsonata -o ./src/schema/SIU.schema.json
 * - pnpm cli convert ./xml/VXU_V04.xsd -e ./src/jsonata/message.jsonata -o ./src/schema/SIU.schema.json
 * - pnpm cli convert xml -a -i fields.xsd -i messages.xsd -i segments.xsd -i datatypes.xsd -e ./cli/jsonata/message.jsonata -o ./src/schema/2.8/
 */
const program = new Command();

program
  .name("hl7v2-util")
  .description("CLI to parse and manipulate HL7v2 messages")
  .version("0.0.2");

program
  .command("parse <message>")
  .description("Parse an HL7v2 message")
  // ====================
  // Options
  // ====================
  .option("-o, --output <char>", "Output file", undefined)
  .option("-l, --logging <char>", "Logging level (warn, info, debug)", "info")
  .option("-v, --validate", "Validate message against JSON Schema", false)
  // ====================
  // Action
  // ====================
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
  // ====================
  // Options
  // ====================
  .option("-e, --expression <char>", "JSONata expression", undefined)
  .option("-l, --logging <char>", "Logging level (warn, info, debug)", "info")
  .option("-o, --output <char>", "Output file", undefined)
  .option("-a, --all", "Convert all XSD files in directory", false)
  .option("-i, --ignore <char>", "Ignore file in array", list)
  // ====================
  // Action
  // ====================
  .action(async (filePath: string, options) => {
    if (options.all) {
      let files = await scanDir(`${filePath}/*.xsd`);
      if (options.ignore) {
        // remove ignored files from array
        files = files.filter(
          (file) => !options.ignore.includes(`${filePath}/${file}`)
        );
      }
      for (const file of files) {
        const parsedMessage = await transformXsd(file, options.expression);
        const output = options.output || undefined;
        if (output && output !== "") {
          // file name without extension
          const fileName = file.split("/").pop()?.split(".")[0];
          fs.writeFileSync(
            `${output}/${fileName}.schema.json`,
            JSON.stringify(parsedMessage, null, 2)
          );
        }
      }
    } else {
      const parsedMessage = await transformXsd(filePath, options.expression);
      const output = options.output || undefined;
      if (output && output !== "") {
        fs.writeFileSync(output, JSON.stringify(parsedMessage, null, 2));
      } else {
        console.dir(parsedMessage, { depth: null, colors: true });
      }
    }
  });

program.parse();
