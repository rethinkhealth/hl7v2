#!/usr/bin/env node
/** biome-ignore-all lint/suspicious/noConsole: This is a CLI */
import { readFileSync } from 'node:fs';
import { createInterface } from 'node:readline';

import { type HL7v2Node, parseHL7 } from '@rethinkhealth/hl7v2';
import { Command } from 'commander';

const program = new Command();

program.name('hl7').description('HL7v2 CLI Tool').version('0.1.0');

program
  .command('parse')
  .description('Parse an HL7v2 message')
  .argument('[file]', 'Path to HL7 file')
  .action(async (file) => {
    let message: string;

    if (file) {
      message = readFileSync(file, 'utf8');
    } else {
      // Interactive mode
      const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      message = await new Promise<string>((resolve) =>
        rl.question('Paste HL7 message:\n', resolve)
      );
      rl.close();
    }

    const dom = parseHL7(message);

    // Show parsed tree
    console.log('\nParsed HL7 DOM:\n');
    console.log(JSON.stringify(dom, null, 2));

    // Basic stats
    const segments = dom.children?.length || 0;
    console.log('\nStats:');
    console.log(`- Segments: ${segments}`);
    console.log(`- Characters: ${message.length}`);
    console.log(`- Message Type: ${getMessageType(dom)}`);
  });

program.parse(process.argv);

// Extract MSH-9 for message type
function getMessageType(dom: HL7v2Node): string {
  const msh = dom.children?.find((n: HL7v2Node) => n.name === 'MSH');
  return msh?.children?.[8]?.value || 'Unknown';
}
