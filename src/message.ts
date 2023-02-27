import { ConstructOptions, MessagingTypes } from "./base";
import { DefaultDelimiters } from "./delimiters";
import { Group, IGroup } from "./group";
import { MessageHeader } from "./header";
import { ISegment } from "./segment";

export interface IMessage extends IGroup {
  header: ISegment;
}

export interface MessageOptions extends ConstructOptions {
  terminator?: string;
  useSchema?: boolean;
}

const defaultOptions: Partial<MessageOptions> = {
  terminator: DefaultDelimiters.terminator,
  useSchema: false,
};

export class Message extends Group implements IMessage {
  protected tree: string;
  public readonly options: MessageOptions;

  private _header: MessageHeader;
  public get header() {
    return this._header;
  }

  constructor(message: string, props?: MessageOptions) {
    const options: MessageOptions = Object.assign({}, defaultOptions, props);
    const header = new MessageHeader(message.split(options.terminator!)[0]);
    const schema = Message.setupSchema(header.messageType);
    super(message, {
      schema: schema,
      delimiters: Object.assign(header.delimiters, {
        terminator: options.terminator,
      }),
      emitter: options?.emitter,
    });

    // Default
    this._header = {} as any;
    this.options = { ...defaultOptions, ...options };
    this.tree = "root";

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
