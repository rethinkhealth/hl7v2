import { SEQUENCE_STARTING_INDEX } from "./constants";
import { DefaultDelimiters } from "./delimiters";
import { Element, IElement } from "./element";
import { SegmentBase } from "./segment";

export class MessageHeader extends SegmentBase {
  private _elements: IElement[];
  public get elements(): IElement[] {
    return this._elements;
  }

  constructor(segment: string) {
    const delimiters = MessageHeader.retrieveDelimiters(segment);

    super(segment, { delimiters });
    this._elements = [];

    // Validation
    if (segment.startsWith("MSH", 0) === false) {
      throw new Error("Message header must start with MSH");
    }

    this.setupElements();
  }

  static retrieveDelimiters(message: string) {
    // The Encoding Characters field contains five characters in the following
    // order: the component separator, repetition separator, escape character,
    // subComponent separator, and truncation character.
    return {
      terminator: DefaultDelimiters.terminator,
      fieldSeparator: message[3],
      componentSeparator: message[4],
      repeatSeparator: message[5],
      escapeSeparator: message[6],
      subComponentSeparator: message[7],
      // FIXME: This is not part of the standard: truncation character
    };
  }

  private setupElements() {
    // Adding the field separator as an element
    this.elements.push(new Element(this.raw[3], "1"));
    // Adding the delimiters as an element
    this.elements.push(new Element(this.raw.slice(4, 8), "2"));

    const rawElements = this.raw.split(this.delimiters.fieldSeparator);
    // Adding the rest of the elements
    rawElements
      // ignore the first element because it is the name of the segment
      .slice(2)
      // run through the elements
      .forEach((value, index) => {
        const sequence = index + SEQUENCE_STARTING_INDEX + 2;
        const element = new Element(value, sequence.toString(), {
          delimiters: this.delimiters,
        });
        this.elements.push(element);
      });
  }
}
