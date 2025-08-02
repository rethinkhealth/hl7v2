import { parseHL7v2 } from '@rethinkhealth/hl7v2';
import { args } from 'unified-args';

args({
  description: 'Command line interface to inspect and change HL7v2 messages',
  extensions: ['hl7v2', 'hl7', 'txt'],
  ignoreName: '.hl7v2ignore',
  name: 'hl7v2',
  packageField: 'hl7v2',
  pluginPrefix: 'hl7v2',
  processor: parseHL7v2,
  rcName: '.hl7v2rc',
  version: '1.0.0',
});
