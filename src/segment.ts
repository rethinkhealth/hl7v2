import { SEQUENCE_STARTING_INDEX } from "./constants";
import { DefaultDelimiters, IDelimiters } from "./delimiters";
import { Element, IElement } from "./element";

export interface ISegment {
  delimiters: IDelimiters;
  fields: IElement[];
  line: number | undefined;
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

  constructor(segment: string, private options?: SegmentOptions) {
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
      response[field.sequence] = field.toJson();
    });
    return response;
  }

  private setupLine() {
    this._line = this.options?.line;
  }

  private setupDelimiters() {
    this._delimiters = this.options?.delimiters || DefaultDelimiters;
  }

  private setupName() {
    const name = this.raw.split(this.delimiters.fieldSeparator)[0];
    // if (!Object.values(SegmentType).includes(name as unknown as SegmentType)) {
    //   // TODO: Make it custom error handling for better management of errors.
    //   throw new Error(
    //     `Segment name not recognized. ${name} is not in the list.`
    //   );
    // }
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
