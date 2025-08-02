# HL7v2 Parser

This package is a utility that takes a raw HL7v2 message as input and turns it into an HL7v2 syntax tree following the [@rethinkhealth/hl7v2-ast](../hl7v2-ast/README.md) definition.

This utility is a low level project. It’s used in [@rethinkhealth/hl7v2](../hl7v2/), which focusses on making it easier to transform content by abstracting these internals away.

---

## When should I use this?

If you want to handle syntax trees manually, use this. For an easier time processing content, use the [@rethinkhealth/hl7v2](../hl7v2/) ecosystem instead.

## Install 

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 16+), install with npm:

```bash
npm install @rethinkhealth/hl7v2-parser
```

---

## Use

### Basic Usage

```typescript
import { hl7v2Parser } from '@rethinkhealth/hl7v2-parser';

// Sample HL7v2 message
const message = `MSH|^~\\&|SENDING_APP|SENDING_FAC|RECEIVING_APP|RECEIVING_FAC|20110613061611||ADT^A04|12345|P|2.3
PID|1||123456||SMITH^JOHN^J||19800101|M|||123 MAIN ST^^ANYTOWN^ST^12345
PV1|1|I|ICU^101^1|||DOCTOR123^SMITH^JOHN^MD`;

// Parse using the unified processor
const processor = hl7v2Parser();
const result = processor.parse(message);

console.log(`Parsed ${result.children?.length} segments`);
```

---

## Contributing

We welcome contributions! Please see our [Contributing Guide](../../CONTRIBUTING.md) for more details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Code of Conduct

To ensure a welcoming and positive environment, we have a [Code of Conduct](../../CODE_OF_CONDUCT.md) that all contributors and participants are expected to adhere to.

---

## License

Copyright 2025 Rethink Health, SUARL. All rights reserved.

This program is licensed to you under the terms of the [MIT License](https://opensource.org/licenses/MIT). This program is distributed WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the [LICENSE](../../LICENSE) file for details.