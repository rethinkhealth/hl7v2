import type {
  Component,
  Field,
  FieldRepetition,
  Group,
  Nodes,
  Root,
  Segment,
  Subcomponent,
} from "@rethinkhealth/hl7v2-ast";
import type {
  FieldJson,
  GroupJson,
  Hl7v2JsonResult,
  SegmentJson,
} from "./types";

export function toJsonRuntime(root: Nodes): Hl7v2JsonResult {
  const r = root as Root;
  const out: Hl7v2JsonResult = [];

  for (const child of r.children) {
    if (child.type === "segment") {
      out.push(processSegment(child as Segment));
    } else if (child.type === "group") {
      out.push(processGroup(child as Group));
    }
  }

  return out;
}

function processSegment(segment: Segment): SegmentJson {
  const segmentName = segment.children[0].value;
  const fields: (FieldJson | FieldJson[])[] = [];

  // Skip the header field (index 0) when projecting to fields
  for (const f of segment.children.slice(1) as Field[]) {
    fields.push(materializeField(f));
  }

  return { segment: segmentName, fields };
}

function processGroup(group: Group): GroupJson {
  const children: Array<SegmentJson | GroupJson> = [];

  for (const child of group.children) {
    if (child.type === "segment") {
      children.push(processSegment(child as Segment));
    } else if (child.type === "group") {
      children.push(processGroup(child as Group));
    }
  }

  return { group: group.name ?? "unnamed", children };
}

// Convert a Field into JSON-friendly value: string or nested arrays representing reps/components/subcomponents
function materializeField(field: Field): FieldJson | FieldJson[] {
  const toComponent = (c: Component): FieldJson => {
    if (c.children?.length === 0) {
      return "";
    }
    if (c.children?.length === 1) {
      return (c.children[0] as Subcomponent).value;
    }
    return c.children ? c.children.map((sc) => (sc as Subcomponent).value) : [];
  };

  const toRepetitionArray = (r: FieldRepetition): FieldJson[] =>
    r.children.map((c) => toComponent(c as Component));

  const repetitions = field.children as FieldRepetition[];

  if (repetitions.length === 1) {
    const rep = repetitions[0];

    if (!rep) {
      throw new Error("Expected a field repetition");
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
