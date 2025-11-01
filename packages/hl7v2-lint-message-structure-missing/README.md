## @rethinkhealth/hl7v2-lint-message-structure-missing

> Lint rule that warns when the HL7v2 message structure component (`MSH-9.3`) is missing.

### Installation

```bash
pnpm add -D @rethinkhealth/hl7v2-lint-message-structure-missing
```

### Usage

```typescript
import { unified } from "unified";
import { hl7v2Parser } from "@rethinkhealth/hl7v2-parser";
import hl7v2LintMessageStructure from "@rethinkhealth/hl7v2-lint-message-structure-missing";

const message = `MSH|^~\\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01|MSG00001|P|2.5`;

const processor = unified()
  .use(hl7v2Parser)
  .use(hl7v2LintMessageStructure);

await processor.process(message);
```

### Examples

- **✅ With message structure (valid)**

```
MSH|^~\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01^ADT_A01|MSG00001|P|2.5
```

- **❌ Missing message structure (warns)**

```
MSH|^~\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01|MSG00001|P|2.5
```

### Presets

This rule is included in `@rethinkhealth/hl7v2-lint-recommended`.

## Contributing

We welcome contributions! Please see our [Contributing Guide][github-contributing] for more details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Code of Conduct

To ensure a welcoming and positive environment, we have a [Code of Conduct][github-code-of-conduct] that all contributors and participants are expected to adhere to.

## License

Copyright 2025 Rethink Health, SUARL. All rights reserved.

This program is licensed to you under the terms of the [MIT License](https://opensource.org/licenses/MIT). This program is distributed WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the [LICENSE][github-license] file for details.

[github-code-of-conduct]: https://github.com/rethinkhealth/hl7v2/blob/main/CODE_OF_CONDUCT.md
[github-license]: https://github.com/rethinkhealth/hl7v2/blob/main/LICENSE
[github-contributing]: https://github.com/rethinkhealth/hl7v2/blob/main/CONTRIBUTING.md

