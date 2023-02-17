import fs from "fs";

import { Command } from "commander";

import { Message } from "./message";

const program = new Command();

program
  .name("hl7v2-util")
  .description("CLI to parse and manipulate HL7v2 messages")
  .version("0.0.1");

program
  .command("parse <message>")
  .description("Parse an HL7v2 message")
  .option(
    "-e, --expression <char>",
    "JSONata expression to transform message",
    undefined
  )
  .action(async (filePath: string, options) => {
    const message = fs.readFileSync(filePath, "utf8");
    console.log(`Parsing message: ${message}`);
    const parsedMessage = new Message(message);

    const expression = options.expression || undefined;
    if (expression && expression !== "") {
      const jsonata = fs.readFileSync(expression, "utf8");
      const jsonataResponse = await parsedMessage.transform(jsonata);
      console.dir(jsonataResponse, { depth: null, colors: true });
    } else {
      console.dir(parsedMessage.toJson(), { depth: null, colors: true });
    }
  });

program.parse();
