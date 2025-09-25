/** biome-ignore-all lint/style/useUnifiedTypeSignatures: fine */
import type {
  Component,
  Field,
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
/** Single component (string, Subcomponent, or Component) */
export function f(component: Component): Field;
/** Explicit list of components */
export function f(components: Component[]): Field;
export function f(input?: Component | Component[] | string): Field {
  if (input === undefined) {
    return u('field', []);
  }
  if (typeof input === 'string') {
    return u('field', [
      u('field-repetition', [u('component', [u('subcomponent', input)])]),
    ]);
  }
  if (Array.isArray(input)) {
    return u('field', [u('field-repetition', input)]);
  }
  return u('field', [u('field-repetition', [input])]);
}

export function c(): Component;
export function c(value: string): Component;
export function c(subcomponents: string[]): Component;
export function c(input?: string | string[]): Component {
  if (input === undefined) {
    return u('component', []);
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

  return u('component', [input]);
}
