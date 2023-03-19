import fs from "fs";

import { XMLParser } from "fast-xml-parser";
import jsonata from "jsonata";
import glob from "tiny-glob";

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
