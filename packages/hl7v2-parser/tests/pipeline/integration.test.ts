import { describe, expect, it, vi } from 'vitest';
import { fromHL7v2Pipeline } from '../../src/parser';
import {
  BasicValidationHook,
  SegmentRequirementValidationHook,
} from '../../src/pipeline/validation/basic-validation';
import { PIDSegmentParser } from './data/custom-segment-parser';

describe('Pipeline Integration Tests', () => {
  describe('Complete parsing pipeline', () => {
    it('should parse a complete HL7v2 message', () => {
      const message = `MSH|^~\\&|SENDING_APP|SENDING_FAC|RECEIVING_APP|RECEIVING_FAC|20110613061611||ADT^A04|12345|P|2.3
PID|1||123456||SMITH^JOHN^J||19800101|M|||123 MAIN ST^^ANYTOWN^ST^12345
PV1|1|I|ICU^101^1|||DOCTOR123^SMITH^JOHN^MD`;

      const result = fromHL7v2Pipeline(message);

      expect(result).toBeDefined();
      expect(result.type).toBe('root');
      expect(result.children).toBeDefined();
      expect(result.children?.length).toBe(3);

      // Check MSH segment
      const mshSegment = result.children?.[0];
      expect(mshSegment?.name).toBe('MSH');
      expect(mshSegment?.children?.length).toBe(14);

      // Check PID segment
      const pidSegment = result.children?.[1];
      expect(pidSegment?.name).toBe('PID');
      expect(pidSegment?.children?.length).toBeGreaterThan(10);

      // Check PV1 segment
      const pv1Segment = result.children?.[2];
      expect(pv1Segment?.name).toBe('PV1');
      expect(pv1Segment?.children?.length).toBeGreaterThan(5);
    });

    it('should work with custom segment parsers', () => {
      const message = `MSH|^~\\&|SYSTEM|HOSPITAL|RECEIVER|FACILITY|20220101120000||ADT^A01|MSG001|P|2.4
PID|1||PATIENT123||JONES^MARY^A||19900615|F|||456 OAK AVE^^HOMETOWN^CA^90210`;

      const customParsers = new Map();
      customParsers.set('PID', new PIDSegmentParser());

      const result = fromHL7v2Pipeline(message, { customParsers });

      expect(result).toBeDefined();
      expect(result.children?.length).toBe(2);

      const pidSegment = result.children?.[1];
      expect(pidSegment?.name).toBe('PID');
      expect(
        pidSegment && 'metadata' in pidSegment ? pidSegment.metadata : undefined
      ).toBeDefined();
      const pidMetadata =
        pidSegment && 'metadata' in pidSegment
          ? (pidSegment.metadata as {
              hasPatientId: boolean;
              hasPatientName: boolean;
            })
          : undefined;
      expect(pidMetadata?.hasPatientId).toBe(true);
      expect(pidMetadata?.hasPatientName).toBe(true);
    });

    it('should work with validation hooks', () => {
      const message = `MSH|^~\\&|SYSTEM|HOSPITAL|RECEIVER|FACILITY|20220101120000||ADT^A01|MSG001|P|2.4
PV1|1|I|ICU^101^1|||DOCTOR123^SMITH^JOHN^MD`;

      const requirements = new Map();
      requirements.set('MSH', 12);
      requirements.set('PV1', 6);

      // Mock console to capture validation output
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {
        /* no-op */
      });
      const consoleErrorSpy = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {
          /* no-op */
        });

      const result = fromHL7v2Pipeline(message, {
        validationHooks: [
          new BasicValidationHook(),
          new SegmentRequirementValidationHook(requirements),
        ],
      });

      expect(result).toBeDefined();
      expect(result.children?.length).toBe(2);

      // Restore console methods
      consoleSpy.mockRestore();
      consoleErrorSpy.mockRestore();
    });

    it('should handle custom delimiters', () => {
      const message = `MSH$@~\\#$SYSTEM$HOSPITAL$RECEIVER$FACILITY$20220101120000$$ADT@A01$MSG001$P$2.4
PID$1$$PATIENT123$$JONES@MARY@A$$19900615$F$$$456 OAK AVE@@HOMETOWN@CA@90210`;

      const result = fromHL7v2Pipeline(message, {
        delimiters: {
          field: '$',
          component: '@',
          subcomponent: '#',
          repetition: '~',
          escape: '\\',
          segment: '\n',
        },
        autoDetectDelimiters: false,
      });

      expect(result).toBeDefined();
      expect(result.children?.length).toBe(2);
      expect(result.delimiter).toBe('\n');

      const mshSegment = result.children?.[0];
      expect(mshSegment?.name).toBe('MSH');
      expect(mshSegment?.delimiter).toBe('$');
    });

    it('should handle empty messages gracefully', () => {
      const result = fromHL7v2Pipeline('');

      expect(result).toBeDefined();
      expect(result.type).toBe('root');
      expect(result.children).toEqual([]);
    });

    it('should handle malformed messages', () => {
      const message = 'NOT_A_VALID_HL7_MESSAGE';

      const result = fromHL7v2Pipeline(message);

      expect(result).toBeDefined();
      expect(result.type).toBe('root');
      // Should still create a segment, even if malformed
      expect(result.children?.length).toBe(1);
    });
  });

  describe('Composability and Extensibility', () => {
    it('should allow mixing multiple custom parsers', () => {
      const message = `MSH|^~\\&|SYSTEM|HOSPITAL|RECEIVER|FACILITY|20220101120000||ADT^A01|MSG001|P|2.4
PID|1||PATIENT123||JONES^MARY^A||19900615|F|||456 OAK AVE^^HOMETOWN^CA^90210
PV1|1|I|ICU^101^1|||DOCTOR123^SMITH^JOHN^MD`;

      const customParsers = new Map();
      customParsers.set('PID', new PIDSegmentParser());
      // Could add more custom parsers here

      const result = fromHL7v2Pipeline(message, { customParsers });

      expect(result.children?.length).toBe(3);

      // PID should use custom parser
      const pidSegment = result.children?.[1];
      expect(
        pidSegment && 'metadata' in pidSegment ? pidSegment.metadata : undefined
      ).toBeDefined();

      // PV1 should use default parser (no custom metadata)
      const pv1Segment = result.children?.[2];
      expect(
        pv1Segment && 'metadata' in pv1Segment ? pv1Segment.metadata : undefined
      ).toBeUndefined();
    });

    it('should allow chaining validation hooks', () => {
      const message = `MSH|^~\\&|SYSTEM|HOSPITAL|RECEIVER|FACILITY|20220101120000||ADT^A01|MSG001|P|2.4
PID|1||PATIENT123||JONES^MARY^A||19900615|F|||456 OAK AVE^^HOMETOWN^CA^90210`;

      const requirements1 = new Map([['MSH', 12]]);
      const requirements2 = new Map([['PID', 6]]);

      const result = fromHL7v2Pipeline(message, {
        validationHooks: [
          new BasicValidationHook(),
          new SegmentRequirementValidationHook(requirements1),
          new SegmentRequirementValidationHook(requirements2),
        ],
      });

      expect(result).toBeDefined();
      expect(result.children?.length).toBe(2);
    });
  });
});
