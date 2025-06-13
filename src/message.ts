import { DefaultDelimiters, type IDelimiters } from "./delimiters";
import type {
  Segment,
  MessageJSON,
  MessageSegment,
} from "./types";
import {
  HL7v2Error,
  SegmentError,
} from "./types/errors";

export interface V2MessageOptions {
  delimiters?: IDelimiters;
}

export class HL7v2Message {
  readonly raw: string;
  readonly delimiters: IDelimiters;
  private readonly segments: Map<string, Segment[]>;

  constructor(raw: string, options?: V2MessageOptions) {
    this.raw = raw;
    this.delimiters = options?.delimiters ?? DefaultDelimiters;
    this.segments = new Map();
    this.parseMessage();
  }

  private parseMessage(): void {
    const lines = this.raw.split(this.delimiters.terminator).filter((s) => s.trim());
    const segmentCounts = new Map<string, number>();

    for (const line of lines) {
      if (line.length < 3) {
        throw new SegmentError("UNKNOWN", "Segment name must be at least 3 characters");
      }

      const segmentName = line.substring(0, 3);
      const instanceNumber = (segmentCounts.get(segmentName) ?? 0) + 1;
      segmentCounts.set(segmentName, instanceNumber);

      const segment: Segment = {
        name: segmentName,
        fields: new Map(),
        instance: instanceNumber
      };

      try {
        this.parseSegment(line, segment);

        if (!this.segments.has(segmentName)) {
          this.segments.set(segmentName, []);
        }
        this.segments.get(segmentName)?.push(segment);
      } catch (error: unknown) {
        if (error instanceof HL7v2Error) {
          throw error;
        }
        throw new SegmentError(segmentName, `Failed to parse segment: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
  }

  private parseSegment(line: string, segment: Segment): void {
    const segmentName = segment.name;
    
    if (segmentName === "MSH") {
      this.parseMSHSegment(line, segment);
    } else {
      this.parseRegularSegment(line, segment);
    }
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

  private addFieldToSegment(segment: Segment, fieldNumber: string, value: string, position: number, parseComponents: boolean = true): void {
    segment.fields.set(fieldNumber, [
      {
        value,
        components: parseComponents && value ? value.split(this.delimiters.componentSeparator) : [value],
        repeats: parseComponents && value
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

  toJSON(): MessageJSON {
    const result: MessageJSON = {};

    for (const [segmentName, segments] of this.segments.entries()) {
      if (segments.length === 1) {
        // Single instance segment
        const segment = segments[0];
        const segmentObj: MessageSegment = {};

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
        result[segmentName] = segments.map((segment) => {
          const segmentObj: MessageSegment = {};
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

  toString(): string {
    return this.raw;
  }
}
