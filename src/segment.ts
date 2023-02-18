import { SEQUENCE_STARTING_INDEX } from "./constants";
import { DefaultDelimiters, IDelimiters } from "./delimiters";
import { Element, IElement } from "./element";
import { SegmentType } from "./enum";

export interface ISegment {
  delimiters: IDelimiters;
  fields: IElement[];
  name: SegmentType;
  raw: string;
  toJson(): any;
}

export interface SegmentOptions {
  delimiters: IDelimiters;
}

export abstract class SegmentBase implements ISegment {
  public readonly raw: string;

  private _delimiters: IDelimiters;
  public get delimiters(): IDelimiters {
    return this._delimiters;
  }

  private _name: SegmentType;
  public get name(): SegmentType {
    return this._name;
  }

  abstract fields: IElement[];

  constructor(segment: string, private options?: SegmentOptions) {
    this.raw = segment;
    this._name = "" as any;
    this._delimiters = {} as any;

    // Configuration steps
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

  private setupDelimiters() {
    this._delimiters = this.options?.delimiters || DefaultDelimiters;
  }

  private setupName() {
    const name = this.raw.split(this.delimiters.fieldSeparator)[0];
    if (!Object.values(SegmentType).includes(name as unknown as SegmentType)) {
      // TODO: Make it custom error handling for better management of errors.
      throw new Error(
        `Segment name not recognized. ${name} is not in the list.`
      );
    }
    this._name = SegmentType[name as keyof typeof SegmentType];
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
