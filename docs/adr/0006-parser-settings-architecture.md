# 6. Parser Settings Architecture

Date: 2025-11-28

## Status

Proposed

## Context

We need to decide how the HL7v2 parser should handle configuration (delimiters, experimental features like `emptyMode`). The key questions are:

1. Should the parser have a `settings` option in `ParseOptions`?
2. Should `ParserContext` include settings?
3. How should delimiters be configured?
4. What is the relationship between the parser and `@rethinkhealth/hl7v2-config`?

### How the Unified Ecosystem Handles This

Research into remark-parse and rehype-parse reveals a clear pattern:

```javascript
// remark-parse source
export default function remarkParse(options) {
  const self = this
  self.parser = function (document) {
    return fromMarkdown(document, {
      ...self.data('settings'),  // Processor-wide settings
      ...options                  // Plugin-specific options (override)
    })
  }
}
```

**Key insights from unified ecosystem:**

1. **Settings are NOT in ParserContext** - They are resolved before parsing begins and passed as options to the underlying parser functions
2. **Two-tier configuration:**
   - Processor-wide: `processor.data('settings')` - shared across all plugins
   - Plugin-specific: `use(plugin, options)` - local to one plugin
3. **Parsers don't import config loaders** - remark-parse does NOT import remark-cli's config loader
4. **Context objects are minimal** - Only contain data needed during parsing (input, position tracking, custom compile data)

### Current Problems

1. **Parser imports config loader** - Creates tight coupling, loads config at module import time
2. **Settings in ParserContext** - Violates unified pattern, bloats context
3. **Redundant options** - Both `opts.delimiters` and `opts.settings.delimiters` existed
4. **Type dependency** - Parser had runtime dependency on `@rethinkhealth/hl7v2-config`

## Decision

### 1. Parser Has NO `settings` Option

The parser's `ParseOptions` should be minimal:

```typescript
export type ParseOptions = {
  preprocess?: PreprocessorStep[];
  delimiters?: Partial<Delimiters>;  // Direct, simple option
};
```

**Rationale:**
- Follows unified pattern where plugin options are flat and simple
- Settings come from `processor.data('settings')` in the unified plugin, not from options
- Direct API users (not using unified) get a simple `delimiters` option

### 2. ParserContext Does NOT Include Settings

```typescript
export type ParserContext = {
  input: string;
  delimiters: Delimiters;
  metadata?: Record<string, unknown>;
  emptyMode?: "legacy" | "empty";  // Resolved value, not settings object
};
```

**Rationale:**
- Context contains resolved values needed during parsing
- `emptyMode` is a resolved value, not a settings object
- Preprocessors don't need access to full settings - they operate on input/delimiters

### 3. Unified Plugin Merges Settings

The unified plugin is responsible for merging settings:

```typescript
const hl7v2Parser: Plugin<[ParseOptions?], string, Root> = function (
  this: Processor,
  options = {}
) {
  this.parser = (document: string) => {
    const settings = this.data("settings") as HL7v2Settings | undefined;

    return parseHL7v2(document, {
      ...options,
      delimiters: {
        ...settings?.delimiters,
        ...options.delimiters,
      },
      emptyMode: options.emptyMode ?? settings?.experimental?.emptyMode,
    });
  };
};
```

### 4. No Runtime Dependency on hl7v2-config

- Parser uses only `@rethinkhealth/hl7v2-utils` for `DEFAULT_DELIMITERS`
- `@rethinkhealth/hl7v2-config` is devDependency only (for types in tests)
- CLI/unified-args is responsible for loading config and populating `processor.data('settings')`

## Alternatives Considered

### Alternative A: Settings in ParseOptions

```typescript
export type ParseOptions = {
  preprocess?: PreprocessorStep[];
  settings?: HL7v2Settings;
};
```

**Rejected because:**
- Creates ambiguity: where do delimiters come from? `settings.delimiters` or direct option?
- Parser shouldn't know about settings schema - that's config layer's job
- Violates unified pattern where settings come from processor, not options

### Alternative B: Settings in ParserContext

```typescript
export type ParserContext = {
  input: string;
  delimiters: Delimiters;
  settings: HL7v2Settings;
};
```

**Rejected because:**
- Unified ecosystem explicitly does NOT include settings in context
- Bloats context with data preprocessors don't need
- Creates coupling between parser internals and config schema

### Alternative C: Keep `opts.delimiters` AND `opts.settings`

**Rejected because:**
- Redundant: delimiters exist in two places
- Confusing precedence: which one wins?
- Over-engineered for direct API usage

## Consequences

### Positive

- **Clean separation**: Parser knows nothing about config files/schema
- **Follows unified patterns**: Easier for unified ecosystem users to understand
- **Minimal context**: ParserContext only has what's needed for parsing
- **Simple direct API**: `parseHL7v2(input, { delimiters: {...} })` is intuitive
- **No runtime config dependency**: Faster startup, smaller bundle

### Negative

- **Breaking change**: Removes `opts.settings` from ParseOptions
- **Migration needed**: Users using `settings.delimiters` must change to `delimiters`

## Implementation

### ParseOptions (Final)

```typescript
export type ParseOptions = {
  preprocess?: PreprocessorStep[];
  delimiters?: Partial<Delimiters>;
  emptyMode?: "legacy" | "empty";
};
```

### ParserContext (Final)

```typescript
export type ParserContext = {
  input: string;
  delimiters: Delimiters;
  metadata?: Record<string, unknown>;
  emptyMode?: "legacy" | "empty";
};
```

### parseHL7v2 Function

```typescript
export function parseHL7v2(input: string, opts: ParseOptions = {}): Root {
  let ctx: ParserContext = {
    input,
    delimiters: {
      ...DEFAULT_DELIMITERS,
      ...opts.delimiters,
    },
    emptyMode: opts.emptyMode ?? "legacy",
  };

  ctx = runPreprocessors(ctx, opts.preprocess ?? defaultPreprocessors);

  const tokenizer = new HL7v2Tokenizer();
  tokenizer.reset(ctx);

  return parseHL7v2FromIterator(iterateTokenizerSync(tokenizer), ctx);
}
```

### Unified Plugin

```typescript
const hl7v2Parser: Plugin<[ParseOptions?], string, Root> = function (
  this: Processor,
  options = {}
) {
  this.parser = (document: string) => {
    const settings = this.data("settings") as HL7v2Settings | undefined;

    return parseHL7v2(document, {
      preprocess: options.preprocess,
      delimiters: {
        ...settings?.delimiters,
        ...options.delimiters,
      },
      emptyMode: options.emptyMode ?? settings?.experimental?.emptyMode ?? "legacy",
    });
  };
};
```

## Migration Guide

### Before

```typescript
// Using settings
parseHL7v2(input, {
  settings: {
    delimiters: { field: '#' },
    experimental: { emptyMode: 'empty' }
  }
});
```

### After

```typescript
// Direct options
parseHL7v2(input, {
  delimiters: { field: '#' },
  emptyMode: 'empty'
});
```

## References

- [remark-parse source](https://github.com/remarkjs/remark/tree/main/packages/remark-parse)
- [rehype-parse source](https://github.com/rehypejs/rehype/tree/main/packages/rehype-parse)
- [unified processor documentation](https://unifiedjs.com/explore/package/unified/)
- ADR-0001: Segment Header Representation
