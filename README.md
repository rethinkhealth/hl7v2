HL7v2 client
=============

`@rethinkhealth/HL7v2` is a library for parsing, validating, and mapping HL7v2 messages. It is built on top of the [HL7v2 standard](https://www.hl7.org/implement/standards/product_section.cfm?section=13) and is designed to be used in conjunction with the [HL7v2 standard](https://www.hl7.org/implement/standards/product_section.cfm?section=13).

## What is HL7v2

HL7V2 is a standard for exchanging health information between systems. It is a text-based format that is human readable and machine parsable. HL7v2 is a standard that is used by many healthcare systems and is the standard for exchanging health information between systems.

HL7 v2 is a standard for the exchange of electronic health information. It is a set of protocols and standards that define how different systems can communicate with each other to exchange data about patients, drugs, and other health-related information. HL7 v2 is one of the most widely used standards for healthcare data exchange, and it is supported by a large number of healthcare organizations and vendors.

The HL7 v2 standard includes a number of components, including:
1. Messaging: This defines the rules for sending and receiving messages between systems.
2. Vocabulary: This defines the standard vocabulary for representing health data.
3. Data types: This defines the standard data types used for representing health data.
4. Document structure: This defines the structure of the messages used to exchange health data.
5. Interface protocols: This defines the protocols used to exchange data between systems.
HL7 v2 is widely used in many different types of healthcare systems, including hospitals, clinics, and pharmacies. It is used to exchange data between different systems, such as electronic health records (EHRs), pharmacy systems, and laboratory systems. It is also used to exchange data between different organizations, such as between hospitals and clinics, or between healthcare providers and payers.

HL7 v2 has been replaced by newer versions, such as HL7 v2.5 and HL7 v2.6, which include additional functionality and features. However, HL7 v2 is still widely used and supported, and it remains an important standard for healthcare data exchange.

HL7v2 (Health Level Seven Version 2) is a messaging standard used in the healthcare industry to exchange clinical and administrative data between different healthcare applications and systems. It is a widely adopted standard that has been in use since the 1980s.

HL7v2 messages are made up of segments, which are strings of data elements that represent different parts of a message. Each segment is identified by a three-letter code, such as PID for Patient Identification or OBX for Observation/Result. Within each segment, individual data elements are identified by a number, and the data elements contain information such as patient demographics, clinical observations, and billing information.

HL7v2 messages can be sent between healthcare applications and systems using various communication protocols, including TCP/IP, FTP, and HTTP. They are typically used to facilitate the exchange of information between different healthcare systems, such as electronic health record (EHR) systems, laboratory information systems (LIS), and radiology information systems (RIS).

HL7v2 has evolved over time, with new versions and updates being released to address changing healthcare requirements and technologies. However, it remains one of the most widely used messaging standards in the healthcare industry.

## Features

- Built on top of the HL7v2 standard.
- Supports HL7v2 versions `2.5` and `2.8.1`.
- Provides robust schema validation using [Json Schema](https://json-schema.org/).
- Provides a simple API for parsing, validating, and mapping HL7v2 messages.

## Getting Started

To get started, install the package using `npm`, `yarn`, or `pnpm`:

- [npm](https://www.npmjs.com/)

```bash
npm install @rethinkhealth/hl7v2
```

- [yarn](https://yarnpkg.com/)

```bash
yarn add @rethinkhealth/hl7v2
```

- [pnpm](https://pnpm.io/)

```bash
pnpm i @rethinkhealth/hl7v2
```

## Usage

### Parsing

To parse an HL7v2 message, use the `toJson` function:

```typescript
import { Message } from '@rethinkhealth/hl7v2';

const message = new Message('MSH|^~\&|...');

console.log(message.toJson());
```

### Validation

To validate an HL7v2 message, use the `validate` function:

```typescript
import { Message } from '@rethinkhealth/hl7v2';

const message = new Message('MSH|^~\&|...');

console.log(message.validate());
```

## COPYRIGHT AND LICENSE

Copyright 2023 Rethink Health, SUARL. All rights reserved. This program is licensed to you under the terms of the [MIT License](https://opensource.org/licenses/MIT). This program is distributed WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the [LICENSE](LICENSE) file for details.

# HL7v2 Trademark

HL7®, HEALTH LEVEL SEVEN®, and FHIR® are trademarks owned by Health Level Seven International, registered with the United States Patent and Trademark Office.