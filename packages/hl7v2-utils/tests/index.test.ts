import type {
  Component,
  Field,
  FieldRepetition,
  Segment,
  Subcomponent,
} from '@rethinkhealth/hl7v2-ast';
import { u } from 'unist-builder';
import { describe, expect, it } from 'vitest';
import { isEmptyNode } from '../src';

// Subcomponents that are considered empty
const emptySubcomponents = [
  u('subcomponent', { value: undefined }) as unknown as Subcomponent,
  u('subcomponent', { value: null }) as unknown as Subcomponent,
  u('subcomponent', { value: '' }),
  u('subcomponent', { value: '' }),
  u('subcomponent', { value: '   ' }),
] satisfies Subcomponent[];

const emptyComponents = [
  u('component', { children: [] }),
  u('component', { children: undefined }) as unknown as Component,
  ...emptySubcomponents.map((subcomponent) =>
    u('component', { children: [subcomponent] })
  ),
] satisfies Component[];

const emptyFieldRepetitions = [
  u('field-repetition', { children: [] }),
  u('field-repetition', { children: undefined }) as unknown as FieldRepetition,
  ...emptyComponents.map((component) =>
    u('field-repetition', { children: [component] })
  ),
] satisfies FieldRepetition[];

const emptyFields = [
  u('field', { children: [] }),
  u('field', { children: undefined }) as unknown as Field,
  ...emptyFieldRepetitions.map((fieldRepetition) =>
    u('field', { children: [fieldRepetition] })
  ),
] satisfies Field[];

const emptySegments = [
  u('segment', { children: [] }),
  u('segment', { children: undefined }) as unknown as Segment,
  ...emptyFields.map((field) => u('segment', { children: [field] })),
] satisfies Segment[];

describe('isEmptyNode', () => {
  describe('empty nodes', () => {
    it.each(emptySegments)(
      'should return true for an empty segment %#',
      (segment) => {
        expect(isEmptyNode(segment)).toBe(true);
      }
    );

    it.each(emptyFields)(
      'should return true for an empty field %#',
      (field) => {
        expect(isEmptyNode(field)).toBe(true);
      }
    );

    it.each(emptyFieldRepetitions)(
      'should return true for an empty field repetition %#',
      (fieldRepetition) => {
        expect(isEmptyNode(fieldRepetition)).toBe(true);
      }
    );

    it.each(emptyComponents)(
      'should return true for an empty component %#',
      (component) => {
        expect(isEmptyNode(component)).toBe(true);
      }
    );

    it.each(emptySubcomponents)(
      'should return true for an empty subcomponent %#',
      (subcomponent) => {
        expect(isEmptyNode(subcomponent)).toBe(true);
      }
    );
  });

  describe('non-empty nodes', () => {
    it('should return false for a non-empty segment', () => {
      const nonEmptySegment = u('segment', {
        children: [
          u('field', {
            children: [
              u('field-repetition', {
                children: [
                  u('component', {
                    children: [u('subcomponent', { value: 'test' })],
                  }),
                ],
              }),
            ],
          }),
        ],
      }) satisfies Segment;

      expect(isEmptyNode(nonEmptySegment)).toBe(false);
    });

    it('should return false for an empty segment with multiple empty field repetitions', () => {
      const nonEmptySegment = u('segment', {
        children: [
          u('field', {
            children: [
              // Empty field repetition
              u('field-repetition', {
                children: [
                  u('component', {
                    children: [u('subcomponent', { value: '' })],
                  }),
                ],
              }),

              // Empty field repetition
              u('field-repetition', {
                children: [
                  u('component', {
                    children: [u('subcomponent', { value: '' })],
                  }),
                ],
              }),
            ],
          }),
        ],
      }) satisfies Segment;

      expect(isEmptyNode(nonEmptySegment)).toBe(false);
    });
  });

  describe('edge cases', () => {
    it('should return true for a null node', () => {
      expect(isEmptyNode(null)).toBe(true);
    });

    it('should return true for an undefined node', () => {
      expect(isEmptyNode(undefined)).toBe(true);
    });

    it('should return false for an unknown node', () => {
      const unknownNode = u('unknown', { value: 'test' }) as unknown;
      expect(isEmptyNode(unknownNode as any)).toBe(false);
    });
  });
});
