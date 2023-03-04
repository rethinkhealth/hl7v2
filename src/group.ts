import { Construct, ConstructOptions, MessagingTypes } from "./base";
import { SEQUENCE_STARTING_INDEX } from "./constants";
import { DefaultDelimiters, IDelimiters } from "./delimiters";
import { JsonSchema } from "./schema";
import { ISegment, Segment } from "./segment";

/**
 * Segment groups are used to organize segments into logical units. Segment
 * groups may be required or optional. They may occur only once in a message or
 * they may be allowed to repeat. Each segment group is given a name.
 *
 * As of v 2.5, the first segment in a newly defined segment group will
 * be required to help ensure that unparsable messages will not be inadvertently
 * defined.
 */
export interface IGroup {
  delimiters: IDelimiters;
  groups: Record<string, IGroup | IGroup[]>;
  raw: string;
  schema: JsonSchema | undefined;
  segments: Record<string, ISegment | ISegment[]>;
  toJson: <T = any>() => T;
}

export interface GroupOptions extends ConstructOptions {
  delimiters: IDelimiters;
  resource?: string;
  schema?: JsonSchema;
}

const defaultOptions: Partial<GroupOptions> = {};

export class Group extends Construct implements IGroup {
  // !Public
  public readonly segments: Record<string, ISegment | ISegment[]>;
  public readonly groups: Record<string, IGroup | IGroup[]>;

  // !Private
  private _splits: string[];
  private readonly _options: GroupOptions;

  // !Protected
  protected tree: string;

  // !Private with Public Getters
  private _delimiters: IDelimiters;
  public get delimiters() {
    return this._delimiters;
  }

  private _schema: JsonSchema | undefined;
  public get schema() {
    return this._schema;
  }

  // !Constructor
  constructor(message: string, options: GroupOptions) {
    super(message, { emitter: options.emitter });

    this._options = Object.assign({}, defaultOptions, options);
    this.segments = {} as any;
    this.groups = {} as any;
    this._delimiters = DefaultDelimiters;
    this._schema = {} as any;
    this._splits = [];
    this.tree = this._options.resource ?? "root";

    // Setup
    this.setupSchema();
    this.setupDelimiters();
    this.setupSplits();
    this.setupElements();
  }

  // !Public Methods
  public toJson<T = any>(): T {
    return this._toJson<T>();
  }

  // !Protected Methods
  protected _toJson<T = any>(): T {
    // This code iterates through the segments and groups and returns the JSON
    // representation of each segment and group.
    const jsonSegments = Object.keys(this.segments).reduce((acc, key) => {
      const segment = this.segments[key];
      if (Array.isArray(segment)) {
        acc[key] = segment.map((s) => s.toJson());
      } else {
        acc[key] = segment.toJson();
      }
      return acc;
    }, {} as Record<string, any>);
    const jsonGroups = Object.keys(this.groups).reduce((acc, key) => {
      const group = this.groups[key];
      if (Array.isArray(group)) {
        acc[key] = group.map((g) => g.toJson());
      } else {
        acc[key] = group.toJson();
      }
      return acc;
    }, {} as Record<string, any>);
    return {
      ...jsonSegments,
      ...jsonGroups,
    } as T;
  }

  private _getAssociatedGroups(): string[] {
    let groups: any[] = [];
    if (this._options.resource) {
      // Resource-based groups
      groups = Object.keys(
        this.schema?.$defs?.[this._options.resource] || {}
      ).filter((a) => this.schema?.$defs?.[a]?.$ref?.includes("/schemas"));
    } else {
      // Root groups
      groups = Object.keys(this.schema?.properties || {}).filter((a) =>
        this.schema?.properties?.[a].$ref?.includes("/schemas")
      );
    }
    this.log(MessagingTypes.GROUP_RETRIEVED_ASSOCIATED_GROUPS, 0, {
      groups: groups,
    });
    return groups;
  }

  private _getAssociatedSegments(): string[] {
    let segments: string[] = [];
    if (this._options.resource) {
      // Resource-based groups
      segments = Object.keys(
        this.schema?.$defs?.[this._options.resource].properties || {}
      ).filter((a) => !this.schema?.$defs?.[a]?.$ref?.includes("/schemas"));
    } else {
      // Root groups
      segments = Object.keys(this.schema?.properties || {}).filter(
        (a) => !this.schema?.properties?.[a].$ref?.includes("/schemas")
      );
    }
    this.log(MessagingTypes.GROUP_RETRIEVED_ASSOCIATED_SEGMENTS, 0, {
      segments: segments,
    });
    return segments;
  }

  private _isSegment(index: number) {
    const elementId = this._splits[index].split(
      this.delimiters.fieldSeparator
    )[0];
    // check if the element is a segment or a group
    // if the element starts with Z (custom segment), then it is a segment
    if (elementId.startsWith("Z")) return true;
    // if there is a resource, then check if the element is a segment or a group
    else {
      return this._getAssociatedSegments().includes(elementId);
    }
  }

  private _assignSegment(index: number) {
    const element = this._splits[index];
    const segment = new Segment(element, {
      delimiters: this.delimiters,
      line: index + SEQUENCE_STARTING_INDEX,
    });
    if (this.segments[segment.name]) {
      if (Array.isArray(this.segments[segment.name])) {
        (this.segments[segment.name] as ISegment[]).push(segment);
      } else {
        this.segments[segment.name] = [
          this.segments[segment.name] as ISegment,
          segment,
        ];
      }
    } else {
      this.segments[segment.name] = segment;
    }
  }

  private _assignGroup(index: number): number {
    const element = this._splits[index];
    const elementId = element.split(this.delimiters.fieldSeparator)[0];
    const group = this
      // step 1: get all group names
      ._getAssociatedGroups()
      // step 2: retrieve the segments for each group
      .find((group) =>
        Object.keys(this.schema?.$defs?.[group].properties || {}).includes(
          elementId
        )
      );
    if (group) {
      let endIndex = index;
      for (let i = index; i < this._splits.length; i++) {
        const elementId = this._splits[i].split(
          this.delimiters.fieldSeparator
        )[0];
        if (
          Object.keys(this.schema?.$defs?.[group].properties || {}).includes(
            elementId
          )
        ) {
          endIndex = i;
        } else {
          break;
        }
      }
      this.groups[group] = new Group(
        this._splits.slice(index, endIndex + 1).join("\r"),
        {
          delimiters: this.delimiters,
          schema: this.schema,
          resource: group,
        }
      );
      return endIndex;
    }
    return index;
  }

  // ============================
  // Private Setup Methods
  // ============================

  // !Private Setup Methods
  private setupSchema() {
    this._schema = this._options.schema;
  }

  private setupDelimiters() {
    this._delimiters = this._options.delimiters;
  }

  private setupSplits() {
    this._splits = this.raw
      .split(this.delimiters.terminator)
      .filter((a) => a != "")
      .filter((a) => a != "\n");
  }

  private setupElements() {
    for (let index = 0; index < this._splits.length; index++) {
      // check if the element is a segment or a group
      if (this._isSegment(index)) {
        // this is a segment
        this._assignSegment(index);
      } else {
        // this is a group
        index = this._assignGroup(index);
      }
    }
  }
}
