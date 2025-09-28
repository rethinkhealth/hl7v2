/** biome-ignore-all lint/style/useUnifiedTypeSignatures: fine */
import type {
  Component,
  Field,
  FieldRepetition,
  Root,
  RootContent,
  Segment,
} from '@rethinkhealth/hl7v2-ast';
import { u } from 'unist-builder';

export function m(): Root;
export function m(child: RootContent): Root;
export function m(children: RootContent[]): Root;
export function m(input?: RootContent | RootContent[]): Root {
  if (input === undefined) {
    return u('root', []);
  }

  if (Array.isArray(input)) {
    return u('root', input);
  }

  return u('root', [input]);
}

export function s(): Segment;
export function s(header: string): Segment;
export function s(header: string, fields: Field[]): Segment;
export function s(header: string, field: Field): Segment;
export function s(header?: string, input?: Field[] | Field): Segment {
  let headerField: Field[] = [];
  if (header !== undefined) {
    headerField = [f(header)];
  }

  if (input === undefined) {
    return u('segment', [...headerField]);
  }

  if (Array.isArray(input)) {
    return u('segment', [...headerField, ...input]);
  }

  return u('segment', [...headerField, input]);
}

/** Empty field */
export function f(): Field;
/** Single value field */
export function f(value: string): Field;
/** Single repetition of components */
export function f(repetition: FieldRepetition): Field;
export function f(repetitions: FieldRepetition[]): Field;
/** Single component (string, Subcomponent, or Component) */
export function f(component: Component): Field;
/** Explicit list of components */
export function f(components: Component[]): Field;
export function f(
  input?:
    | FieldRepetition // Single repetition of components
    | FieldRepetition[] // Explicit list of repetitions of components
    | string // Single string which is converted to a repetition with one component that has a subcomponent with the string
    | Component // Single component which is converted to a repetition with one component
    | Component[] // Explicit list of components which are converted to a repetition with the array as the components
): Field {
  if (input === undefined) {
    return u('field', [r()]);
  }
  if (typeof input === 'string') {
    return u('field', [r([input])]);
  }
  if (Array.isArray(input)) {
    if (input.every((v) => v.type === 'field-repetition')) {
      return u('field', input);
    }
    return u('field', [r(input)]);
  }
  if (input.type === 'field-repetition') {
    return u('field', [input]);
  }
  return u('field', [r([input])]);
}

export function r(): FieldRepetition;
export function r(values: string[]): FieldRepetition;
export function r(components: Component[]): FieldRepetition;
export function r(input?: string[] | Component[]): FieldRepetition {
  if (input === undefined) {
    return u('field-repetition', [c()]);
  }
  if (Array.isArray(input)) {
    if (input.every((v) => typeof v === 'string')) {
      return u(
        'field-repetition',
        input.map((v) => c(v))
      );
    }
    return u('field-repetition', input);
  }
  return u('field-repetition', input);
}

export function c(): Component;
export function c(value: string): Component;
export function c(values: string[]): Component;
export function c(input?: string | string[]): Component {
  if (input === undefined) {
    return u('component', [u('subcomponent', '')]);
  }

  if (typeof input === 'string') {
    return u('component', [u('subcomponent', input)]);
  }

  if (Array.isArray(input)) {
    return u(
      'component',
      input.map((subcomponent) => u('subcomponent', subcomponent))
    );
  }

  return u('component', []);
}
