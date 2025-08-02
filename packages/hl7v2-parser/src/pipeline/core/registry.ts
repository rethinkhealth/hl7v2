import type { ISegmentParser } from '../interfaces';
import { SegmentParser } from './parsers/segment';
import { MSHSegmentParser } from './parsers/segment-msh';

/**
 * Registry for segment parsers with fallback strategy
 */
export class SegmentParserRegistry {
  private parsers = new Map<string, ISegmentParser>();
  private defaultParser: ISegmentParser;

  constructor(customParsers?: Map<string, ISegmentParser>) {
    this.defaultParser = new SegmentParser();

    // Register built-in parsers
    this.register(new MSHSegmentParser());

    // Register custom parsers if provided
    if (customParsers) {
      for (const [, parser] of customParsers) {
        this.register(parser);
      }
    }
  }

  /**
   * Register a segment parser for a specific segment type
   */
  register(parser: ISegmentParser): void {
    this.parsers.set(parser.segmentType, parser);
  }

  /**
   * Get the appropriate parser for a segment type
   */
  getParser(segmentType: string): ISegmentParser {
    return this.parsers.get(segmentType) || this.defaultParser;
  }

  /**
   * Check if a parser is registered for a segment type
   */
  hasParser(segmentType: string): boolean {
    return this.parsers.has(segmentType);
  }

  /**
   * Unregister a parser for a segment type
   */
  unregister(segmentType: string): boolean {
    return this.parsers.delete(segmentType);
  }

  /**
   * Get all registered segment types
   */
  getRegisteredTypes(): string[] {
    return Array.from(this.parsers.keys());
  }
}
