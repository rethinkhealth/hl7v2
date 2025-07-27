/** biome-ignore-all lint/suspicious/noConsole: This is a CLI */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve as resolvePath } from 'node:path';
import { createInterface } from 'node:readline';

import { parseHL7 } from '@rethinkhealth/hl7v2';
import { Command } from 'commander';
import { getMessageType } from './utils';

const program = new Command();

program.name('hl7').description('HL7v2 CLI Tool').version('0.1.0');

program
  .command('parse')
  .description('Parse an HL7v2 message')
  .argument('[file]', 'Path to HL7 file')
  .option('-o, --output <path>', 'Output file path for parsed results')
  .action(async (file, options) => {
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

    const dom = parseHL7(message, {
      delimiters: {
        segment: '\n',
      },
    });

    // Prepare the output data
    const segments = dom.children?.length || 0;

    const jsonOutput = JSON.stringify(dom, null, 2);

    // Handle output
    if (options.output) {
      try {
        const outputPath = resolvePath(options.output);
        writeFileSync(outputPath, jsonOutput, 'utf8');
        console.log(`Results written to: ${outputPath}`);

        // Also show basic stats in console
        console.log('\nStats:');
        console.log(`- Segments: ${segments}`);
        console.log(`- Characters: ${message.length}`);
        console.log(`- Message Type: ${getMessageType(dom)}`);
      } catch (error) {
        console.error(
          `Error writing to file: ${error instanceof Error ? error.message : String(error)}`
        );
        process.exit(1);
      }
    } else {
      // Default behavior - show parsed tree in console
      console.log('\nParsed HL7 DOM:\n');
      console.log(JSON.stringify(dom, null, 2));

      // Basic stats
      console.log('\nStats:');
      console.log(`- Segments: ${segments}`);
      console.log(`- Characters: ${message.length}`);
      console.log(`- Message Type: ${getMessageType(dom)}`);
    }
  });

export default program;
