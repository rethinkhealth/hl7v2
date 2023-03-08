import { MessagingTypes } from "./base";
import { HL7V2_COMPATIBLE_VERSIONS } from "./constants";
import { DefaultDelimiters } from "./delimiters";
import { MessagingEmitter } from "./emitter";
import { Group, IGroup } from "./group";
import { MessageHeader } from "./header";
import { HL7v2Schema } from "./schema";
import { ISegment } from "./segment";

export interface IMessage extends IGroup {
  header: ISegment;
}

export interface MessageOptions {
  emitter?: MessagingEmitter<MessagingTypes>;
  terminator?: string;
  useSchema?: boolean;
  version?: string;
}

const defaultOptions: Partial<MessageOptions> = {
  terminator: DefaultDelimiters.terminator,
  useSchema: false,
};

export class Message extends Group implements IMessage {
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
    super(undefined, message, {
      resource: undefined,
      skipSetup: true,
    });

    // Default
    this._header = {} as any;
    this._version = "";
    this.options = Object.assign({}, defaultOptions, props);

    // Setup
    this.setupMessageHeader();
    this.setupDelimiters();
    this.setupVersion();
    this.checkVersion();
    this.setupSchema();

    this.setupSplits();
    this.setupElements();
    this.segments[this.header.name] = this.header;

    this.log(MessagingTypes.MESSAGE_CREATED, 0);
  }

  // !Public Methods
  public toJson<T = any>(): T {
    const json = super._toJson<T>();
    return json;
  }

  // !Private Methods
  private checkVersion() {
    if (!HL7V2_COMPATIBLE_VERSIONS.includes(this.version)) {
      throw new Error(
        `Version ${
          this.version
        } is not supported. Supported versions are: ${HL7V2_COMPATIBLE_VERSIONS.join(
          ", "
        )}.`
      );
    }
  }

  // !Private Setup Methods
  private setupMessageHeader() {
    this._header = new MessageHeader(
      this.raw.split(this.options.terminator ?? this.delimiters.terminator!)[0]
    );
  }

  private setupDelimiters() {
    this._delimiters = {
      ...this.header.delimiters,
      terminator: this.options.terminator ?? this.header.delimiters.terminator,
    };
  }

  private setupSchema() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const jsonSchema = require(`../schema/${this.header.version}/${this.header.messageType}.schema.json`);
    this._schema = new HL7v2Schema(jsonSchema);
  }

  private setupVersion() {
    this._version = this.options.version ?? this.header.version;
  }
}
