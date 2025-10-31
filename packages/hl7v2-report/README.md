# @rethinkhealth/hl7v2-report

The package provides tools for generating standardized, type-safe, and accessible diagnostics from [HL7v2 ASTs](https://github.com/rethinkhealth/hl7v2). It is designed to be fast, robust, and easily integratable with `vfile`.

- **Type safe** diagnostics (`Diagnostic` type)
- **vfile**-compatible error, warning, and info reporting
- Consistent error source, ruleId and location in results
- Designed for use with HL7v2 AST

## Installation

```sh
pnpm add @rethinkhealth/hl7v2-report
# or
npm install @rethinkhealth/hl7v2-report
# or
yarn add @rethinkhealth/hl7v2-report
```

## Usage

```typescript
import { VFile } from "vfile";
import { report } from "@rethinkhealth/hl7v2-report";

const file = new VFile();
const diagnostic = {
  code: "invalid-field",
  message: "Field is invalid",
  namespace: "hl7v2-demographics",
  description: "Field did not match pattern",
  helpUrl: "https://docs.example.com/hl7v2/errors#invalid-field",
  severity: "error"
};
const node = {
  type: "field",
  position: {
    start: { line: 1, column: 5 },
    end: { line: 1, column: 12 }
  }
};

report(diagnostic, file, node);

console.log(file.messages);
/*
[
  {
    "message": "Field is invalid",
    "reason": "Field is invalid",
    "fatal": true,
    "source": "hl7v2-demographics",
    "ruleId": "hl7v2-demographics:invalid-field",
    "place": { "start": { "line": 1, "column": 5 }, ... },
    ...
  }
]
*/
```

## API

### `report(diagnostic, vfile?, node?)`

- **diagnostic**: [`Diagnostic`](#diagnostic-type) - the structured diagnostic describing the issue
- **vfile**: [`VFile`](https://github.com/vfile/vfile) (optional) - collects messages, positional data, etc.
- **node**: AST node with positional data (optional)

Returns `void` or `undefined` (if no vfile is given).

#### Diagnostic type

```typescript
export type Diagnostic = {
  code: string; // unique code for the rule or check
  message: string; // human-readable error or warning message
  namespace: string; // logical source of the error (your package/module name)
  description?: string; // additional context (supports markdown)
  helpUrl?: string; // URL for documentation or remediation steps
  severity: "error" | "warning" | "info"; // level of importance
};
```

## Best Practices

- Always provide a clear `namespace` and `code` for reliable rule identification.
- Use `severity: "error"` for critical issues, `"warning"` for non-fatal problems, `"info"` for suggestions.

## Testing

This package is tested with [Vitest](https://vitest.dev/) and supports snapshot testing for diagnostics.

Run all tests:

```sh
pnpm test
```

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