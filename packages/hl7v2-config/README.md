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

## Quick Start

Create a `.hl7v2rc.json` file in your project:

```json
{
  "$schema": "https://raw.githubusercontent.com/rethinkhealth/hl7v2/main/packages/hl7v2-config/schema.json",
  "plugins": ["preset-lint-recommended"],
  "settings": {
    "delimiters": {
      "field": "|",
      "component": "^",
      "subcomponent": "&",
      "repetition": "~",
      "escape": "\\",
      "segment": "\r"
    },
    "experimental": {
      "emptyMode": "empty"
    }
  }
}
```

Then load the configuration:

```typescript
import { loadConfig } from '@rethinkhealth/hl7v2-config';

const { settings } = loadConfig();
console.log(settings.delimiters.field); // "|"
console.log(settings.experimental.emptyMode); // "empty"
```

## Configuration Schema

### Settings

The `settings` field contains hl7v2-specific configuration:

```typescript
type HL7v2Settings = {
  delimiters?: {
    field?: string;        // default: "|"
    component?: string;    // default: "^"
    subcomponent?: string; // default: "&"
    repetition?: string;   // default: "~"
    escape?: string;       // default: "\\"
    segment?: string;      // default: "\r"
  };
  experimental?: {
    emptyMode?: "legacy" | "empty"; // default: "legacy"
  };
};
```

#### Delimiters

Configure custom delimiters for HL7v2 message parsing. Each delimiter must be exactly one character.

| Option | Default | Description |
|--------|---------|-------------|
| `field` | `\|` | Field separator |
| `component` | `^` | Component separator |
| `subcomponent` | `&` | Subcomponent separator |
| `repetition` | `~` | Repetition separator |
| `escape` | `\\` | Escape character |
| `segment` | `\r` | Segment terminator |

**Example:** Using custom delimiters for a non-standard system:

```json
{
  "settings": {
    "delimiters": {
      "field": "#",
      "component": "@"
    }
  }
}
```

#### Experimental Features

##### `emptyMode`

Controls how empty fields/components are represented in the AST.

| Value | Description |
|-------|-------------|
| `"legacy"` (default) | Empty fields create full structure (Field -> Rep -> Comp -> Sub with `value: ""`) |
| `"empty"` | Empty fields have no children (Field with `children: []`) |

**Status:** Experimental. Will become the default in v0.6.0.

### Plugins

The `plugins` field is handled by unified-args and follows the standard unified plugin configuration format:

```json
{
  "plugins": [
    "plugin-name",
    ["plugin-name", { "option": "value" }],
    ["plugin-name", ["error", { "option": "value" }]]
  ]
}
```

**Severity Levels:**
| Value | Description |
|-------|-------------|
| `"off"` or `0` | Disable the rule |
| `"on"` or `"warn"` or `1` | Enable as warning |
| `"error"` or `2` | Enable as error |

## Configuration Files

The loader searches for configuration in the following locations (in order):

| Location | Format |
|----------|--------|
| `package.json` | Under `hl7v2` field |
| `.hl7v2rc` | JSON |
| `.hl7v2rc.json` | JSON |
| `.hl7v2rc.yaml` / `.hl7v2rc.yml` | YAML |
| `.hl7v2rc.js` / `.hl7v2rc.cjs` / `.hl7v2rc.mjs` | JavaScript |
| `hl7v2.config.js` / `hl7v2.config.cjs` / `hl7v2.config.mjs` | JavaScript |

### JSON Configuration

```json
{
  "$schema": "https://raw.githubusercontent.com/rethinkhealth/hl7v2/main/packages/hl7v2-config/schema.json",
  "plugins": [
    "preset-lint-recommended",
    ["lint-max-message-size", ["error", { "maxBytes": 5000000 }]]
  ],
  "settings": {
    "experimental": {
      "emptyMode": "empty"
    }
  }
}
```

### TypeScript Configuration

For type-safe configuration with IDE autocomplete, use `defineConfig()`:

```typescript
// hl7v2.config.ts
import { defineConfig } from '@rethinkhealth/hl7v2-config';

export default defineConfig({
  plugins: ['preset-lint-recommended'],
  settings: {
    delimiters: {
      field: '|',
      component: '^',
    },
    experimental: {
      emptyMode: 'empty',
    },
  },
});
```

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
    delimiters: {
      segment: process.env.HL7_SEGMENT_TERMINATOR || '\r',
    },
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

## API

### `loadConfig(searchFrom?)`

Load and validate hl7v2 configuration synchronously.

**Recommended for:** CLI tools, startup code, and most use cases.

```typescript
import { loadConfig } from '@rethinkhealth/hl7v2-config';

// Load full config
const config = loadConfig();

// Load from a specific directory
const config = loadConfig('/path/to/project');

// Destructure to get only settings
const { settings } = loadConfig();
```

**Parameters:**
- `searchFrom` (optional): Directory to start searching from (defaults to cwd)

**Returns:** `HL7v2Config` - Configuration object containing `plugins` and `settings`

**Throws:** `ConfigurationError` if configuration is invalid

### `loadConfigAsync(searchFrom?)`

Load and validate hl7v2 configuration asynchronously.

**Use when:** You need non-blocking I/O or are in an async context.

```typescript
import { loadConfigAsync } from '@rethinkhealth/hl7v2-config';

const config = await loadConfigAsync();
const { settings } = await loadConfigAsync();
```

**Parameters:**
- `searchFrom` (optional): Directory to start searching from (defaults to cwd)

**Returns:** `Promise<HL7v2Config>` - Configuration object containing `plugins` and `settings`

**Throws:** `ConfigurationError` if configuration is invalid

### `defineConfig(config)`

Type-safe helper for authoring configuration files. Provides IDE autocomplete without any runtime overhead.

```typescript
import { defineConfig } from '@rethinkhealth/hl7v2-config';

export default defineConfig({
  plugins: ['preset-lint-recommended'],
  settings: {
    experimental: { emptyMode: 'empty' }
  }
});
```

**Parameters:**
- `config`: Configuration object

**Returns:** The same config object (identity function for type inference)

### `ConfigurationError`

Error thrown when configuration validation fails.

```typescript
class ConfigurationError extends Error {
  cause?: unknown;
}
```

## IDE Support

For IDE autocomplete and validation, add the `$schema` field to your JSON configuration:

```json
{
  "$schema": "https://raw.githubusercontent.com/rethinkhealth/hl7v2/main/packages/hl7v2-config/schema.json"
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
    delimiters: {
      field: '|',
      component: '^',
    },
    experimental: {
      emptyMode: 'empty'
    }
  });

const tree = processor.parse('MSH|^~\\&|...');
```

When using the CLI, settings are automatically loaded from configuration files.

## Design Principles

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

This package only validates configuration and does not execute arbitrary code from configuration files (except JS/MJS config files which are explicitly imported). Ensure you trust the source of your configuration files.

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
