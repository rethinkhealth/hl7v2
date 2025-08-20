import type { Delimiters, Root, Subcomponent } from '@rethinkhealth/hl7v2-ast';
import { DEFAULT_DELIMITERS } from '@rethinkhealth/hl7v2-utils';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import { describe, expect, it } from 'vitest';
import { hl7v2DecodeEscapes } from '../src/index';

function makeTree(value: string, delimiters?: Delimiters): Root {
  return {
    type: 'root',
    children: [
      {
        type: 'segment',
        children: [
          {
            type: 'field',
            children: [
              {
                type: 'field-repetition',
                children: [
                  {
                    type: 'component',
                    children: [
                      {
                        type: 'subcomponent',
                        value,
                      } as Subcomponent,
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    data: { delimiters: delimiters ?? DEFAULT_DELIMITERS },
  };
}

describe('hl7v2DecodeEscapes plugin', () => {
  it('decodes standard delimiter escapes with default delimiters', async () => {
    const tree = makeTree(
      'Value\\F\\More\\S\\Stuff\\R\\Again\\T\\Sub\\E\\Escaped'
    );

    await unified().use(hl7v2DecodeEscapes).run(tree);

    visit(tree, 'subcomponent', (node: Subcomponent) => {
      expect(node.value).toBe('Value|More^Stuff~Again&Sub\\Escaped');
    });
  });

  it('decodes using custom delimiters from Root.data.delimiters', async () => {
    const customDelimiters = {
      field: '*',
      component: '$',
      repetition: '%',
      subcomponent: '@',
      escape: '\\',
      segment: '\n',
    } satisfies Delimiters;
    const tree = makeTree('Test\\F\\Custom\\S\\Delims', customDelimiters);

    await unified().use(hl7v2DecodeEscapes).run(tree);

    visit(tree, 'subcomponent', (node: Subcomponent) => {
      expect(node.value).toBe('Test*Custom$Delims');
    });
  });

  it('decodes .br into the default segment delimiter', async () => {
    const tree = makeTree('Line1\\.br\\Line2');

    await unified().use(hl7v2DecodeEscapes).run(tree);

    visit(tree, 'subcomponent', (node: Subcomponent) => {
      expect(node.value).toBe(`Line1${DEFAULT_DELIMITERS.segment}Line2`);
    });
  });

  it('decodes hex escapes', async () => {
    const tree = makeTree('Hello\\X0A\\World\\X0D\\Done');

    await unified().use(hl7v2DecodeEscapes).run(tree);

    visit(tree, 'subcomponent', (node: Subcomponent) => {
      expect(node.value).toBe('Hello\nWorld\rDone');
    });
  });

  it('leaves unknown escapes untouched', async () => {
    const tree = makeTree('Unknown\\ABC\\Value');

    await unified().use(hl7v2DecodeEscapes).run(tree);

    visit(tree, 'subcomponent', (node: Subcomponent) => {
      expect(node.value).toBe('Unknown\\ABC\\Value');
    });
  });

  it('does nothing when there are no escapes', async () => {
    const tree = makeTree('PlainValue');

    await unified().use(hl7v2DecodeEscapes).run(tree);

    visit(tree, 'subcomponent', (node: Subcomponent) => {
      expect(node.value).toBe('PlainValue');
    });
  });
});
