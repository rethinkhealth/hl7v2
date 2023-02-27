import fs from "fs";

import { Command } from "commander";
import { XMLParser } from "fast-xml-parser";

import { MessagingEmitter } from "./emitter";
import { Message } from "./message";
import { Validator } from "./validator";

const program = new Command();

const transformXsd = async (filePath: string, expressionPath?: string) => {
  const xsd = fs.readFileSync(filePath, "utf8");
  console.log(`Converting XSD: ${filePath}...`);

  const parser = new XMLParser({
    ignoreAttributes: false,
  });
  const xml = parser.parse(xsd);
  console.log(`Completed parsing XSD ${filePath}.`);

  if (expressionPath) {
    const jsonataExpression = fs.readFileSync(expressionPath, "utf8");
    // const jsonataResponse = await jsonata(jsonataExpression).evaluate(xml);
    // return jsonataResponse;
  } else {
    return xml;
  }
};

program
  .name("hl7v2-util")
  .description("CLI to parse and manipulate HL7v2 messages")
  .version("0.0.1");

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
    let emitter: MessagingEmitter<any> | undefined;
    const loggingLevel = options.logging;
    if (loggingLevel === "debug") {
      emitter = new MessagingEmitter();
      emitter.on(
        "log",
        (body: any, tree: string, line: number, raw: string, metadata: any) => {
          console.log(body, tree, line, metadata);
        }
      );
      emitter.on(
        "warning",
        (body: any, tree: string, line: number, raw: string, metadata: any) => {
          console.log(body, tree, line, metadata);
        }
      );
      emitter.on("error", (error: Error) => {
        console.log(error);
      });
    }

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

program
  .command("enrich <json>")
  .description("Enrich JSON Schema with additional information")
  .option("-f, --file <char>", "JSON Schema file to enrich", undefined)
  .option(
    "-o, --output <char>",
    "Output file to write transformed message to",
    undefined
  )
  .option("-s, --segments <char>", "Segments JSON Schema file", undefined)
  .action(async (filePath: string, options) => {
    // throw an error is segments is not defined
    if (!options.segments) {
      throw new Error("Segments JSON Schema file is required");
    }

    const source = fs.readFileSync(filePath, "utf8");
    const segments = fs.readFileSync(options.segments, "utf8");

    // Iterate through source properties and enrich with corresponding segment properties
    const sourceProperties = JSON.parse(source);
    const segmentElements = JSON.parse(segments).segments;

    // recursively iterate through source properties and enrich with corresponding segment properties
    const enrich = (sourceProperties: any) => {
      for (const [key, value] of Object.entries(sourceProperties)) {
        if ((value as any).type === "object" && (value as any).properties) {
          enrich((value as any).properties);
        } else {
          console.log(`Enriching ${key}...`);
          const segment = Object.entries(segmentElements).find(
            ([key, value]) => key === (value as any).name
          );
          sourceProperties[key] = { ...sourceProperties[key], ...segment };
        }
      }
    };
    enrich(sourceProperties.properties);
    if (options.output) {
      fs.writeFileSync(
        options.output,
        JSON.stringify(sourceProperties, null, 2)
      );
    } else {
      console.dir(sourceProperties, { depth: null, colors: true });
    }
  });

program.parse();

// pnpm cli convert ./xml/segments.xsd -e ./src/jsonata/segments.jsonata -o ./src/schema/segements.json
// pnpm cli convert ./xml/fields.xsd -e ./src/jsonata/fields.jsonata -o ./src/schema/fields.json
// pnpm cli convert ./xml/SIU_S12.xsd -e ./src/jsonata/message.jsonata -o ./src/schema/SIU.schema.json
// pnpm cli convert ./xml/VXU_V04.xsd -e ./src/jsonata/message.jsonata -o ./src/schema/SIU.schema.json
