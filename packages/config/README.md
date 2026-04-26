# @glion/config

Configuration schema and loader for `.hl7v2rc.json` and related config files.

## What it does

Discovers and validates HL7v2-specific configuration from `.hl7v2rc.*` files, `hl7v2.config.*`, or a `hl7v2` field in `package.json`. Supports JSON, YAML, JavaScript (ESM/CJS), and TypeScript config formats, returns a typed object with `plugins` and `settings`, and ships a JSON Schema so editors can autocomplete config files. Augments the standard [unified-args](https://github.com/unifiedjs/unified-args) configuration system rather than replacing it — `plugins` is passed through, `settings` is validated here.

## Install

```bash
npm install @glion/config
```

## Use

A `.hl7v2rc.json` at the project root:

```json
{
  "$schema": "https://raw.githubusercontent.com/rethinkhealth/glion/main/packages/hl7v2-config/schema.json",
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

Loaded by:

```typescript
import { loadConfig } from "@glion/config";

const { settings } = loadConfig();
console.log(settings.delimiters.field); // "|"
console.log(settings.experimental.emptyMode); // "empty"
```

## API

### `loadConfig(searchFrom?)`

Loads and validates HL7v2 configuration synchronously.

```typescript
import { loadConfig } from "@glion/config";

// Load full config
const config = loadConfig();

// Load from a specific directory
const config2 = loadConfig("/path/to/project");

// Destructure to get only settings
const { settings } = loadConfig();
```

- Parameters: `searchFrom` (optional) — directory to start searching from (defaults to cwd).
- Returns: `HL7v2Config` — object containing `plugins` and `settings`.
- Throws: `ConfigurationError` when configuration is invalid.

### `loadConfigAsync(searchFrom?)`

Loads and validates HL7v2 configuration asynchronously. Returns a `Promise`.

```typescript
import { loadConfigAsync } from "@glion/config";

const config = await loadConfigAsync();
const { settings } = await loadConfigAsync();
```

- Parameters: `searchFrom` (optional) — directory to start searching from (defaults to cwd).
- Returns: `Promise<HL7v2Config>`.
- Throws: `ConfigurationError` when configuration is invalid.

### `defineConfig(config)`

Identity helper for authoring configuration files in TypeScript or JavaScript. Returns the input unchanged; the type signature drives IDE autocomplete.

```typescript
// hl7v2.config.ts
import { defineConfig } from "@glion/config";

export default defineConfig({
  plugins: ["preset-lint-recommended"],
  settings: {
    delimiters: { field: "|", component: "^" },
    experimental: { emptyMode: "empty" },
  },
});
```

### `ConfigurationError`

Error thrown when configuration validation fails.

```typescript
class ConfigurationError extends Error {
  cause?: unknown;
}
```

### `HL7v2Settings`

```typescript
type HL7v2Settings = {
  delimiters?: {
    field?: string; // default: "|"
    component?: string; // default: "^"
    subcomponent?: string; // default: "&"
    repetition?: string; // default: "~"
    escape?: string; // default: "\\"
    segment?: string; // default: "\r"
  };
  experimental?: {
    emptyMode?: "legacy" | "empty"; // default: "legacy"
  };
};
```

## Configuration keys

### `settings.delimiters`

Custom delimiters for HL7v2 message parsing. Each delimiter must be exactly one character.

| Key            | Default | Description            |
| -------------- | ------- | ---------------------- |
| `field`        | `\|`    | Field separator        |
| `component`    | `^`     | Component separator    |
| `subcomponent` | `&`     | Subcomponent separator |
| `repetition`   | `~`     | Repetition separator   |
| `escape`       | `\\`    | Escape character       |
| `segment`      | `\r`    | Segment terminator     |

Custom delimiters:

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

### `settings.experimental.emptyMode`

Controls how empty fields and components are represented in the AST.

| Value                | Description                                                                     |
| -------------------- | ------------------------------------------------------------------------------- |
| `"legacy"` (default) | Empty fields create full structure (Field → Rep → Comp → Sub with `value: ""`). |
| `"empty"`            | Empty fields have no children (Field with `children: []`).                      |

Experimental. Scheduled to become the default in v0.6.0.

### `plugins`

Handled by unified-args; follows the standard unified plugin configuration format:

```json
{
  "plugins": [
    "plugin-name",
    ["plugin-name", { "option": "value" }],
    ["plugin-name", ["error", { "option": "value" }]]
  ]
}
```

Severity levels:

| Value                   | Description       |
| ----------------------- | ----------------- |
| `"off"` or `0`          | Disable the rule  |
| `"on"` / `"warn"` / `1` | Enable as warning |
| `"error"` or `2`        | Enable as error   |

### Configuration file locations

The loader searches for configuration in the following locations, in order:

| Location                                                    | Format              |
| ----------------------------------------------------------- | ------------------- |
| `package.json`                                              | Under `hl7v2` field |
| `.hl7v2rc`                                                  | JSON                |
| `.hl7v2rc.json`                                             | JSON                |
| `.hl7v2rc.yaml` / `.hl7v2rc.yml`                            | YAML                |
| `.hl7v2rc.js` / `.hl7v2rc.cjs` / `.hl7v2rc.mjs`             | JavaScript          |
| `hl7v2.config.js` / `hl7v2.config.cjs` / `hl7v2.config.mjs` | JavaScript          |

## Examples

### JSON configuration

```json
{
  "$schema": "https://raw.githubusercontent.com/rethinkhealth/glion/main/packages/hl7v2-config/schema.json",
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

### TypeScript configuration

```typescript
// hl7v2.config.ts
import { defineConfig } from "@glion/config";

export default defineConfig({
  plugins: ["preset-lint-recommended"],
  settings: {
    delimiters: { field: "|", component: "^" },
    experimental: { emptyMode: "empty" },
  },
});
```

### JavaScript configuration

```javascript
// hl7v2.config.js
export default {
  plugins: [
    "preset-lint-recommended",
    [
      "lint-max-message-size",
      ["error", { maxBytes: parseInt(process.env.MAX_SIZE || "10000000") }],
    ],
  ],
  settings: {
    delimiters: {
      segment: process.env.HL7_SEGMENT_TERMINATOR || "\r",
    },
    experimental: {
      emptyMode: process.env.HL7_EMPTY_MODE || "legacy",
    },
  },
};
```

### Package.json configuration

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "hl7v2": {
    "plugins": ["preset-lint-recommended"],
    "settings": {
      "experimental": { "emptyMode": "empty" }
    }
  }
}
```

### Parser integration

The parser reads settings from the unified processor:

```typescript
import { parseHL7v2 } from "@glion/hl7v2";
import { unified } from "unified";

const processor = unified()
  .use(parseHL7v2)
  .data("settings", {
    delimiters: { field: "|", component: "^" },
    experimental: { emptyMode: "empty" },
  });

const tree = processor.parse("MSH|^~\\&|...");
```

The CLI loads settings from configuration files automatically.

### IDE support

The `$schema` field enables autocomplete and validation in JSON configuration:

```json
{
  "$schema": "https://raw.githubusercontent.com/rethinkhealth/glion/main/packages/hl7v2-config/schema.json"
}
```

## Security

The package validates configuration and does not execute arbitrary code, with one exception: JS, MJS, and TS configuration files are imported by `cosmiconfig` and run their top-level code on load.

## Part of Glion

`@glion/config` is part of **[Glion]**, the application framework for HL7v2. See the [Glion README] for the full package catalog and architecture.

[Glion]: https://github.com/rethinkhealth/glion#readme
[Glion README]: https://github.com/rethinkhealth/glion#readme
