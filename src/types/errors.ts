// Base Error Class
export class HL7v2Error extends Error {
  constructor(message: string) {
    super(message);
    this.name = "HL7v2Error";
  }
}

// Segment Error
export class SegmentError extends HL7v2Error {
  constructor(segmentName: string, message: string) {
    super(`Error in segment ${segmentName}: ${message}`);
    this.name = "SegmentError";
  }
}

// Field Error
export class FieldError extends HL7v2Error {
  constructor(segmentName: string, fieldNumber: number, message: string) {
    super(`Error in ${segmentName}.${fieldNumber}: ${message}`);
    this.name = "FieldError";
  }
}

// Component Error
export class ComponentError extends HL7v2Error {
  constructor(segmentName: string, fieldNumber: number, componentNumber: number, message: string) {
    super(`Error in ${segmentName}.${fieldNumber}.${componentNumber}: ${message}`);
    this.name = "ComponentError";
  }
}
