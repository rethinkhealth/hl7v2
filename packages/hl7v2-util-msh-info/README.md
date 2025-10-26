# @rethinkhealth/hl7v2-util-msh-info

A utility to extract HL7v2 message identifiers from the MSH segment.

## Features

- Extracts message **version** (MSH-12), **code** (MSH-9.1), **event** (MSH-9.2), and **structure** (MSH-9.3)
- Automatically derives missing MSH-9.3 from message code and trigger event (configurable)
- Zero dependencies (only depends on `@rethinkhealth/hl7v2-util-query`)
- Fully typed with TypeScript

## Installation

```bash
npm install @rethinkhealth/hl7v2-util-msh-info
```

## Quick Start

```typescript
import { getMshInfo } from '@rethinkhealth/hl7v2-util-msh-info';
import { parseHL7v2 } from '@rethinkhealth/hl7v2-parser';

const message = `MSH|^~\\&|MyApp|MyFacility|ReceivingApp|ReceivingFacility|20231201120000||ADT^A01|12345|P|2.5
PID|1||123456789^^^MRN||Smith^John^Michael||19800101|M|||123 Main St^^Anytown^ST^12345`;

const ast = parseHL7v2(message);
const info = getMshInfo(ast);

console.log(info);
// {
//   version: '2.5',
//   messageCode: 'ADT',
//   triggerEvent: 'A01',
//   messageStructure: 'ADT_A01' (derived from code and event)
// }
```

## API

### `getMshInfo(root: Nodes, options?: MshInfoOptions): MshInfo`

Extracts HL7v2 message identifiers from the MSH segment.

#### Parameters

- **root** – The HL7v2 AST root node
- **options** – Configuration options (optional)
  - **strict** – When `true`, requires explicit MSH-9.3 and does not derive it. When `false` (default), derives missing MSH-9.3 as `{messageCode}_{triggerEvent}`.

#### Returns

A `MshInfo` object with the following properties (all optional):

```typescript
{
  version?: string;           // From MSH-12
  messageCode?: string;       // From MSH-9.1 (e.g., 'ADT')
  triggerEvent?: string;      // From MSH-9.2 (e.g., 'A01')
  messageStructure?: string;  // From MSH-9.3 or derived (e.g., 'ADT_A01')
}
```

#### Examples

**Extract all fields (with derivation)**

```typescript
const ast = parseHL7v2(`MSH|^~\\&|App|Fac|RcvApp|RcvFac|20231201120000||ADT^A01|123|P|2.5`);
const info = getMshInfo(ast);

console.log(info.messageStructure); // 'ADT_A01' (derived)
```

**Strict mode (no derivation)**

```typescript
const info = getMshInfo(ast, { strict: true });

console.log(info.messageStructure); // undefined (not explicitly present)
```

**Explicit message structure**

```typescript
const ast = parseHL7v2(`MSH|^~\\&|App|Fac|RcvApp|RcvFac|20231201120000||ADT^A01^ADT_A03|123|P|2.5`);
const info = getMshInfo(ast);

console.log(info.messageStructure); // 'ADT_A03' (explicit, not derived)
```


## Common Use Cases

### Validate Message Type

```typescript
import { getMshInfo } from '@rethinkhealth/hl7v2-util-msh-info';

function validateMessageType(ast: Root, expectedType: string): boolean {
  const info = getMshInfo(ast);
  return info.messageCode === expectedType;
}

const isAdmission = validateMessageType(ast, 'ADT');
```

### Route Based on Message Type

```typescript
import { getMshInfo } from '@rethinkhealth/hl7v2-util-msh-info';

function routeMessage(ast: Root) {
  const info = getMshInfo(ast);
  
  switch (info.messageCode) {
    case 'ADT':
      return handleAdmission(ast, info.triggerEvent);
    case 'ORM':
      return handleOrder(ast, info.triggerEvent);
    case 'ORU':
      return handleResult(ast, info.triggerEvent);
    default:
      throw new Error(`Unknown message type: ${info.messageCode}`);
  }
}
```

### Get Message Version

```typescript
import { getMshInfo } from '@rethinkhealth/hl7v2-util-msh-info';

const info = getMshInfo(ast);
const version = info.version || '2.5'; // Default to 2.5 if missing

const handler = getHandlerForVersion(version);
```

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](../../CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.
