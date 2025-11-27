# @rethinkhealth/hl7v2-config

Configuration schema and loader for hl7v2-specific settings.

## Overview

This package provides type-safe configuration loading for hl7v2-specific settings that augment the standard [unified-args](https://github.com/unifiedjs/unified-args) configuration system.

**Key Features:**

- ✅ Type-safe settings with TypeScript types
- ✅ Runtime validation with Zod
- ✅ JSON Schema for IDE autocomplete
- ✅ Compatible with all unified-args RC file formats
- ✅ Validates only hl7v2-specific `settings` - `plugins` handled by unified-args
- ✅ Synchronous API for fast startup

## Installation

```bash
npm install @rethinkhealth/hl7v2-config
```

## Usage

### Configuration Files

Create a `.hl7v2rc.json` file in your project:

```json
{
  "$schema": "https://raw.githubusercontent.com/rethinkhealth/hl7v2/main/packages/hl7v2-config/schema.json",
  "plugins": [
    "preset-lint-recommended",
    ["lint-max-message-size", ["error", { "maxBytes": 5000000 }]],
    ["lint-message-version", ["warn", { "expression": ">=2.3 <3.0.0" }]]
  ],
  "settings": {
    "experimental": {
      "emptyMode": "empty"
    }
  }
}
```

### Supported Configuration Files

The loader searches for configuration in the following locations (in order):

- `package.json` (under `hl7v2` field)
- `.hl7v2rc`
- `.hl7v2rc.json`
- `.hl7v2rc.yaml` / `.hl7v2rc.yml`
- `.hl7v2rc.js` / `.hl7v2rc.cjs` / `.hl7v2rc.mjs`
- `hl7v2.config.js` / `hl7v2.config.cjs` / `hl7v2.config.mjs`

### JavaScript Configuration

For dynamic configuration, use a JavaScript config file:

```javascript
// hl7v2.config.js
export default {
  plugins: [
    'preset-lint-recommended',
    ['lint-max-message-size', [
      'error',
      { maxBytes: parseInt(process.env.MAX_SIZE || '10000000') }
    ]],
  ],
  settings: {
    experimental: {
      emptyMode: process.env.HL7_EMPTY_MODE || 'legacy',
    },
  },
};
```

### Package.json Configuration

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "hl7v2": {
    "plugins": ["preset-lint-recommended"],
    "settings": {
      "experimental": {
        "emptyMode": "empty"
      }
    }
  }
}
```

### Programmatic Usage

#### Synchronous (Recommended)

For CLI tools and startup code, use the synchronous API:

```typescript
import { loadConfig } from '@rethinkhealth/hl7v2-config';

// Load configuration from config files
const config = loadConfig();
console.log(config.settings.experimental.emptyMode); // 'legacy' or 'empty'

// Load only settings via destructuring
const { settings } = loadConfig();
console.log(settings.experimental.emptyMode); // 'legacy' or 'empty'

// Load from a specific directory
const config = loadConfig('/path/to/project');
```

#### Asynchronous

For async contexts or non-blocking I/O requirements:

```typescript
import { loadConfigAsync } from '@rethinkhealth/hl7v2-config';

// Load configuration asynchronously
const config = await loadConfigAsync();
console.log(config.settings.experimental.emptyMode); // 'legacy' or 'empty'

// Load only settings via destructuring
const { settings } = await loadConfigAsync();
console.log(settings.experimental.emptyMode); // 'legacy' or 'empty'
```

## Configuration Schema

### Settings Field

The `settings` field contains hl7v2-specific configuration:

```typescript
type HL7v2Settings = {
  experimental?: {
    emptyMode?: "legacy" | "empty"; // default: "legacy"
  };
};
```

#### Experimental Features

##### `emptyMode`

Controls how empty fields/components are represented in the AST.

- **`"legacy"`** (default): Empty fields create full structure (Field → Rep → Comp → Sub with `value: ""`)
- **`"empty"`**: Empty fields have no children (Field with `children: []`)

**Status:** Experimental. Will become the default in v3.0.0.

### Plugins Field

The `plugins` field is handled by unified-args and follows the standard unified plugin configuration format:

```json
{
  "plugins": [
    "plugin-name",                                    // Simple plugin
    ["plugin-name", { "option": "value" }],          // Plugin with options
    ["plugin-name", ["error", { "option": "value" }]] // Plugin with severity
  ]
}
```

**Severity Levels:**
- `"off"` or `0` - Disable the rule
- `"on"` or `"warn"` or `1` - Enable as warning
- `"error"` or `2` - Enable as error

## IDE Support

For IDE autocomplete and validation, add the `$schema` field to your JSON configuration:

```json
{
  "$schema": "https://raw.githubusercontent.com/rethinkhealth/hl7v2/main/packages/hl7v2-config/schema.json"
}
```

## API

### `loadConfig(searchFrom?)` (Synchronous)

Load and validate hl7v2 configuration from configuration files synchronously.

**Recommended for:** CLI tools, startup code, and most use cases.

**Parameters:**
- `searchFrom` (optional): Directory to start searching from (defaults to cwd)

**Returns:** `HL7v2Config` - Configuration object containing `plugins` and `settings`

**Throws:** `ConfigurationError` if configuration is invalid

**Usage:**
```typescript
// Load full config
const config = loadConfig();

// Destructure to get only settings
const { settings } = loadConfig();
```

### `loadConfigAsync(searchFrom?)` (Asynchronous)

Load and validate hl7v2 configuration from configuration files asynchronously.

**Use when:** You need non-blocking I/O or are in an async context.

**Parameters:**
- `searchFrom` (optional): Directory to start searching from (defaults to cwd)

**Returns:** `Promise<HL7v2Config>` - Configuration object containing `plugins` and `settings`

**Throws:** `ConfigurationError` if configuration is invalid

**Usage:**
```typescript
// Load full config
const config = await loadConfigAsync();

// Destructure to get only settings
const { settings } = await loadConfigAsync();
```

### `ConfigurationError`

Error thrown when configuration validation fails.

```typescript
class ConfigurationError extends Error {
  cause?: unknown;
}
```

## Integration with Parser

The parser automatically reads settings from the unified processor:

```typescript
import { unified } from 'unified';
import { parseHL7v2 } from '@rethinkhealth/hl7v2';

const processor = unified()
  .use(parseHL7v2)
  .data('settings', {
    experimental: {
      emptyMode: 'empty'
    }
  });

const tree = processor.parse('MSH|^~\\&|...');
```

When using the CLI, settings are automatically loaded from configuration files.

## Design Principles

This package follows these key principles:

1. **Augments, not replaces** - Extends unified-args via the `settings` field
2. **Validates only settings** - The `plugins` field is handled by unified-args
3. **Type-safe** - Full TypeScript support with Zod validation
4. **IDE-friendly** - JSON Schema for autocomplete and validation
5. **Backward compatible** - Defaults work without configuration

## Related Packages

- [@rethinkhealth/hl7v2](../hl7v2) - Main hl7v2 parser
- [@rethinkhealth/hl7v2-cli](../hl7v2-cli) - CLI that uses this configuration
- [unified-args](https://github.com/unifiedjs/unified-args) - Plugin configuration system

## Security

This plugin only transforms AST nodes and does not execute code. Ensure you trust the source of HL7v2 messages before processing.

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
