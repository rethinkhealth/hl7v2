// Base Types
export type SegmentName = string;

// Field Types
export interface FieldValue {
  value: string;
  position: number;
}

export interface ComponentValue extends FieldValue {
  components: string[];
}

export interface RepeatValue extends ComponentValue {
  repeats: Record<string, string>[];
}

// Segment Types
export interface Segment {
  name: SegmentName;
  fields: Map<string, RepeatValue[]>;
  instance: number;
}

// Message Types
export interface MessageSegment {
  [field: string]: string | Record<string, string> | Record<string, string>[];
}

export interface MessageJSON {
  [segment: string]: MessageSegment | MessageSegment[];
}
