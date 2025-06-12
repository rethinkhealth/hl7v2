import { DefaultDelimiters, IDelimiters } from "./delimiters";

export interface V2MessageOptions {
  delimiters?: IDelimiters;
}

export interface Field {
  value: string;
  components: string[];
  line: number;
  position: number;
}

export class HL7v2Message {
  readonly raw: string;
  readonly delimiters: IDelimiters;
  private readonly fields: Map<string, Field[]>;

  constructor(raw: string, options?: V2MessageOptions) {
    this.raw = raw;
    this.delimiters = options?.delimiters ?? DefaultDelimiters;
    this.fields = new Map();
    this.parseMessage();
  }

  private parseMessage(): void {
    const lines = this.raw.split(this.delimiters.terminator).filter((s) => s.trim());

    lines.forEach((line, lineIndex) => {
      const fields = line.split(this.delimiters.fieldSeparator);
      const segmentName = fields[0];

      // Skip MSH-1 as it's the segment name
      for (let i = 1; i < fields.length; i++) {
        const fieldValue = fields[i];
        const components = fieldValue.split(this.delimiters.componentSeparator);

        const field: Field = {
          value: fieldValue,
          components,
          line: lineIndex + 1,
          position: i,
        };

        const key = `${segmentName}-${i}`;
        if (!this.fields.has(key)) {
          this.fields.set(key, []);
        }
        this.fields.get(key)?.push(field);
      }
    });
  }

  static parse(raw: string, options?: V2MessageOptions): HL7v2Message {
    return new HL7v2Message(raw, options);
  }

  getField(segmentName: string, fieldNumber: number): Field | undefined {
    const key = `${segmentName}-${fieldNumber}`;
    const fields = this.fields.get(key);
    return fields && fields.length > 0 ? fields[0] : undefined;
  }

  getFields(segmentName: string, fieldNumber: number): Field[] {
    const key = `${segmentName}-${fieldNumber}`;
    return this.fields.get(key) ?? [];
  }

  getComponent(
    segmentName: string,
    fieldNumber: number,
    componentNumber: number
  ): string | undefined {
    const field = this.getField(segmentName, fieldNumber);
    return field?.components[componentNumber - 1];
  }

  getComponents(segmentName: string, fieldNumber: number, componentNumber: number): string[] {
    return this.getFields(segmentName, fieldNumber)
      .map((field) => field.components[componentNumber - 1])
      .filter((comp): comp is string => comp !== undefined);
  }

  toJSON(): Record<string, unknown> {
    const result: Record<string, unknown> = {};

    for (const [key, fields] of this.fields.entries()) {
      const [segmentName, fieldNumber] = key.split("-");
      if (!result[segmentName]) {
        result[segmentName] = {};
      }

      const segmentObj = result[segmentName] as Record<string, unknown>;
      if (fields.length === 1) {
        segmentObj[fieldNumber] =
          fields[0].components.length === 1 ? fields[0].value : fields[0].components;
      } else {
        segmentObj[fieldNumber] = fields.map((f) =>
          f.components.length === 1 ? f.value : f.components
        );
      }
    }

    return result;
  }

  toString(): string {
    return this.raw;
  }
}
