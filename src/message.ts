import { DefaultDelimiters, type IDelimiters } from "./delimiters";

export interface V2MessageOptions {
  delimiters?: IDelimiters;
}

interface Field {
  value: string;
  components: string[];
  repeats: Record<string, string>[];
  position: number;
}

interface Segment {
  name: string;
  fields: Map<string, Field[]>;
  instance: number;
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
      const segmentName = line.substring(0, 3);
      const instanceNumber = (segmentCounts.get(segmentName) ?? 0) + 1;
      segmentCounts.set(segmentName, instanceNumber);

      const segment: Segment = {
        name: segmentName,
        fields: new Map(),
        instance: instanceNumber
      };

      // Handle MSH segment specially
      if (segmentName === "MSH") {
        // MSH.1 is the field separator (|) at position 3
        const fieldSeparator = line.substring(3, 4);
        // MSH.2 is the encoding characters (^~\\&) at positions 4-7
        const encodingChars = line.substring(4, 8);
        // Get remaining fields after MSH.2
        const remainingPart = line.substring(9);
        const remainingFields = remainingPart.split(fieldSeparator);

        // Add MSH.1 and MSH.2
        segment.fields.set("1", [
          {
            value: fieldSeparator,
            components: [fieldSeparator],
            repeats: [],
            position: 1
          }
        ]);

        segment.fields.set("2", [
          {
            value: encodingChars,
            components: [encodingChars], // Keep MSH.2 as is
            repeats: [],
            position: 2
          }
        ]);

        // Add remaining fields
        for (let index = 0; index < remainingFields.length; index++) {
          const value = remainingFields[index];
          const fieldNumber = (index + 3).toString();
          segment.fields.set(fieldNumber, [
            {
              value,
              components: value ? value.split(this.delimiters.componentSeparator) : [""],
              repeats: value
                ? value.split(this.delimiters.repeatSeparator).map((repeat) => {
                    const components = repeat.split(this.delimiters.componentSeparator);
                    const obj: Record<string, string> = {};
                    components.forEach((comp, idx) => {
                      obj[(idx + 1).toString()] = comp;
                    });
                    return obj;
                  })
                : [],
              position: index + 3
            }
          ]);
        }
      } else {
        // Handle non-MSH segments
        const fields = line.substring(4).split(this.delimiters.fieldSeparator);
        for (let index = 0; index < fields.length; index++) {
          const value = fields[index];
          const fieldNumber = (index + 1).toString();
          segment.fields.set(fieldNumber, [
            {
              value,
              components: value ? value.split(this.delimiters.componentSeparator) : [""],
              repeats: value
                ? value.split(this.delimiters.repeatSeparator).map((repeat) => {
                    const components = repeat.split(this.delimiters.componentSeparator);
                    const obj: Record<string, string> = {};
                    components.forEach((comp, idx) => {
                      obj[(idx + 1).toString()] = comp;
                    });
                    return obj;
                  })
                : [],
              position: index + 1
            }
          ]);
        }
      }

      if (!this.segments.has(segmentName)) {
        this.segments.set(segmentName, []);
      }
      this.segments.get(segmentName)?.push(segment);
    }
  }

  getField(segmentName: string, fieldNumber: number, instanceNumber = 1): Field | undefined {
    return this.segments
      .get(segmentName)
      ?.[instanceNumber - 1]?.fields.get(fieldNumber.toString())?.[0];
  }

  getFields(segmentName: string, fieldNumber: number, instanceNumber = 1): Field[] {
    return (
      this.segments.get(segmentName)?.[instanceNumber - 1]?.fields.get(fieldNumber.toString()) ?? []
    );
  }

  getComponent(
    segmentName: string,
    fieldNumber: number,
    componentNumber: number,
    instanceNumber = 1
  ): string | undefined {
    return this.getField(segmentName, fieldNumber, instanceNumber)?.components[componentNumber - 1];
  }

  getComponents(
    segmentName: string,
    fieldNumber: number,
    componentNumber: number,
    instanceNumber = 1
  ): string[] {
    return this.getFields(segmentName, fieldNumber, instanceNumber)
      .map((field) => field.components[componentNumber - 1])
      .filter((comp): comp is string => comp !== undefined);
  }

  toJSON(): Record<string, unknown> {
    const result: Record<string, unknown> = {};

    for (const [segmentName, segments] of this.segments.entries()) {
      if (segments.length === 1) {
        // Single instance segment
        const segment = segments[0];
        const segmentObj: Record<string, unknown> = {};

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
          const segmentObj: Record<string, unknown> = {};
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
