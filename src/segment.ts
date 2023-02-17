import jsonata from "jsonata";

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
  transform(expression: string): Promise<any>;
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

  abstract elements: IElement[];

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
    this.elements.forEach((element) => {
      response[element.sequence] = element.toJson();
    });
    return response;
  }

  public async transform(expression: string) {
    const jsonataExpression = jsonata(expression);
    return await jsonataExpression.evaluate({
      [`${this.name.toString()}`]: this.toJson(),
    });
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
  private _elements: IElement[];
  public get elements(): IElement[] {
    return this._elements;
  }

  constructor(segment: string, options?: SegmentOptions) {
    super(segment, options);
    this._elements = [];

    this.setupElements();
  }

  private setupElements() {
    const elements = this.raw.split(this.delimiters.fieldSeparator);
    // Create the elements by running through the elements
    elements
      // ignore the first element because it is the name of the segment
      .slice(1)
      // run through the elements
      .forEach((value, index) => {
        const sequence = index + SEQUENCE_STARTING_INDEX;
        const element = new Element(value, sequence.toString(), {
          delimiters: this.delimiters,
        });
        this.elements.push(element);
      });
  }
}
