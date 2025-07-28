import { parseHL7v2 } from '@rethinkhealth/hl7v2';
import { args } from 'unified-args';

args({
  description: 'Command line interface to inspect and change HL7v2 messages',
  extensions: ['hl7', 'hl7v2'],
  ignoreName: '.hl7ignore',
  name: 'hl7',
  packageField: 'hl7Config',
  pluginPrefix: 'hl7',
  processor: parseHL7v2,
  rcName: '.hl7rc',
  version: '1.0.0',
});
