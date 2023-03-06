import _ from "lodash";

import { SEQUENCE_STARTING_INDEX } from "./constants";
import { DefaultDelimiters } from "./delimiters";
import { Element, IElement } from "./element";
import { SegmentBase } from "./segment";
export class MessageHeader extends SegmentBase {
  private _fields: IElement[];
  public get fields(): IElement[] {
    return this._fields;
  }

  public get messageType(): string {
    const msh9 = this.fields.find((f) => f.sequence === "9");
    const type = (msh9?.value as IElement[]).find(
      (e) => e.sequence === "1"
    )?.value;
    const triggerEvent = (msh9?.value as IElement[]).find(
      (e) => e.sequence === "2"
    )?.value;
    if (!type || !triggerEvent)
      throw new Error("Message type or trigger event is missing");
    else return `${type}_${triggerEvent}`;
  }

  public get version(): string {
    const msh12 = this.fields.find((f) => f.sequence === "12")?.value;
    // Check if string or  IElement[]
    if (_.isString(msh12)) return msh12;
    else {
      const version = (msh12 as IElement[]).find(
        (e) => e.sequence === "1"
      )?.value;
      if (!version) throw new Error("Version is missing");
      else return version as string;
    }
  }

  constructor(segment: string) {
    const delimiters = MessageHeader.retrieveDelimiters(segment);

    super(segment, { delimiters, line: SEQUENCE_STARTING_INDEX });
    this._fields = [];

    // Validation
    if (segment.startsWith("MSH", 0) === false) {
      throw new Error("Message header must start with MSH");
    }

    this.setupFields();
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

  private setupFields() {
    // Adding the field separator as an element
    this.fields.push(new Element(this.raw[3], "1"));
    // Adding the delimiters as an element
    this.fields.push(new Element(this.raw.slice(4, 8), "2"));

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
        this.fields.push(element);
      });
  }
}
