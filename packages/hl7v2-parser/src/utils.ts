import type { HL7v2Delimiters } from './types';

/**
 * Auto-detect custom delimiters from MSH-1 and MSH-2
 */
export function detectDelimitersFromMSH(
  raw: string,
  segmentDelimiter: string
): Partial<HL7v2Delimiters> {
  const firstLineEnd = raw.indexOf(segmentDelimiter);

  // If there are multiple segments, use the first one. Otherwise, use the entire message.
  const mshSegment = firstLineEnd >= 0 ? raw.slice(0, firstLineEnd) : raw;

  if (!mshSegment.startsWith('MSH')) {
    return {};
  }

  const fieldDelimiter = mshSegment[3];

  if (!fieldDelimiter) {
    return {};
  }

  const encodingChars = mshSegment.slice(4, 8);

  if (encodingChars.length !== 4) {
    return {};
  }

  return {
    field: fieldDelimiter,
    component: encodingChars[0],
    repetition: encodingChars[1],
    escape: encodingChars[2],
    subcomponent: encodingChars[3],
    segment: segmentDelimiter,
  };
}

/**
 * Split text by string delimiter, preserving positions
 */
export function splitByString(
  text: string,
  delimiter: string
): Array<{ value: string; start: number; end: number }> {
  const result: { value: string; start: number; end: number }[] = [];
  let lastIndex = 0;
  let index = text.indexOf(delimiter);

  while (index !== -1) {
    result.push({
      value: text.slice(lastIndex, index),
      start: lastIndex,
      end: index,
    });
    lastIndex = index + delimiter.length;
    index = text.indexOf(delimiter, lastIndex);
  }

  result.push({
    value: text.slice(lastIndex),
    start: lastIndex,
    end: text.length,
  });
  return result;
}
