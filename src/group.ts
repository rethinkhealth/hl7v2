import { Construct, IConstruct } from "./base";
import { SEQUENCE_STARTING_INDEX } from "./constants";
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
export interface IGroup extends IConstruct {
  groups: Record<string, IGroup | IGroup[]>;
  segments: Record<string, ISegment | ISegment[]>;
  toJson: <T = any>() => T;
}

export interface GroupOptions {
  resource?: string;
  skipSetup?: boolean;
}

const defaultOptions: Partial<GroupOptions> = {
  skipSetup: false,
};

export class Group extends Construct implements IGroup {
  // !Public
  public readonly segments: Record<string, ISegment | ISegment[]>;
  public readonly groups: Record<string, IGroup | IGroup[]>;

  // !Private
  private _splits: string[];
  private readonly _options: GroupOptions;

  // !Constructor
  constructor(scope: Construct | undefined, message: string, options: GroupOptions) {
    super(scope, message);

    this._options = Object.assign({}, defaultOptions, options);
    this.segments = {} as any;
    this.groups = {} as any;
    this._splits = [];

    // Setup
    if (!this._options.skipSetup) {
      this.setupSplits();
      this.setupElements();
    }
  }

  // !Public Methods
  public toJson<T = any>(): T {
    return this._toJson<T>();
  }

  // !Protected Methods
  protected _toJson<T = any>(): T {
    // This code iterates through the segments and groups and returns the JSON
    // representation of each segment and group.
    const jsonSegments = Object.keys(this.segments).reduce(
      (acc, key) => {
        const segment = this.segments[key];
        if (Array.isArray(segment)) {
          acc[key] = segment.map((s) => s.toJson());
        } else {
          acc[key] = segment.toJson();
        }
        return acc;
      },
      {} as Record<string, any>
    );
    const jsonGroups = Object.keys(this.groups).reduce(
      (acc, key) => {
        const group = this.groups[key];
        if (Array.isArray(group)) {
          acc[key] = group.map((g) => g.toJson());
        } else {
          acc[key] = group.toJson();
        }
        return acc;
      },
      {} as Record<string, any>
    );
    return {
      ...jsonSegments,
      ...jsonGroups,
    } as T;
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
        this.segments[segment.name] = [this.segments[segment.name] as ISegment, segment];
      }
    } else {
      this.segments[segment.name] = segment;
    }
  }

  private _assignGroup(index: number): number {
    const element = this._splits[index];
    const rootSegmentId = element.split(this.delimiters.fieldSeparator)[0];
    const rootGroups = this.schema
      // step 1: retrieve the groups for the resource
      ?.getGroups(this._options.resource);
    // step 2: retrieve the segments for each group
    const group = rootGroups?.find((group) =>
      this.retrieveSegments(group)?.includes(rootSegmentId)
    );
    if (group) {
      const endIndex = this.findLastIndex(index, group, rootSegmentId);

      const subGroup = new Group(
        this,
        this._splits.slice(index, endIndex + 1).join(this.delimiters.terminator),
        {
          resource: group,
        }
      );
      if (this.groups[group]) {
        if (Array.isArray(this.groups[group])) {
          (this.groups[group] as IGroup[]).push(subGroup);
        } else {
          this.groups[group] = [this.groups[group] as IGroup, subGroup];
        }
      } else {
        this.groups[group] = subGroup;
      }
      return endIndex;
    } else {
      // This is an interesting use case where the segment is not part of the
      // the group but instead could be part of the subgroups.
      const parentGroupId = rootGroups?.find((group) =>
        this.retrieveAllSegments(group)?.includes(rootSegmentId)
      );

      if (!parentGroupId) return index;

      const parentGroup =
        (this.groups[parentGroupId] as IGroup) ||
        new Group(this, "", {
          resource: parentGroupId,
        });

      const childGroupId = this.retrieveSubGroupBySegment(parentGroupId, rootSegmentId);

      if (!childGroupId) return index;

      const endIndex = this.findLastIndex(index, childGroupId, rootSegmentId);

      const childGroup = new Group(
        this,
        this._splits.slice(index, endIndex + 1).join(this.delimiters.terminator),
        {
          resource: childGroupId,
        }
      );

      parentGroup.groups[childGroupId] = childGroup;

      this.groups[parentGroupId] = parentGroup;

      return endIndex;
    }
  }

  // ============================
  // Protected methods
  // ============================
  protected retrieveAllSegments(group: string): string[] | undefined {
    const segments = Object.keys(this.schema?.schema.$defs?.[group].properties || {})
      .flatMap((a) => {
        // if the element is a segment of the group, return it
        if (
          // Check if it is a segment
          this.schema?.schema.$defs?.[group].properties?.[a].$ref?.startsWith("segments.") ||
          // Check if it is anyOf of segements
          this.schema?.schema.$defs?.[group].properties?.[a].anyOf?.some((b) =>
            b.$ref?.startsWith("segments.")
          )
        ) {
          return a;
        } else {
          // Loop through the subgroups and retrieve the segments of the subgroup
          return this.retrieveAllSegments(a);
        }
      })
      .filter((a) => a != undefined);

    if (segments.length > 0) {
      return segments as string[];
    } else {
      return undefined;
    }
  }

  protected findLastIndex(index: number, group: string, rootSegmentId: string) {
    let endIndex = index;
    // find the end of the group. In this case, we have to ignore the
    // first element because it is the group itself. We only want to
    // find the end of the group. The end of the group is when we
    // encounter a segment that is not part of the group  or its subgroups.
    for (let i = index + 1; i < this._splits.length; i++) {
      const elementId = this._splits[i].split(this.delimiters.fieldSeparator)[0];
      // if the element is the same as the root segment, then we should
      // break since it means it is a new group.
      if (elementId == rootSegmentId) {
        break;
      } else if (
        // if the element is a segment of the group, then continue
        Object.keys(this.schema?.schema.$defs?.[group].properties || {}).includes(elementId) ||
        // if the element starts with Z (custom segment), then it is a segment
        // and we should continue
        elementId.startsWith("Z") ||
        // if the element is a segment of a subgroup, then continue
        Object.keys(this.schema?.schema.$defs || {})
          // get the subgroups associated with the group
          .filter((a) =>
            Object.keys(this.schema?.schema.$defs?.[group].properties || {}).includes(a)
          )
          .some((a) =>
            Object.keys(this.schema?.schema.$defs?.[a].properties || {}).includes(elementId)
          )
      ) {
        endIndex = i;
      } else {
        // if the element is not part of the group, then we have found the
        // end of the group. Break out of the loop. We do not want to
        // include the element that is not part of the group.
        break;
      }
    }
    return endIndex;
  }

  protected retrieveSubGroupBySegment(group: string, segementId: string): string | undefined {
    const subGroups = this.retrieveSubGroups(group);
    if (subGroups) {
      return subGroups.find((a) => this.retrieveSegments(a)?.includes(segementId));
    }
  }

  protected retrieveSubGroups(group: string): string[] | undefined {
    return Object.keys(this.schema?.schema.$defs?.[group].properties || {}).filter(
      (a) =>
        // Check if it is a segment
        this.schema?.schema.$defs?.[group].properties?.[a].$ref?.startsWith("/schemas/") ||
        // Check if it is anyOf of segements
        this.schema?.schema.$defs?.[group].properties?.[a].anyOf?.some((b) =>
          b.$ref?.startsWith("/schemas/")
        )
    );
  }

  protected retrieveSegments(group: string): string[] | undefined {
    return Object.keys(this.schema?.schema.$defs?.[group].properties || {}).filter(
      (a) =>
        // Check if it is a segment
        this.schema?.schema.$defs?.[group].properties?.[a].$ref?.startsWith("segments.") ||
        // Check if it is anyOf of segements
        this.schema?.schema.$defs?.[group].properties?.[a].anyOf?.some((b) =>
          b.$ref?.startsWith("segments.")
        )
    );
  }

  // ============================
  // Private Setup Methods
  // ============================

  // !Private Setup Methods
  protected setupSplits() {
    this._splits = this.raw
      .split(this.delimiters.terminator)
      .filter((a) => a != "")
      .filter((a) => a != "\n");
  }

  protected setupElements() {
    for (let index = 0; index < this._splits.length; index++) {
      // check if the element is a segment or a group
      const elementId = this._splits[index].split(this.delimiters.fieldSeparator)[0];
      if (
        // If not schema defined, we assume that all elements are segments.
        !this.schema ||
        // Check if the segment is in the list of the group.
        this.schema
          ?.getSegments(this._options.resource)
          .includes(elementId) ||
        // Check if the segment is a custom Z segment.
        elementId.startsWith("Z")
      ) {
        // this is a segment
        this._assignSegment(index);
      } else {
        // this is a group
        index = this._assignGroup(index);
      }
    }
  }
}
