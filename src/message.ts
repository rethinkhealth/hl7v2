import { ConstructOptions, MessagingTypes } from "./base";
import { DefaultDelimiters } from "./delimiters";
import { Group, IGroup } from "./group";
import { MessageHeader } from "./header";
import { ISegment } from "./segment";

const HL7v2_VERSIONS = ["2.5.1", "2.8"];

export interface IMessage extends IGroup {
  header: ISegment;
}

export interface MessageOptions extends ConstructOptions {
  terminator?: string;
  useSchema?: boolean;
  version?: string;
}

const defaultOptions: Partial<MessageOptions> = {
  terminator: DefaultDelimiters.terminator,
  useSchema: false,
};

export class Message extends Group implements IMessage {
  // !Protected
  protected tree: string;

  // !Public
  public readonly options: MessageOptions;

  // !Private Setter / Public Getter
  private _header: MessageHeader;
  public get header() {
    return this._header;
  }

  private _version: string;
  public get version() {
    return this._version;
  }

  // !Constructor
  constructor(message: string, props?: MessageOptions) {
    const options: MessageOptions = Object.assign({}, defaultOptions, props);
    const header = new MessageHeader(message.split(options.terminator!)[0]);
    options.version = options.version ?? header.version;

    // Check version
    Message.checkVersion(options.version);

    const schema = Message.setupSchema(header.messageType, options.version!);
    super(undefined, message, {
      schema: schema,
      delimiters: Object.assign(header.delimiters, {
        terminator: options.terminator,
      }),
      emitter: options?.emitter,
    });

    // Default
    this._header = {} as any;
    this.options = options;
    this.tree = "root";
    this._version = options.version;

    // Setup
    this.setupMessageHeader(header);

    this.log(MessagingTypes.MESSAGE_CREATED, 0);
  }

  // !Public Methods
  public toJson<T = any>(): T {
    const json = super._toJson<T>();
    return json;
  }

  // !Private Methods
  private static checkVersion(version: string) {
    if (!HL7v2_VERSIONS.includes(version)) {
      throw new Error(
        `Version ${version} is not supported. Supported versions are: ${HL7v2_VERSIONS.join(
          ", "
        )}.`
      );
    }
  }

  // !Private Setup Methods
  private setupMessageHeader(header: MessageHeader) {
    this._header = header;
    this.segments[this.header.name] = this.header;
  }

  private static setupSchema(messageType: string, version: string) {
    return require(`./schema/${version}/${messageType}.schema.json`);
  }
}
