import { SEQUENCE_STARTING_INDEX } from "./constants";
import { DefaultDelimiters, IDelimiters } from "./delimiters";
import { JsonSchema } from "./schema";
import { ISegment, Segment } from "./segment";

export interface IGroup {
  delimiters: IDelimiters;
  groups: Record<string, IGroup | IGroup[]>;
  raw: string;
  schema: JsonSchema | undefined;
  segments: Record<string, ISegment | ISegment[]>;
  toJson: <T = any>() => T;
}

export interface GroupOptions {
  delimiters: IDelimiters;
  schema?: JsonSchema;
}

const defaultOptions: Partial<GroupOptions> = {};

export class Group implements IGroup {
  public readonly raw: string;
  public readonly segments: Record<string, ISegment | ISegment[]>;
  public readonly groups: Record<string, IGroup | IGroup[]>;
  public readonly options: GroupOptions;

  private _delimiters: IDelimiters;
  public get delimiters() {
    return this._delimiters;
  }

  private _schema: JsonSchema | undefined;
  public get schema() {
    return this._schema;
  }

  constructor(message: string, options: GroupOptions) {
    this.options = Object.assign({}, defaultOptions, options);
    this.raw = message;
    this.segments = {} as any;
    this.groups = {} as any;
    this._delimiters = DefaultDelimiters;
    this._schema = {} as any;

    // Setup
    this.setupSchema();
    this.setupDelimiters();
    this.setupSegments();
    this.setupGroups();
  }

  public toJson<T = any>() {
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
    }, {} as Record<string, any>) as T;
    const jsonGroups = Object.keys(this.groups).reduce((acc, key) => {
      const group = this.groups[key];
      if (Array.isArray(group)) {
        acc[key] = group.map((g) => g.toJson());
      } else {
        acc[key] = group.toJson();
      }
      return acc;
    }, {} as Record<string, any>) as T;
    return {
      ...jsonSegments,
      ...jsonGroups,
    };
  }

  private setupSchema() {
    this._schema = this.options.schema;
  }

  private setupDelimiters() {
    this._delimiters = this.options.delimiters;
  }

  private setupSegments() {
    const rootSegments = Object.keys(this.schema?.properties || {}).filter(
      (a) => !this.schema?.properties?.[a].$ref?.includes("/schemas")
    );
    this.raw
      .split(this.delimiters.terminator)
      .filter((a) => a != "")
      .forEach((split, index) => {
        if (
          rootSegments.includes(split.split(this.delimiters.fieldSeparator)[0])
        ) {
          const segment = new Segment(split, {
            delimiters: this.delimiters,
            line: index + SEQUENCE_STARTING_INDEX + 1,
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
      });
  }

  private setupGroups() {
    const rootGroups = Object.keys(this.schema?.properties || {}).filter((a) =>
      this.schema?.properties?.[a].$ref?.includes("/schemas")
    );
    rootGroups.forEach((group) => {
      const requiredSegments = this.schema?.$defs?.[group].required || [];
      const index = this.raw
        .split(this.delimiters.terminator)
        .filter((a) => a != "")
        .findIndex((split) =>
          requiredSegments.includes(
            split.split(this.delimiters.fieldSeparator)[0]
          )
        );
      if (index != -1) {
        const groupEntity = new Group(
          this.raw
            .split(this.delimiters.terminator)
            .filter((a) => a != "")
            .at(index) ?? "",
          {
            delimiters: this.delimiters,
          }
        );
        this.groups[group] = groupEntity;
      }
    });
  }
}
