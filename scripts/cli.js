#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { createInterface } from "node:readline";
import { program } from "commander";
import { HL7v2Message } from "../dist/index.js";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const promptForMessage = () => {
  return new Promise((resolve) => {
    console.log("Enter your HL7v2 message (press Enter twice when done):");
    let message = "";
    let lastLine = "";

    rl.on("line", (line) => {
      if (line === "" && lastLine === "") {
        rl.close();
        resolve(message.trim());
      } else {
        message += `${line}\r`;
        lastLine = line;
      }
    });
  });
};

program.name("hl7v2-to-json").description("Convert HL7v2 messages to JSON format").version("1.0.0");

program
  .command("parse")
  .description("Parse an HL7v2 message and output as JSON")
  .argument("[message]", "HL7v2 message to parse (optional)")
  .option("-f, --file", "Treat input as a file path")
  .action(async (message, options) => {
    try {
      let input;
      if (message) {
        input = options.file ? readFileSync(message, "utf-8") : message;
      } else {
        input = await promptForMessage();
      }

      if (!input.trim()) {
        console.error("Error: No message provided");
        process.exit(1);
      }

      const parsed = new HL7v2Message(input).toJSON();
      console.log(JSON.stringify(parsed, null, 2));
    } catch (error) {
      console.error("Error parsing HL7v2 message:", error.message);
      process.exit(1);
    }
  });

program.parse();
