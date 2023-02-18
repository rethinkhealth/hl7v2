import fs from "fs";

import { Command } from "commander";
import { XMLParser } from "fast-xml-parser";
import jsonata from "jsonata";

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
  .option(
    "-o, --output <char>",
    "Output file to write transformed message to",
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
      fs.writeFileSync(options.output, jsonataResponse);
    } else {
      fs.writeFileSync(options.output, parsedMessage.toString());
    }
  });

program
  // TODO: Add convert XSD to JSON Schema using xsd2jsonschema
  .command("convert <xsd>")
  .description("Convert XSD to JSON Schema")
  .option(
    "-e, --expression <char>",
    "JSONata expression to transform message",
    undefined
  )
  .option(
    "-o, --output <char>",
    "Output file to write transformed message to",
    undefined
  )
  .action(async (filePath: string, options) => {
    const xsd = fs.readFileSync(filePath, "utf8");
    console.log(`Converting XSD: ${filePath}`);

    const parser = new XMLParser({
      ignoreAttributes: false,
    });
    const xml = parser.parse(xsd);

    let results = xml;

    const expression = options.expression || undefined;
    if (expression && expression !== "") {
      const jsonataExpression = fs.readFileSync(expression, "utf8");
      const jsonataResponse = await jsonata(jsonataExpression).evaluate(xml);
      results = jsonataResponse;
    }

    if (options.output)
      fs.writeFileSync(options.output, JSON.stringify(results, null, 2));
    else console.dir(results, { depth: null, colors: true });
  });

program.parse();
