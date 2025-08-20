import type {
  Component,
  Delimiters,
  Field,
  FieldRepetition,
  Nodes,
  Root,
  Segment,
  Subcomponent,
} from '@rethinkhealth/hl7v2-ast';
import { DEFAULT_DELIMITERS } from '@rethinkhealth/hl7v2-utils';
import type { Plugin } from 'unified';
import type { Node } from 'unist';

export const hl7v2ToHl7v2: Plugin<[], Root, string> = function (): void {
  // biome-ignore lint/complexity/noUselessThisAlias: this is a plugin
  const self = this;

  function compiler(tree: Node): string {
    return toHl7v2(tree as Nodes);
  }

  self.compiler = compiler;
};

export function toHl7v2(node: Nodes, delimiters?: Delimiters): string {
  const root = node as Root;
  const resolvedDelimiters =
    root.data?.delimiters ?? delimiters ?? DEFAULT_DELIMITERS;

  switch (node.type) {
    case 'root': {
      const segments: string[] = [];
      for (const segment of node.children as Segment[]) {
        segments.push(processSegment(segment, resolvedDelimiters));
      }
      return segments.join(resolvedDelimiters.segment);
    }
    case 'segment':
      return processSegment(node as Segment, resolvedDelimiters);
    case 'field':
      return processField(node as Field, resolvedDelimiters);
    case 'field-repetition':
      return processFieldRepetition(
        node as FieldRepetition,
        resolvedDelimiters
      );
    case 'component':
      return processComponent(node as Component, resolvedDelimiters);
    case 'subcomponent':
      return (node as Subcomponent).value || '';
    default:
      throw new Error(`Unsupported node type: ${node.type}`);
  }
}

function processSegment(segment: Segment, delimiters: Delimiters): string {
  const fields: string[] = [];

  // Get the segment name from the first field (index 0)
  const segmentName = getSegmentName(segment);
  fields.push(segmentName);

  // For MSH segments, skip field 1 (which contains the field separator) and start from field 2
  // For other segments, start from field 1
  const startIndex = segmentName === 'MSH' ? 2 : 1;

  for (let i = startIndex; i < segment.children.length; i++) {
    const field = segment.children[i] as Field;
    fields.push(processField(field, delimiters));
  }

  return fields.join(delimiters.field);
}

function processField(field: Field, delimiters: Delimiters): string {
  const repetitions: string[] = [];

  for (const fieldRep of field.children as FieldRepetition[]) {
    repetitions.push(processFieldRepetition(fieldRep, delimiters));
  }

  return repetitions.join(delimiters.repetition);
}

function processFieldRepetition(
  fieldRep: FieldRepetition,
  delimiters: Delimiters
): string {
  const components: string[] = [];

  for (const component of fieldRep.children as Component[]) {
    components.push(processComponent(component, delimiters));
  }

  return components.join(delimiters.component);
}

function processComponent(
  component: Component,
  delimiters: Delimiters
): string {
  const subcomponents: string[] = [];

  for (const subcomponent of component.children as Subcomponent[]) {
    subcomponents.push(subcomponent.value || '');
  }

  return subcomponents.join(delimiters.subcomponent);
}

// Extract segment name from the first field's first component's first subcomponent
function getSegmentName(segment: Segment): string {
  try {
    // Navigate: segment -> field[0] -> fieldRepetition[0] -> component[0] -> subcomponent[0]
    const firstField = segment.children[0] as Field | undefined;
    if (!firstField) {
      return '';
    }

    const firstRepetition = firstField.children[0] as
      | FieldRepetition
      | undefined;
    if (!firstRepetition) {
      return '';
    }

    const firstComponent = firstRepetition.children[0] as Component | undefined;
    if (!firstComponent) {
      return '';
    }

    const firstSubcomponent = firstComponent.children[0] as
      | Subcomponent
      | undefined;
    if (!firstSubcomponent) {
      return '';
    }

    return firstSubcomponent.value || '';
  } catch {
    return '';
  }
}
