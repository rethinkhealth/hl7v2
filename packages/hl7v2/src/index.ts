import { hl7v2Jsonify } from '@rethinkhealth/hl7v2-json';
import { hl7v2Parser } from '@rethinkhealth/hl7v2-parser';
import { unified } from 'unified';

/**
 * Create a new unified processor that already uses `hl7v2-parser`.
 */
export const parseHL7v2 = unified().use(hl7v2Parser).use(hl7v2Jsonify).freeze();
