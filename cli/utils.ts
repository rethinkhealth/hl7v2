import fs from "fs";

import { XMLParser } from "fast-xml-parser";
import jsonata from "jsonata";
import glob from "tiny-glob";

import { MessagingEmitter } from "../src";

export const scanDir = async (val: string) => {
  return await glob(val);
};

export const transformXsd = async (
  filePath: string,
  expressionPath?: string
) => {
  const xsd = fs.readFileSync(filePath, "utf8");

  const parser = new XMLParser({
    ignoreAttributes: false,
  });
  const xml = parser.parse(xsd);

  if (expressionPath) {
    const jsonataExpression = fs.readFileSync(expressionPath, "utf8");
    const jsonataResponse = await jsonata(jsonataExpression).evaluate(xml);
    return jsonataResponse;
  } else {
    return xml;
  }
};

export const setupEmitter = (
  options: any
): MessagingEmitter<any> | undefined => {
  let emitter: MessagingEmitter<any> | undefined;
  const loggingLevel = options.logging;
  if (loggingLevel === "debug") {
    emitter = new MessagingEmitter();
    emitter.on("log", (body: any, line: number, raw: string, metadata: any) => {
      console.log(body, line, metadata);
    });
    emitter.on(
      "warning",
      (body: any, line: number, raw: string, metadata: any) => {
        console.log(body, line, metadata);
      }
    );
    emitter.on("error", (error: Error) => {
      console.log(error);
    });
  }
  return emitter;
};
