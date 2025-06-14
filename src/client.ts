import { DefaultDelimiters, type IDelimiters } from "./delimiters";
import type { MessageJSON, MessageSegment, Segment } from "./types";
import { HL7v2Error, SegmentError } from "./types/errors";

export interface HL7v2ClientOptions {
  delimiters?: IDelimiters;
}

export class HL7v2Client {
  private readonly delimiters: IDelimiters;

  constructor(options?: HL7v2ClientOptions) {
    this.delimiters = options?.delimiters ?? DefaultDelimiters;
  }

  parse(raw: string): MessageJSON {
    const segments = new Map<string, Segment[]>();
    const lines = raw.split(this.delimiters.terminator).filter((s) => s.trim());
    const segmentCounts = new Map<string, number>();

    for (const line of lines) {
      const segmentName = line.split(this.delimiters.fieldSeparator)[0];

      if (segmentName.length < 3) {
        throw new SegmentError(segmentName, "Segment name must be at least 3 characters");
      }

      const instanceNumber = (segmentCounts.get(segmentName) ?? 0) + 1;
      segmentCounts.set(segmentName, instanceNumber);

      const segment: Segment = {
        name: segmentName,
        fields: new Map(),
        instance: instanceNumber
      };

      try {
        this.parseSegment(line, segment);

        if (!segments.has(segmentName)) {
          segments.set(segmentName, []);
        }
        segments.get(segmentName)?.push(segment);
      } catch (error: unknown) {
        if (error instanceof HL7v2Error) {
          throw error;
        }
        throw new SegmentError(
          segmentName,
          `Failed to parse segment: ${error instanceof Error ? error.message : String(error)}`
        );
      }
    }

    return this.toJSON(segments);
  }

  private parseSegment(line: string, segment: Segment): void {
    const segmentName = segment.name;

    if (segmentName === "MSH") {
      this.parseMSHSegment(line, segment);
    } else {
      this.parseRegularSegment(line, segment);
    }
  }

  private async parseSegmentAsync(line: string, segment: Segment): Promise<void> {
    // In the async version, we can potentially do more complex async operations
    // For now, we'll just use the sync version but wrapped in a Promise
    return new Promise((resolve, reject) => {
      try {
        this.parseSegment(line, segment);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  private parseMSHSegment(line: string, segment: Segment): void {
    if (line.length < 8) {
      throw new SegmentError("MSH", "MSH segment must be at least 8 characters long");
    }

    // MSH.1 is the field separator (|) at position 3
    const fieldSeparator = line.substring(3, 4);
    // MSH.2 is the encoding characters (^~\\&) at positions 4-7
    const encodingChars = line.substring(4, 8);

    // Add MSH.1 and MSH.2 as special fields (no component parsing for MSH.2)
    this.addFieldToSegment(segment, "1", fieldSeparator, 1, false);
    this.addFieldToSegment(segment, "2", encodingChars, 2, false);

    // Parse remaining fields starting from MSH.3
    const remainingPart = line.substring(9);
    const remainingFields = remainingPart.split(fieldSeparator);
    this.parseFields(segment, remainingFields, 3);
  }

  private parseRegularSegment(line: string, segment: Segment): void {
    // Parse fields starting from position 1
    const fields = line.substring(4).split(this.delimiters.fieldSeparator);
    this.parseFields(segment, fields, 1);
  }

  private parseFields(segment: Segment, fields: string[], startPosition: number): void {
    for (let index = 0; index < fields.length; index++) {
      const value = fields[index];
      const fieldNumber = (index + startPosition).toString();
      const position = index + startPosition;
      this.addFieldToSegment(segment, fieldNumber, value, position);
    }
  }

  private addFieldToSegment(
    segment: Segment,
    fieldNumber: string,
    value: string,
    position: number,
    parseComponents = true
  ): void {
    segment.fields.set(fieldNumber, [
      {
        value,
        components:
          parseComponents && value ? value.split(this.delimiters.componentSeparator) : [value],
        repeats:
          parseComponents && value
            ? value.split(this.delimiters.repeatSeparator).map((repeat) => {
                const components = repeat.split(this.delimiters.componentSeparator);
                const obj: Record<string, string> = {};
                components.forEach((comp, idx) => {
                  obj[(idx + 1).toString()] = comp;
                });
                return obj;
              })
            : [],
        position
      }
    ]);
  }

  private toJSON(segments: Map<string, Segment[]>): MessageJSON {
    const result = {} as MessageJSON;

    for (const [segmentName, segmentList] of segments.entries()) {
      if (segmentList.length === 1) {
        // Single instance segment
        const segment = segmentList[0];
        const segmentObj: {
          [key: string]: string | Record<string, string> | Record<string, string>[];
        } = {};

        for (const [fieldNumber, fields] of segment.fields.entries()) {
          const field = fields[0];
          if (field.repeats.length > 1) {
            segmentObj[fieldNumber] = field.repeats;
          } else if (field.components.length > 1) {
            const componentObj: Record<string, string> = {};
            field.components.forEach((comp, index) => {
              componentObj[(index + 1).toString()] = comp;
            });
            segmentObj[fieldNumber] = componentObj;
          } else {
            segmentObj[fieldNumber] = field.value;
          }
        }
        result[segmentName] = segmentObj;
      } else {
        // Multiple instances segment
        result[segmentName] = segmentList.map((segment) => {
          const segmentObj: {
            [key: string]: string | Record<string, string> | Record<string, string>[];
          } = {};
          for (const [fieldNumber, fields] of segment.fields.entries()) {
            const field = fields[0];
            if (field.repeats.length > 1) {
              segmentObj[fieldNumber] = field.repeats;
            } else if (field.components.length > 1) {
              const componentObj: Record<string, string> = {};
              field.components.forEach((comp, index) => {
                componentObj[(index + 1).toString()] = comp;
              });
              segmentObj[fieldNumber] = componentObj;
            } else {
              segmentObj[fieldNumber] = field.value;
            }
          }
          return segmentObj;
        });
      }
    }

    return result;
  }

  generate(json: MessageJSON): string {
    const lines: string[] = [];
    let delimiters = this.delimiters;

    // Check if MSH segment exists and validate it
    if (json.MSH) {
      if (Array.isArray(json.MSH)) {
        throw new HL7v2Error("MSH segment cannot be an array");
      }

      const mshSegment = json.MSH;
      const fieldSep = mshSegment["1"];
      const encodingChars = mshSegment["2"];

      // Validate and use custom delimiters if provided
      if (typeof fieldSep === "string" && typeof encodingChars === "string") {
        if (fieldSep.length !== 1) {
          throw new HL7v2Error("MSH.1 (field separator) must be exactly one character");
        }
        if (encodingChars.length !== 4) {
          throw new HL7v2Error("MSH.2 (encoding characters) must be exactly four characters");
        }

        delimiters = {
          ...this.delimiters,
          fieldSeparator: fieldSep,
          componentSeparator: encodingChars[0],
          repeatSeparator: encodingChars[1],
          escapeSeparator: encodingChars[2],
          subComponentSeparator: encodingChars[3]
        };
      }
    }

    // Process each segment in the JSON
    for (const [segmentName, segmentData] of Object.entries(json)) {
      if (segmentName === "MSH") {
        // MSH is always a single instance
        lines.push(this.generateSegment(segmentName, segmentData as MessageSegment, delimiters));
      } else if (Array.isArray(segmentData)) {
        // Handle multiple instances of the same segment
        for (const instance of segmentData) {
          lines.push(this.generateSegment(segmentName, instance, delimiters));
        }
      } else {
        // Handle single instance segment
        lines.push(this.generateSegment(segmentName, segmentData, delimiters));
      }
    }

    return lines.join(delimiters.terminator) + delimiters.terminator;
  }

  private generateSegment(
    segmentName: string,
    segmentData: MessageSegment,
    delimiters: IDelimiters
  ): string {
    const fields: string[] = [segmentName];
    let runningFieldNumber = 1;
    let dataToProcess = segmentData;

    // Special handling for MSH segment
    if (segmentName === "MSH") {
      // Add field encoding characters
      fields.push(
        delimiters.componentSeparator +
          delimiters.repeatSeparator +
          delimiters.escapeSeparator +
          delimiters.subComponentSeparator
      );

      // Remove the MSH.1 and MSH.2
      const { "1": _, "2": __, ...rest } = segmentData;
      dataToProcess = rest;

      // Update the running field number to 3
      runningFieldNumber = 3;
    }

    // Process each field in the segment
    for (const [fieldNumber, fieldValue] of Object.entries(dataToProcess)) {
      const currentFieldNumber = Number.parseInt(fieldNumber);

      if (currentFieldNumber < runningFieldNumber) {
        throw new HL7v2Error(
          `Field ${fieldNumber} is out of order. Expected at least ${runningFieldNumber + 1}`
        );
      }

      // Add empty fields for missing fields
      while (currentFieldNumber > runningFieldNumber) {
        fields.push("");
        runningFieldNumber++;
      }

      // Generate the field string
      const fieldStr = this.generateField(fieldValue, delimiters);
      fields.push(fieldStr);
      runningFieldNumber++;
    }

    return fields.join(delimiters.fieldSeparator);
  }

  private generateField(
    fieldValue: string | Record<string, string> | Record<string, string>[],
    delimiters: IDelimiters
  ): string {
    if (typeof fieldValue === "string") {
      return fieldValue;
    }

    if (Array.isArray(fieldValue)) {
      // Handle repeating fields
      return fieldValue
        .map((repeat) => {
          const components = Object.entries(repeat)
            .sort(([a], [b]) => Number.parseInt(a) - Number.parseInt(b))
            .map(([_, value]) => value);
          return components.join(delimiters.componentSeparator);
        })
        .join(delimiters.repeatSeparator);
    }

    // Handle component fields
    const components = Object.entries(fieldValue)
      .sort(([a], [b]) => Number.parseInt(a) - Number.parseInt(b))
      .map(([_, value]) => value);
    return components.join(delimiters.componentSeparator);
  }
}
