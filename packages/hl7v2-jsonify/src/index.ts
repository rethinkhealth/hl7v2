import type {
  Component,
  Field,
  FieldRepetition,
  Nodes,
  Root,
  Segment,
  Subcomponent,
} from '@rethinkhealth/hl7v2-ast';
import type { Plugin } from 'unified';
import type { Node } from 'unist';

type FieldValue = string | string[];

type SegmentJSON = {
  segment: string;
  fields: (FieldValue | FieldValue[])[]; // Nested arrays for fields/repetitions/components
};

export const hl7v2Jsonify: Plugin<[], Nodes, string> = function (): void {
  // biome-ignore lint/complexity/noUselessThisAlias: this is a plugin
  const self = this;

  function compiler(tree: Node): string {
    return JSON.stringify(toJson(tree as Nodes), null, 2);
  }

  self.compiler = compiler;
};

export function toJson(root: Nodes): SegmentJSON[] {
  const r = root as Root;
  const out: SegmentJSON[] = [];

  for (const s of r.children as Segment[]) {
    const segmentName = getSegmentName(s);
    const fields: (FieldValue | FieldValue[])[] = [];

    // Skip the header field (index 0) when projecting to fields
    for (let i = 1; i < s.children.length; i++) {
      const f = s.children[i] as Field;
      fields.push(materializeField(f));
    }

    out.push({ segment: segmentName, fields });
  }

  return out;
}

// Extract segment name from the first field's first component's first subcomponent
function getSegmentName(segment: Segment): string {
  try {
    // Navigate: segment -> field[0] -> fieldRepetition[0] -> component[0] -> subcomponent[0]
    const firstField = segment.children[0] as Field | undefined;
    if (!firstField) {
      return 'UNKNOWN';
    }

    const firstRepetition = firstField.children[0] as
      | FieldRepetition
      | undefined;
    if (!firstRepetition) {
      return 'UNKNOWN';
    }

    const firstComponent = firstRepetition.children[0] as Component | undefined;
    if (!firstComponent) {
      return 'UNKNOWN';
    }

    const firstSubcomponent = firstComponent.children[0] as
      | Subcomponent
      | undefined;
    if (!firstSubcomponent) {
      return 'UNKNOWN';
    }

    return firstSubcomponent.value || 'UNKNOWN';
  } catch {
    return 'UNKNOWN';
  }
}

// Convert a Field into JSON-friendly value: string or nested arrays representing reps/components/subcomponents
function materializeField(field: Field): FieldValue | FieldValue[] {
  const toComponent = (c: Component): FieldValue => {
    if (c.children.length === 0) {
      return '';
    }
    if (c.children.length === 1) {
      return (c.children[0] as Subcomponent).value;
    }
    return c.children.map((sc) => (sc as Subcomponent).value);
  };

  const toRepetitionArray = (r: FieldRepetition): FieldValue[] => {
    return r.children.map((c) => toComponent(c as Component));
  };

  const repetitions = field.children as FieldRepetition[];

  if (repetitions.length === 1) {
    const rep = repetitions[0];

    if (!rep) {
      throw new Error('Expected a field repetition');
    }

    if (rep.children.length === 1) {
      const comp = rep.children[0] as Component;
      const compVal = toComponent(comp);

      return Array.isArray(compVal) ? [compVal] : compVal;
    }
    return toRepetitionArray(rep);
  }

  // Multiple repetitions: project each repetition to a value (string or array)
  return repetitions.map((r) => {
    const rep = r as FieldRepetition;
    if (rep.children.length === 1) {
      return toComponent(rep.children[0] as Component);
    }
    return toRepetitionArray(rep);
  }) as string[];
}
