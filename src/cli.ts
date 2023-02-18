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
  .action(async (filePath: string) => {
    const message = fs.readFileSync(filePath, "utf8");
    console.log(`Parsing message: ${message}`);
    const parsedMessage = new Message(message);
    console.dir(parsedMessage.toJson(), { depth: null, colors: true });
  });

program.parse();
