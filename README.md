# HL7v2 Parser

A TypeScript library for parsing HL7v2 messages with a focus on type safety and functional design.

## Features

- **Type-Safe Parsing**: Strongly typed segment definitions and field access
- **Stateless Design**: Pure functional approach with no internal state
- **Flexible Delimiters**: Support for custom field, component, and repeat separators
- **Comprehensive Error Handling**: Detailed error messages with segment and field context
- **Component and Repeat Support**: Full support for HL7v2 components and repeating fields
- **Segment Repetition**: Handles multiple instances of the same segment type

## Installation

```bash
npm install @rethinkhealth/hl7v2
```

## Usage

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

## Custom Delimiters

```typescript
import { HL7v2Client, DefaultDelimiters } from '@rethinkhealth/hl7v2';

const customDelimiters = {
  ...DefaultDelimiters,
  fieldSeparator: '$',
  componentSeparator: '%'
};

const client = new HL7v2Client({ delimiters: customDelimiters });
```

## Error Handling

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

## Code of Conduct

To ensure a welcoming and positive environment, we have a [Code of Conduct](CODE_OF_CONDUCT.md) that all contributors and participants are expected to adhere to.

## COPYRIGHT AND LICENSE

Copyright 2023 Rethink Health, SUARL. All rights reserved. This program is licensed to you under the terms of the [MIT License](https://opensource.org/licenses/MIT). This program is distributed WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the [LICENSE](LICENSE) file for details.
