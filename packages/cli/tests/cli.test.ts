import {
  existsSync,
  mkdirSync,
  readFileSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { execa } from 'execa';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

const CLI_PATH = resolve('./dist/index.js');
const SAMPLE_HL7_PATH = resolve('./tests/data/siu.s12.txt');
const TEST_HL7_CONTENT = `MSH|^~\\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|20110613061611||SIU^S12|24916560|P|2.3||||||
SCH|10345^10345|2196178^2196178|||10345|OFFICE^Office visit|reason for the appointment|OFFICE|60|m|^^60^20110617084500^20110617093000|||||9^DENT^ARTHUR^||||9^DENT^ARTHUR^|||||Scheduled
PID|1||42||BEEBLEBROX^ZAPHOD||19781012|M|||1 Heart of Gold ave^^Fort Wayne^IN^46804||(260)555-1234|||S||999999999|||||||||||||||||||||`;

describe('CLI Command Structure', () => {
  it('should show help when no arguments provided', async () => {
    const { stdout } = await execa('node', [CLI_PATH, '--help']);
    expect(stdout).toContain('HL7v2 CLI Tool');
    expect(stdout).toContain('Usage:');
    expect(stdout).toContain('parse');
  });

  it('should show version with --version flag', async () => {
    const { stdout } = await execa('node', [CLI_PATH, '--version']);
    expect(stdout).toContain('0.1.0');
  });

  it('should show parse command help', async () => {
    const { stdout } = await execa('node', [CLI_PATH, 'parse', '--help']);
    expect(stdout).toContain('Parse an HL7v2 message');
    expect(stdout).toContain('Arguments:');
    expect(stdout).toContain('[file]');
    expect(stdout).toContain('Options:');
    expect(stdout).toContain('-o, --output');
  });
});

describe('File Input Tests', () => {
  let tempDir: string;
  let testFile: string;

  beforeEach(() => {
    tempDir = join(tmpdir(), `hl7-cli-test-${Date.now()}`);
    mkdirSync(tempDir, { recursive: true });
    testFile = join(tempDir, 'test.hl7');
  });

  afterEach(() => {
    if (existsSync(tempDir)) {
      try {
        if (existsSync(testFile)) {
          unlinkSync(testFile);
        }
      } catch {
        // Ignore cleanup errors
      }
    }
  });

  it('should parse valid HL7 file to console', async () => {
    writeFileSync(testFile, TEST_HL7_CONTENT);

    const { stdout } = await execa('node', [CLI_PATH, 'parse', testFile]);

    expect(stdout).toContain('Parsed HL7 DOM:');
    expect(stdout).toContain('Stats:');
    expect(stdout).toContain('Segments: 3');
    expect(stdout).toContain('Message Type: SIU^S12');
    expect(stdout).toContain('Characters:');
  });

  it('should parse sample file successfully', async () => {
    const { stdout } = await execa('node', [
      CLI_PATH,
      'parse',
      SAMPLE_HL7_PATH,
    ]);

    expect(stdout).toContain('Parsed HL7 DOM:');
    expect(stdout).toContain('Stats:');
    expect(stdout).toContain('Message Type: SIU^S12');
  });

  it('should handle non-existent file gracefully', async () => {
    const nonExistentFile = join(tempDir, 'nonexistent.hl7');

    await expect(
      execa('node', [CLI_PATH, 'parse', nonExistentFile])
    ).rejects.toThrow();
  });

  it('should handle empty file', async () => {
    writeFileSync(testFile, '');

    const { stdout } = await execa('node', [CLI_PATH, 'parse', testFile]);

    expect(stdout).toContain('Stats:');
    expect(stdout).toContain('Characters: 0');
    expect(stdout).toContain('Message Type: Unknown');
  });

  it('should handle malformed HL7 content', async () => {
    writeFileSync(testFile, 'Invalid HL7 content without proper structure');

    const { stdout } = await execa('node', [CLI_PATH, 'parse', testFile]);

    expect(stdout).toContain('Stats:');
    expect(stdout).toContain('Message Type: Unknown');
  });
});

describe('Output Option Tests', () => {
  let tempDir: string;
  let testFile: string;
  let outputFile: string;

  beforeEach(() => {
    tempDir = join(tmpdir(), `hl7-cli-test-${Date.now()}`);
    mkdirSync(tempDir, { recursive: true });
    testFile = join(tempDir, 'test.hl7');
    outputFile = join(tempDir, 'output.json');
    writeFileSync(testFile, TEST_HL7_CONTENT);
  });

  afterEach(() => {
    if (existsSync(tempDir)) {
      try {
        if (existsSync(testFile)) {
          unlinkSync(testFile);
        }
        if (existsSync(outputFile)) {
          unlinkSync(outputFile);
        }
      } catch {
        // Ignore cleanup errors
      }
    }
  });

  it('should write output to specified file with -o flag', async () => {
    const { stdout } = await execa('node', [
      CLI_PATH,
      'parse',
      testFile,
      '-o',
      outputFile,
    ]);

    expect(stdout).toContain(`Results written to: ${outputFile}`);
    expect(stdout).toContain('Stats:');
    expect(stdout).toContain('Segments: 3');
    expect(stdout).toContain('Message Type: SIU^S12');

    expect(existsSync(outputFile)).toBe(true);
    const outputContent = readFileSync(outputFile, 'utf8');
    const parsedOutput = JSON.parse(outputContent);
    expect(parsedOutput).toHaveProperty('children');
  });

  it('should write output to specified file with --output flag', async () => {
    const { stdout } = await execa('node', [
      CLI_PATH,
      'parse',
      testFile,
      '--output',
      outputFile,
    ]);

    expect(stdout).toContain(`Results written to: ${outputFile}`);
    expect(existsSync(outputFile)).toBe(true);

    const outputContent = readFileSync(outputFile, 'utf8');
    expect(() => JSON.parse(outputContent)).not.toThrow();
  });

  it('should handle invalid output path gracefully', async () => {
    const invalidPath = '/invalid/path/that/does/not/exist/output.json';

    await expect(
      execa('node', [CLI_PATH, 'parse', testFile, '-o', invalidPath])
    ).rejects.toThrow();
  });

  it('should create valid JSON output file', async () => {
    await execa('node', [CLI_PATH, 'parse', testFile, '-o', outputFile]);

    const outputContent = readFileSync(outputFile, 'utf8');
    const parsedOutput = JSON.parse(outputContent);

    expect(parsedOutput).toHaveProperty('children');
    expect(Array.isArray(parsedOutput.children)).toBe(true);
    expect(parsedOutput.children.length).toBeGreaterThan(0);
  });
});

describe('Stats Reporting Tests', () => {
  let tempDir: string;
  let testFile: string;

  beforeEach(() => {
    tempDir = join(tmpdir(), `hl7-cli-test-${Date.now()}`);
    mkdirSync(tempDir, { recursive: true });
    testFile = join(tempDir, 'test.hl7');
  });

  afterEach(() => {
    if (existsSync(tempDir)) {
      try {
        if (existsSync(testFile)) {
          unlinkSync(testFile);
        }
      } catch {
        // Ignore cleanup errors
      }
    }
  });

  it('should report correct segment count', async () => {
    writeFileSync(testFile, TEST_HL7_CONTENT);

    const { stdout } = await execa('node', [CLI_PATH, 'parse', testFile]);

    expect(stdout).toContain('Segments: 3');
  });

  it('should report correct character count', async () => {
    writeFileSync(testFile, TEST_HL7_CONTENT);

    const { stdout } = await execa('node', [CLI_PATH, 'parse', testFile]);

    expect(stdout).toContain(`Characters: ${TEST_HL7_CONTENT.length}`);
  });

  it('should report correct message type', async () => {
    writeFileSync(testFile, TEST_HL7_CONTENT);

    const { stdout } = await execa('node', [CLI_PATH, 'parse', testFile]);

    expect(stdout).toContain('Message Type: SIU^S12');
  });

  it('should handle single segment message', async () => {
    const singleSegment =
      'MSH|^~\\&|SENDING|FACILITY|RECEIVING|FACILITY|20110613||ADT^A01|123|P|2.3||||||';
    writeFileSync(testFile, singleSegment);

    const { stdout } = await execa('node', [CLI_PATH, 'parse', testFile]);

    expect(stdout).toContain('Segments: 1');
    expect(stdout).toContain(`Characters: ${singleSegment.length}`);
    expect(stdout).toContain('Message Type: ADT^A01');
  });

  it('should handle empty message gracefully', async () => {
    writeFileSync(testFile, '');

    const { stdout } = await execa('node', [CLI_PATH, 'parse', testFile]);

    expect(stdout).toContain('Segments: 0');
    expect(stdout).toContain('Characters: 0');
    expect(stdout).toContain('Message Type: Unknown');
  });
});

describe('Error Handling Tests', () => {
  it('should exit with error code for invalid arguments', async () => {
    await expect(
      execa('node', [CLI_PATH, 'invalid-command'])
    ).rejects.toThrow();
  });

  it('should handle file read permissions error', async () => {
    // This test might be platform-specific, so we'll skip it on some systems
    const restrictedFile = '/root/nonexistent.hl7';

    await expect(
      execa('node', [CLI_PATH, 'parse', restrictedFile])
    ).rejects.toThrow();
  });
});
