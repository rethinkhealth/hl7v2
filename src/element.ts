import { SEQUENCE_STARTING_INDEX } from "./constants";
import { IDelimiters } from "./delimiters";

export interface IElement {
  sequence: string;
  toJson(): any;
  value: string | IElement[];
}

export interface ElementOptions {
  delimiters?: IDelimiters;
}

export class Element implements IElement {
  private readonly options: ElementOptions | undefined;
  private readonly raw: string;

  public readonly sequence: string;

  private _value: string | IElement[];
  public get value(): string | IElement[] {
    return this._value;
  }

  constructor(value: string, sequence: string, options?: ElementOptions) {
    this.raw = value;
    this.sequence = sequence;
    this.options = options;

    // Setup the initial value
    this._value = this.raw;

    if (this.options?.delimiters) {
      // FIXME: Refactor into components and subcomponents
      this.parseValueForSeparator(this.options.delimiters.repeatSeparator) ||
        this.parseValueForSeparator(this.options.delimiters.componentSeparator);
    }
  }

  public toJson() {
    if (typeof this.value === "string") {
      return this.value;
    } else {
      const response = {} as any;
      this.value.forEach((element) => {
        response[element.sequence] = element.toJson();
      });
      return response;
    }
  }

  // !Private setup
  private parseValueForSeparator(separator: string): boolean {
    if (this.raw.includes(separator)) {
      const values = this.raw.split(separator);
      this._value = values.map(
        (value, index) =>
          new Element(
            value,
            (index + SEQUENCE_STARTING_INDEX).toString(),
            this.options
          )
      );
      return true;
    }
    return false;
  }
}
