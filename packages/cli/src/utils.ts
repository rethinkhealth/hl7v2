import type { HL7v2Node } from '@rethinkhealth/hl7v2';

/**
 * Extracts the message type from the MSH-9 field of an HL7v2 DOM.
 * - Supports both named children (MSH-9) and positional index (field 8).
 * - Joins subcomponents with '^'.
 * - Returns 'Unknown' if not found or empty.
 */
export function getMessageType(dom: HL7v2Node): string {
  const msh = dom.children?.find((n) => n.name === 'MSH');
  if (!msh) {
    return 'Unknown';
  }

  // Prefer named field
  let msh9 = msh.children?.find((n) => n.name === 'MSH-9');

  // Fallback: positional index 8 (MSH-9 is the 9th field, index 8)
  if (!msh9 && msh.children && msh.children.length > 8) {
    msh9 = msh.children[8];
  }

  if (!msh9) {
    return 'Unknown';
  }

  // Collect values from either direct value or subcomponents
  const values: string[] = [];
  if (msh9.value) {
    values.push(msh9.value);
  }

  if (msh9.children && msh9.children.length > 0) {
    for (const c of msh9.children) {
      if (c.value) {
        values.push(c.value);
      }
    }
  }

  const type = values.join('^').trim();
  return type !== '' ? type : 'Unknown';
}
