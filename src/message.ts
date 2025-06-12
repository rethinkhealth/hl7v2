import { DefaultDelimiters, IDelimiters } from "./delimiters";
import { Segment } from "./segment";

export interface V2MessageOptions {
  delimiters?: IDelimiters;
}

export class HL7v2Message {
  readonly raw: string;
  readonly delimiters: IDelimiters;
  readonly segments: Segment[];
  private readonly segmentMap: Record<string, Segment[]>;

  constructor(raw: string, options?: V2MessageOptions) {
    this.raw = raw;
    this.delimiters = options?.delimiters ?? DefaultDelimiters;
    this.segments = this.raw
      .split(this.delimiters.terminator)
      .filter((s) => s)
      .map(
        (segment, index) =>
          new Segment(segment, {
            delimiters: this.delimiters,
            line: index + 1,
          })
      );
    this.segmentMap = {};
    for (const segment of this.segments) {
      const name = segment.name;
      if (!this.segmentMap[name]) {
        this.segmentMap[name] = [];
      }
      this.segmentMap[name].push(segment);
    }
  }

  static parse(raw: string, options?: V2MessageOptions): HL7v2Message {
    return new HL7v2Message(raw, options);
  }

  getSegment(name: string): Segment | undefined {
    const list = this.segmentMap[name];
    return list && list.length > 0 ? list[0] : undefined;
  }

  getSegments(name: string): Segment[] {
    return this.segmentMap[name] ?? [];
  }

  toJSON(): Record<string, unknown> {
    const result: Record<string, unknown> = {};
    for (const [name, segments] of Object.entries(this.segmentMap)) {
      result[name] = segments.map((s) => s.toJson());
    }
    return result;
  }

  toString(): string {
    return this.raw;
  }
}
