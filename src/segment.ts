import { SEQUENCE_STARTING_INDEX } from "./constants";
import { DefaultDelimiters, IDelimiters } from "./delimiters";
import { Element, IElement } from "./element";
import { SegmentType } from "./enum";

export interface ISegment {
  delimiters: IDelimiters;
  elements: IElement[];
  name: SegmentType;
  raw: string;
  toJson(): any;
}

export interface SegmentOptions {
  delimiters: IDelimiters;
}

export class Segment implements ISegment {
  public readonly raw: string;

  private _delimiters: IDelimiters;
  public get delimiters(): IDelimiters {
    return this._delimiters;
  }

  private _name: SegmentType;
  public get name(): SegmentType {
    return this._name;
  }

  private _elements: IElement[];
  public get elements(): IElement[] {
    return this._elements;
  }

  constructor(segment: string, private options?: SegmentOptions) {
    this.raw = segment;
    this._elements = [];
    this._name = "" as any;
    this._delimiters = {} as any;

    // Configuration steps
    this.setupDelimiters();
    this.setupName();
    this.setupElements();
  }

  public toJson() {
    const response = {} as any;
    this.elements.forEach((element) => {
      response[element.sequence] = element.toJson();
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

  private setupElements() {
    const elements = this.raw.split(this.delimiters.fieldSeparator);
    // Create the elements by running through the elements
    elements.forEach((value, index) => {
      const sequence = index + SEQUENCE_STARTING_INDEX;
      const element = new Element(value, sequence.toString(), {
        delimiters: this._delimiters,
      });
      this._elements.push(element);
    });
  }
}
