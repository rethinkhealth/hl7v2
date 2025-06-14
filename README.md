# HL7v2

[![npm version](https://badge.fury.io/js/@rethinkhealth%2Fhl7v2.svg)](https://badge.fury.io/js/@rethinkhealth%2Fhl7v2)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

A TypeScript library for parsing and generating HL7v2 messages with a focus on type safety and functional design.

## Features

- **Type-Safe Operations**: Strongly typed segment definitions and field access
- **Bidirectional Conversion**: Parse HL7v2 to JSON and generate HL7v2 from JSON
- **Stateless Design**: Pure functional approach with no internal state
- **Flexible Delimiters**: Support for custom field, component, and repeat separators
- **Comprehensive Error Handling**: Detailed error messages with segment and field context

## Installation

```bash
# Using npm
npm install @rethinkhealth/hl7v2

# Using yarn
yarn add @rethinkhealth/hl7v2

# Using pnpm
pnpm add @rethinkhealth/hl7v2
```

## Quick Start

```typescript
import { HL7v2Client } from '@rethinkhealth/hl7v2';

const client = new HL7v2Client();

// Parse HL7v2 to JSON
const json = client.parse('MSH|^~\\&|HOSP|FAC|APP|FAC|20200508130643||ADT^A01|1|T|2.3');

// Generate HL7v2 from JSON
const message = client.generate({
  MSH: {
    "3": "HOSP",
    "4": "FAC",
    "5": "APP",
    "6": "FAC",
    "7": "20200508130643",
    "9": { "1": "ADT", "2": "A01" }
  }
});
```

## Usage

The HL7v2 package provides two main functionalities:

1. **Parsing**: Convert HL7v2 messages into a structured JSON format that's easy to work with in TypeScript/JavaScript. The parser handles all HL7v2 message components including segments, fields, components, and repeating fields.

2. **Generating**: Convert structured JSON data back into valid HL7v2 messages. The generator ensures proper formatting and handles all the necessary delimiters and encoding characters.

### Parsing HL7v2

```typescript
import { HL7v2Client } from '@rethinkhealth/hl7v2';

// Create a client instance
const client = new HL7v2Client();

// Parse an HL7v2 message
const message = client.parse('MSH|^~\\&|HOSP|FAC|APP|FAC|20200508130643||ADT^A01|1|T|2.3');

// Access fields
const mshSegment = message.MSH;
const messageType = mshSegment['9']; // { "1": "ADT", "2": "A01" }
const sendingFacility = mshSegment['4']; // "FAC"

// Handle repeating fields
const pidSegment = message.PID;
const patientIds = pidSegment['3']; // Array of repeating fields
```

### Generating HL7v2

```typescript
// Create a message from JSON
const json = {
  MSH: {
    "3": "HOSP",
    "4": "FAC",
    "5": "APP",
    "6": "FAC",
    "7": "20200508130643",
    "9": {
      "1": "ADT",
      "2": "A01"
    },
    "10": "1",
    "11": "T",
    "12": "2.3"
  },
  PID: {
    "1": "1",
    "3": {
      "1": "PATID1234",
      "2": "5",
      "3": "M11",
      "4": "ADT1",
      "5": "MR",
      "6": "GOOD HEALTH HOSPITAL"
    }
  }
};

// Generate HL7v2 message
const message = client.generate(json);
// Result: MSH|^~\&|HOSP|FAC|APP|FAC|20200508130643||ADT^A01|1|T|2.3\rPID|1||PATID1234^5^M11^ADT1^MR^GOOD HEALTH HOSPITAL\r

// Custom delimiters in MSH
const jsonWithCustomDelimiters = {
  MSH: {
    "1": "#",
    "2": "!@#$",
    "3": "HOSP",
    "4": "FAC"
  }
};
const messageWithCustomDelimiters = client.generate(jsonWithCustomDelimiters);
// Result: MSH#!@#$#HOSP#FAC\r
```

### Custom Delimiters

```typescript
import { HL7v2Client, DefaultDelimiters } from '@rethinkhealth/hl7v2';

const customDelimiters = {
  ...DefaultDelimiters,
  fieldSeparator: '$',
  componentSeparator: '%'
};

const client = new HL7v2Client({ delimiters: customDelimiters });
```

### Error Handling

The parser provides detailed error messages with context:

```typescript
try {
  const message = client.parse('AB|field1|field2');
} catch (error) {
  if (error instanceof SegmentError) {
    console.error(error.message); // "Error in segment AB: Segment name must be at least 3 characters"
  }
}
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Code of Conduct

To ensure a welcoming and positive environment, we have a [Code of Conduct](CODE_OF_CONDUCT.md) that all contributors and participants are expected to adhere to.

## License

Copyright 2025 Rethink Health, SUARL. All rights reserved.

This program is licensed to you under the terms of the [MIT License](https://opensource.org/licenses/MIT). This program is distributed WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the [LICENSE](LICENSE) file for details.
