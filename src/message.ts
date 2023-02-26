import { ConstructOptions, MessagingTypes } from "./base";
import { DefaultDelimiters } from "./delimiters";
import { Group, IGroup } from "./group";
import { MessageHeader } from "./header";
import { ISegment } from "./segment";

export interface IMessage extends IGroup {
  header: ISegment;
}

export interface MessageOptions extends ConstructOptions {
  useSchema?: boolean;
}

const defaultOptions: Partial<MessageOptions> = {
  useSchema: false,
};

export class Message extends Group implements IMessage {
  public readonly options: MessageOptions;

  private _header: MessageHeader;
  public get header() {
    return this._header;
  }

  constructor(message: string, options?: MessageOptions) {
    const delimiters = DefaultDelimiters;
    const header = new MessageHeader(message.split(delimiters.terminator)[0]);
    const schema = Message.setupSchema(header.messageType);
    super(message, {
      schema: schema,
      delimiters: header.delimiters ?? delimiters,
      emitter: options?.emitter,
    });

    // Default
    this._header = {} as any;
    this.options = { ...defaultOptions, ...options };

    // Setup
    this.setupMessageHeader(header);

    this.log(MessagingTypes.MESSAGE_CREATED, 0);
  }

  public toJson<T = any>(): T {
    const json = super._toJson<T>();
    return json;
  }

  private setupMessageHeader(header: MessageHeader) {
    this._header = header;
    this.segments[this.header.name] = this.header;
  }

  private static setupSchema(messageType: string) {
    return require(`./schema/${messageType}.schema.json`);
  }
}
