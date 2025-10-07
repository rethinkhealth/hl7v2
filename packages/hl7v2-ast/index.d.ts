import type {
  Data as UnistData,
  Literal as UnistLiteral,
  Node as UnistNode,
  Parent as UnistParent,
} from "unist";

/**
 * HL7v2 Delimiters type
 */
export type Delimiters = {
  field: string;
  component: string;
  subcomponent: string;
  repetition: string;
  escape: string;
  segment: string;
};

// ## Abstract nodes

/**
 * Union of registered HL7v2 literals.
 *
 * To register custom HL7v2 nodes, add them to {@link RootContentMap} and other
 * places where relevant.
 * They will be automatically added here.
 */
export type Literals = Extract<Nodes, UnistLiteral>;

/**
 * Union of registered HL7v2 parents.
 *
 * To register custom HL7v2 nodes, add them to {@link RootContentMap} and other
 * places where relevant.
 * They will be automatically added here.
 */
export type Parents = Extract<Nodes, UnistParent>;

/**
 * Union of registered HL7v2 nodes.
 *
 * To register custom HL7v2 nodes, add them to {@link RootContentMap} and other
 * places where relevant.
 * They will be automatically added here.
 */
export type Nodes = Root | RootContent;

/**
 * Info associated with HL7v2Node nodes by the ecosystem.
 *
 * This space is guaranteed to never be specified by unist or HL7v2Node.
 * But you can use it in utilities and plugins to store data.
 *
 * This type can be augmented to register custom data.
 * For example:
 *
 * ```ts
 * declare module '@rethinkhealth/hl7v2-ast' {
 *   interface Data {
 *     // `someNode.data.myId` is typed as `number | undefined`
 *     myId?: number | undefined
 *   }
 * }
 * ```
 */
export interface Data extends UnistData {}

/**
 * Abstract HL7v2 node.
 *
 * This interface is supposed to be extended.
 * If you can use {@link Literal} or {@link Parent}, you should.
 *
 * For a union of all registered HL7v2 nodes, see {@link Nodes}.
 */
export interface Node extends UnistNode {
  /**
   * Info from the ecosystem.
   */
  data?: Data | undefined;
}

/**
 * Abstract HL7v2 node that contains the smallest possible value.
 *
 * This interface is supposed to be extended if you make custom HL7v2 nodes.
 *
 * For a union of all registered mdast literals, see {@link Literals}.
 */
export interface Literal extends Node {
  /**
   * Plain-text value.
   */
  value: string;
}

/**
 * Abstract HL7v2 node that contains other HL7v2 nodes (*children*).
 *
 * This interface is supposed to be extended if you make custom HL7v2 nodes.
 *
 * For a union of all registered mdast parents, see {@link Parents}.
 */
export interface Parent extends Node {
  /**
   * List of children.
   */
  children: RootContent[];
}

// ## Content Maps

/**
 * Union of registered mdast nodes that can occur in {@link Root}.
 *
 * To register custom mdast nodes, add them to {@link RootContentMap}.
 * They will be automatically added here.
 */
export type RootContent = RootContentMap[keyof RootContentMap];

/**
 * Registry of all mdast nodes that can occur as children of {@link Root}.
 *
 * > **Note**: {@link Root} does not need to be an entire document.
 * > it can also be a fragment.
 *
 * This interface can be augmented to register custom node types:
 *
 * ```ts
 * declare module 'mdast' {
 *   interface RootContentMap {
 *     // Allow using toml nodes defined by `remark-frontmatter`.
 *     toml: TOML;
 *   }
 * }
 * ```
 *
 * For a union of all {@link Root} children, see {@link RootContent}.
 */
export type RootContentMap = {
  segment: Segment;
  group: Group;
  field: Field;
  fieldRepetition: FieldRepetition;
  component: Component;
  subcomponent: Subcomponent;
};

// ## Concrete nodes

/**
 * Document fragment or a whole document.
 *
 * Should be used as the root of a tree and must not be used as a child.
 */
export interface Root extends Parent {
  /**
   * Node type of HL7v2 root.
   */
  type: "root";
  /**
   * Data associated with the mdast root.
   */
  data?: RootData | undefined;
}

/**
 * Info associated with HL7v2 root nodes by the ecosystem.
 */
export interface RootData extends Data {
  delimiters?: Delimiters | undefined;
}

/**
 * HL7v2 segment.
 */
export interface Segment extends Parent {
  /**
   * Node type of HL7v2 segment.
   */
  type: "segment";
  /**
   * Children of block quote.
   */
  children: Field[];
  /**
   * Data associated with the mdast block quote.
   */
  data?: SegmentData | undefined;
}

/**
 * Info associated with HL7v2 segment nodes by the ecosystem.
 */
export interface SegmentData extends Data {}

/**
 * HL7v2 group.
 *
 * A group is a set of segments that appear together in a defined order within a message.
 * They are often used when a message needs to repeat a set of related segments together
 * rather than just a single segment.
 *
 * Groups can be required/optional and repeating/non-repeating, just like segments.
 */
export interface Group extends Parent {
  /**
   * Node type of HL7v2 segment.
   */
  type: "group";
  /**
   * Name identifier for the group (e.g., "ORDER", "OBSERVATION").
   * Used for querying specific groups in nested structures.
   */
  name?: string | undefined;
  /**
   * Children of group.
   */
  children: Array<Segment | Group>;
  /**
   * Data associated with the mdast block quote.
   */
  data?: GroupData | undefined;
}

/**
 * Info associated with HL7v2 segment nodes by the ecosystem.
 */
export interface GroupData extends Data {}

/**
 * HL7v2 field.
 */
export interface Field extends Parent {
  /**
   * Node type of HL7v2 field.
   */
  type: "field";
  /**
   * Children of field.
   */
  children: FieldRepetition[];
  /**
   * Data associated with the mdast block quote.
   */
  data?: FieldData | undefined;
}

/**
 * Info associated with HL7v2 segment nodes by the ecosystem.
 */
export interface FieldData extends Data {}

/**
 * HL7v2 field repetition.
 */
export interface FieldRepetition extends Parent {
  /**
   * Node type of HL7v2 field repetition.
   */
  type: "field-repetition";
  /**
   * Children of field repetition.
   */
  children: Component[];
  /**
   * Data associated with the mdast block quote.
   */
  data?: FieldRepetitionData | undefined;
}

/**
 * Info associated with HL7v2 field repetition nodes by the ecosystem.
 */
export interface FieldRepetitionData extends Data {}

/**
 * HL7v2 component.
 */
export interface Component extends Parent {
  /**
   * Node type of HL7v2 component.
   */
  type: "component";
  /**
   * Children of component.
   */
  children: Subcomponent[];
  /**
   * Data associated with the mdast block quote.
   */
  data?: ComponentData | undefined;
}

/**
 * Info associated with HL7v2 segment nodes by the ecosystem.
 */
export interface ComponentData extends Data {}

/**
 * HL7v2 subcomponent.
 */
export interface Subcomponent extends Literal {
  /**
   * Node type of HL7v2 subcomponent.
   */
  type: "subcomponent";

  /**
   * Data associated with the mdast block quote.
   */
  data?: SubcomponentData | undefined;
}

export interface SubcomponentData extends Data {}
