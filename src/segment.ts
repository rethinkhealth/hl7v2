import { SEQUENCE_STARTING_INDEX } from "./constants";
import { DefaultDelimiters, IDelimiters } from "./delimiters";
import { Element, IElement } from "./element";

/**
 * A segment is a logical grouping of data fields. Segments of a message may be
 * required or optional. They may occur only once in a message or they may be
 * allowed to repeat. Each segment is given a name. For example, the ADT message
 * may contain the following segments: Message Header (MSH), Event Type (EVN),
 * Patient ID (PID), and Patient Visit (PV1).
 *
 * References:
 * - http://www.hl7.eu/HL7v2x/v251/std251/ch02.html#Heading12
 */
export interface ISegment {
  delimiters: IDelimiters;
  fields: IElement[];
  line: number | undefined;
  /**
   * Name of the segment.
   *
   * Each segment is identified by a unique three-character code known as the
   * Segment ID.
   */
  name: string;
  raw: string;
  toJson(): any;
}

export interface SegmentOptions {
  delimiters?: IDelimiters | undefined;
  line?: number | undefined;
}

export abstract class SegmentBase implements ISegment {
  public readonly raw: string;

  private _delimiters: IDelimiters;
  public get delimiters(): IDelimiters {
    return this._delimiters;
  }

  private _name: string;
  public get name(): string {
    return this._name;
  }

  private _line: number | undefined;
  public get line(): number | undefined {
    return this._line;
  }

  abstract fields: IElement[];

  constructor(segment: string, readonly options?: SegmentOptions) {
    this.raw = segment;

    // Initialize the values
    this._name = "" as any;
    this._delimiters = {} as any;
    this._line = undefined;

    // Configuration steps
    this.setupLine();
    this.setupDelimiters();
    this.setupName();
  }

  public toJson() {
    const response = {} as any;
    this.fields.forEach((field) => {
      response[`${this.name}.${field.sequence}`] = field.toJson();
    });
    return response;
  }

  protected findField(index: number): IElement | undefined {
    const field = this.fields.find((f) => f.sequence === index.toString());
    if (!field) return undefined;
    else return field;
  }

  private setupLine() {
    this._line = this.options?.line;
  }

  private setupDelimiters() {
    this._delimiters = this.options?.delimiters || DefaultDelimiters;
  }

  private setupName() {
    const name = this.raw.split(this.delimiters.fieldSeparator)[0];
    this._name = name;
  }
}

export class Segment extends SegmentBase {
  private _fields: IElement[];
  public get fields(): IElement[] {
    return this._fields;
  }

  constructor(segment: string, options?: SegmentOptions) {
    super(segment, options);
    this._fields = [];

    this.setupElements();
  }

  private setupElements() {
    const fields = this.raw.split(this.delimiters.fieldSeparator);
    // Create the elements by running through the elements
    fields
      // ignore the first element because it is the name of the segment
      .slice(1)
      // run through the elements
      .forEach((value, index) => {
        const sequence = index + SEQUENCE_STARTING_INDEX;
        const element = new Element(value, sequence.toString(), {
          delimiters: this.delimiters,
        });
        this.fields.push(element);
      });
  }
}
