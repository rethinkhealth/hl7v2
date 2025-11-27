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

```typescript
import { loadHL7v2Settings } from '@rethinkhealth/hl7v2-config';

// Load settings from config files
const settings = await loadHL7v2Settings();
console.log(settings.experimental.emptyMode); // 'legacy' or 'empty'

// Load from a specific directory
const settings = await loadHL7v2Settings('/path/to/project');
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

### `loadHL7v2Settings(searchFrom?)`

Load and validate hl7v2-specific settings from configuration files.

**Parameters:**
- `searchFrom` (optional): Directory to start searching from (defaults to cwd)

**Returns:** `Promise<HL7v2Settings>`

**Throws:** `ConfigurationError` if settings are invalid

### `loadHL7v2Config(searchFrom?)`

Load full configuration including plugins (for tooling/documentation purposes).

**Parameters:**
- `searchFrom` (optional): Directory to start searching from (defaults to cwd)

**Returns:** `Promise<HL7v2Config>`

**Throws:** `ConfigurationError` if configuration is invalid

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

## License

MIT © Melek Somai
