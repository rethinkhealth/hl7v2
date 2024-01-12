import { Chapter } from "./chapter";
import { Versions } from "./constants";
import { DefaultDelimiters } from "./delimiters";
import { Group, IGroup } from "./group";
import { MessageHeader } from "./header";
import { HL7v2Schema, JsonSchema } from "./jsonschema";
import hl7v2_schemas from "./schema";
import { ISegment } from "./segment";

export interface IMessage extends IGroup {
  chapter: Chapter | undefined;
  header: ISegment;
}

export interface MessageOptions {
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

  private _chapter: Chapter | undefined;
  public get chapter() {
    return this._chapter;
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
    this.setupSchema();
    this.setupChapter();

    this.setupSplits();
    this.setupElements();
    this.segments[this.header.name] = this.header;
  }

  // !Public Methods
  public toJson<T = any>(): T {
    const json = super._toJson<T>();
    return json;
  }

  // !Private Setup Methods
  private setupMessageHeader() {
    this._header = new MessageHeader(
      this.raw.split(this.options.terminator ?? this.delimiters.terminator!)[0],
    );
  }

  private setupDelimiters() {
    this._delimiters = {
      ...this.header.delimiters,
      terminator: this.options.terminator ?? this.header.delimiters.terminator,
    };
  }

  private setupSchema() {
    if (!this.options.useSchema) return;

    const hl7v2_schema = hl7v2_schemas[this.header.version as Versions];
    const jsonSchema = hl7v2_schema[
      this.header.messageStructure as keyof typeof hl7v2_schema
    ] as JsonSchema;
    this._schema = new HL7v2Schema(jsonSchema);
  }

  private setupChapter() {
    this._chapter = Chapter.findChapterByEvent(this.header.messageType);
  }

  private setupVersion() {
    this._version = this.options.version ?? this.header.version;
  }
}
