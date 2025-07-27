import type { Node, Position } from 'unist';

/**
 * HL7v2 Delimiters type
 */
export interface HL7v2Delimiters {
  field: string;
  component: string;
  subcomponent: string;
  repetition: string;
  escape: string;
  segment: string; // now always a string
}

/**
 * HL7v2 Node specification following the Unist spec
 *
 * @see https://github.com/syntax-tree/unist#node
 */
export interface HL7v2Node extends Node {
  /**
   * The type of the node.
   */
  type: 'message' | 'segment' | 'header' | 'field' | 'component' | 'subcomponent';

  /**
   * The name of the node (e.g. "PID", "MSH", "EVN", etc.)
   */
  name?: string;

  /**
   * The index of the node in the parent.
   *
   * This is valuable in HL7v2 where fields and components' order is
   * relevant.
   */
  index?: number;

  /**
   * The value of the node. This is the raw value of the node.
   *
   * TODO: We might consider removing this property and use the children
   * property instead.
   */
  value?: string;

  /**
   * The delimiter of the node.
   */
  delimiter?: string;

  /**
   * The children of the node.
   */
  children?: HL7v2Node[];

  /**
   * The position of the node in the source text.
   *
   * This is used for round-tripping the AST back to the original text.
   */
  position?: Position;
}
