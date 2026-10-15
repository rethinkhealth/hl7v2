// oxlint-disable-next-line no-unused-vars -- triggers FieldRepetitionData, ComponentData and SubcomponentData augmentation
import type { hl7v2AnnotateProfileDatatypes } from "@glion/annotate-profile-datatypes";
// oxlint-disable-next-line no-unused-vars -- triggers FieldData augmentation
import type { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import type {
  Component,
  FieldRepetition,
  Nodes,
  Root,
  Subcomponent,
} from "@glion/ast";
import type { ParseResult, TimestampIssue } from "@glion/util-timestamp";
import { parseDT, parseDTM, parseTM } from "@glion/util-timestamp";
import { SKIP, visit } from "@glion/util-visit";
import { lintRule } from "unified-lint-rule";
import type { VFile } from "vfile";

const pad2 = (value: number) => String(value).padStart(2, "0");

const messages = {
  dayOutOfRange: (
    element: string,
    name: string,
    value: string,
    issue: Extract<TimestampIssue, { code: "day-out-of-range" }>
  ) =>
    `\`${element}\` (${name}) has the day \`${pad2(issue.day)}\` in \`${value}\`; month \`${pad2(issue.month)}\` of \`${String(issue.year).padStart(4, "0")}\` has ${issue.daysInMonth} days.`,
  hourOutOfRange: (
    element: string,
    name: string,
    value: string,
    hour: number
  ) =>
    `\`${element}\` (${name}) has the hour \`${pad2(hour)}\` in \`${value}\`; an hour is \`00\` to \`23\`.`,
  invalidDT: (element: string, name: string, value: string) =>
    `\`${element}\` (${name}) has the value \`${value}\`; a DT value has the form \`YYYY[MM[DD]]\`.`,
  invalidDTM: (element: string, name: string, value: string) =>
    `\`${element}\` (${name}) has the value \`${value}\`; a DTM value has the form \`YYYY[MM[DD[HH[MM[SS[.S[S[S[S]]]]]]]]][+/-ZZZZ]\`.`,
  invalidTM: (element: string, name: string, value: string) =>
    `\`${element}\` (${name}) has the value \`${value}\`; a TM value has the form \`HH[MM[SS[.S[S[S[S]]]]]][+/-ZZZZ]\`.`,
  minuteOutOfRange: (
    element: string,
    name: string,
    value: string,
    minute: number
  ) =>
    `\`${element}\` (${name}) has the minute \`${pad2(minute)}\` in \`${value}\`; a minute is \`00\` to \`59\`.`,
  monthOutOfRange: (
    element: string,
    name: string,
    value: string,
    month: number
  ) =>
    `\`${element}\` (${name}) has the month \`${pad2(month)}\` in \`${value}\`; a month is \`01\` to \`12\`.`,
  offsetOutOfRange: (
    element: string,
    name: string,
    value: string,
    offset: string
  ) =>
    `\`${element}\` (${name}) has the offset \`${offset}\` in \`${value}\`; an offset is at most 14 hours, with minutes \`00\` to \`59\`.`,
  secondOutOfRange: (
    element: string,
    name: string,
    value: string,
    second: number
  ) =>
    `\`${element}\` (${name}) has the second \`${pad2(second)}\` in \`${value}\`; a second is \`00\` to \`59\`.`,
} as const;

/** `""`, the explicit null HL7v2 sends to delete a value. */
const EXPLICIT_NULL = '""';

type Datatype = "DT" | "TM" | "DTM";

type Primitive = FieldRepetition | Component | Subcomponent;

/**
 * The date and time datatype of a primitive node, from `data.datatypeId`, or
 * `undefined` when it holds no date or time.
 *
 * TS.1 is read as DTM in every version, though v2.2 to v2.4 type it ST. A
 * primitive TS, as in v2.1, is read as DTM.
 */
function datatypeOf(node: Primitive): Datatype | undefined {
  const data = node.data;
  if (data?.kind !== "primitive") {
    return undefined;
  }
  // TS (Time Stamp) by version, as the standard prints its component table:
  //   v2.1        primitive; the field is the time stamp
  //   v2.2–v2.4   composite; TS.1 "time of an event" is typed ST
  //   v2.5        composite; TS.1 "Time" is typed DTM
  //   v2.6+       withdrawn; the fields it typed are DTM
  // In v2.2 to v2.4 the type says string, but TS.1 holds a time stamp in the
  // form v2.5 names DTM. It is matched by its row, so a v2.3 PID-7.1 is
  // checked like a v2.5 one. TS.1 is a subcomponent when the TS sits inside a
  // composite (XCN.19 Effective Date in PV1-7 is PV1-7.19.1), and carries the
  // same `id`. TS.2, the degree of precision (table 0529), is a code and is not
  // matched.
  // Stryker disable next-line ConditionalExpression,StringLiteral,OptionalChaining: equivalent; a field repetition carries no `id`, and `data` is set once `kind` is "primitive"
  if (node.type !== "field-repetition" && node.data?.id === "TS.1") {
    return "DTM";
  }
  switch (data.datatypeId) {
    // DT and TM are primitives in every version. DTM is TS.1 in v2.5 and the
    // field's own datatype from v2.6.
    case "DT":
    case "TM":
    case "DTM": {
      return data.datatypeId;
    }
    // Only v2.1 reaches here: from v2.2 to v2.5 a TS is composite, so its node
    // is not primitive and its value is read from TS.1 above.
    case "TS": {
      return "DTM";
    }
    // Stryker disable next-line ConditionalExpression,BlockStatement: equivalent; without the arm the function still returns undefined
    default: {
      return undefined;
    }
  }
}

/**
 * The value of a primitive node: its first subcomponent.
 *
 * Components and subcomponents a primitive datatype does not define are
 * ignored, as HL7v2 tells the recipient to ignore "components, subcomponents,
 * and extra repetitions of a field that are present but were not expected"
 * (v2.5.1 chapter 2, section 2.6.2).
 */
function primitiveValue(node: Primitive): string | undefined {
  switch (node.type) {
    case "field-repetition": {
      return node.children[0]?.children[0]?.value;
    }
    case "component": {
      return node.children[0]?.value;
    }
    case "subcomponent": {
      return node.value;
    }
  }
}

function parse(datatype: Datatype, value: string): ParseResult<unknown> {
  switch (datatype) {
    case "DT": {
      return parseDT(value);
    }
    case "TM": {
      return parseTM(value);
    }
    case "DTM": {
      return parseDTM(value);
    }
  }
}

function invalidFormat(
  datatype: Datatype,
  element: string,
  name: string,
  value: string
): string {
  switch (datatype) {
    case "DT": {
      return messages.invalidDT(element, name, value);
    }
    case "TM": {
      return messages.invalidTM(element, name, value);
    }
    case "DTM": {
      return messages.invalidDTM(element, name, value);
    }
  }
}

function messageFor(
  datatype: Datatype,
  element: string,
  name: string,
  value: string,
  issue: TimestampIssue
): string {
  switch (issue.code) {
    case "invalid-format": {
      return invalidFormat(datatype, element, name, value);
    }
    case "month-out-of-range": {
      return messages.monthOutOfRange(element, name, value, issue.month);
    }
    case "day-out-of-range": {
      return messages.dayOutOfRange(element, name, value, issue);
    }
    case "hour-out-of-range": {
      return messages.hourOutOfRange(element, name, value, issue.hour);
    }
    case "minute-out-of-range": {
      return messages.minuteOutOfRange(element, name, value, issue.minute);
    }
    case "second-out-of-range": {
      return messages.secondOutOfRange(element, name, value, issue.second);
    }
    case "offset-out-of-range": {
      return messages.offsetOutOfRange(element, name, value, issue.offset);
    }
  }
}

/** Reports the value of `node` when it is a date or time that does not parse. */
function check(
  file: VFile,
  node: Primitive,
  element: string,
  name: string,
  ancestors: Nodes[]
): void {
  const datatype = datatypeOf(node);
  const value = primitiveValue(node);
  if (datatype === undefined || !value || value === EXPLICIT_NULL) {
    return;
  }
  const result = parse(datatype, value);
  if (result.success) {
    return;
  }
  const message = file.message(
    messageFor(datatype, element, name, value, result.issue),
    { ancestors: [...ancestors, node], place: node.position }
  );
  message.actual = value;
}

/**
 * Lint rule that reports a DT, TM, or DTM value that is not a valid date or
 * time: one that does not follow its datatype's format, or names a month,
 * day, hour, minute, second, or offset that does not exist, such as
 * `20250229`.
 *
 * Checks every primitive field repetition, component, and subcomponent whose
 * datatype is DT, TM, or DTM, and TS.1 in every version. Empty values and
 * the explicit null `""` are not checked.
 *
 * Reads `id` and `name` from `field.data`, set by
 * `@glion/annotate-profile-fields`, and `kind`, `datatypeId`, `id`, and `name`
 * from repetition, component, and subcomponent data, set by
 * `@glion/annotate-profile-datatypes`. Both MUST run before it.
 *
 * @example
 *   ```typescript
 *   unified()
 *     .use(hl7v2AnnotateProfileContext)
 *     .use(hl7v2AnnotateProfileFields)
 *     .use(hl7v2AnnotateProfileDatatypes)
 *     .use(hl7v2LintTimestamps);
 *   ```;
 */
const hl7v2LintTimestamps = lintRule<Root>(
  {
    origin: "hl7v2-lint:timestamps",
    url: "https://github.com/rethinkhealth/glion/tree/main/packages/lint-profile-timestamps#readme",
  },
  (tree, file) => {
    visit(tree, "field", (field, ancestors) => {
      const id = field.data?.id;
      // Stryker disable next-line ConditionalExpression,BlockStatement: equivalent; a field without `id` was not annotated, so none of its nodes has a `kind` to check
      if (id === undefined) {
        return SKIP;
      }
      const fieldName = field.data?.name ?? "";

      for (const repetition of field.children) {
        check(file, repetition, id, fieldName, [...ancestors, field]);

        for (const [c, component] of repetition.children.entries()) {
          const componentId = `${id}.${c + 1}`;
          check(file, component, componentId, component.data?.name ?? "", [
            ...ancestors,
            field,
            repetition,
          ]);

          for (const [s, subcomponent] of component.children.entries()) {
            check(
              file,
              subcomponent,
              `${componentId}.${s + 1}`,
              subcomponent.data?.name ?? "",
              [...ancestors, field, repetition, component]
            );
          }
        }
      }
      return SKIP;
    });
  }
);

export default hl7v2LintTimestamps;
