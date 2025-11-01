# ADR 0002: Message Metadata Storage

## Status

Accepted

## Context

HL7v2 messages contain critical metadata in the MSH (Message Header) segment that is frequently needed by downstream processors:

- **MSH-12**: Version ID (e.g., "2.5", "2.3.1")
- **MSH-9.1**: Message Code (e.g., "ADT", "ORU", "VXU")
- **MSH-9.2**: Trigger Event (e.g., "A01", "R01")
- **MSH-9.3**: Message Structure (e.g., "ADT_A01", "ORU_R01")

Multiple plugins in our ecosystem need this information:

- Linters need to validate version compatibility
- Transformers need to apply version-specific logic
- Routers need to dispatch based on message type
- Validators need to check message structure conformance

Without a standard approach, each plugin must independently query and parse these fields, leading to:

1. **Performance overhead**: Redundant MSH field extraction
2. **Code duplication**: Same parsing logic in multiple plugins
3. **Inconsistency**: Different plugins may parse fields differently
4. **Tight coupling**: Plugins directly depend on MSH field structure

The unified/unist ecosystem provides two storage locations for metadata:

- **`tree.data`** (node data): Attached to AST nodes
- **`file.data`** (VFile data): Attached to the processing file object

We needed to decide:

1. Where to store message metadata
2. How to extract and populate it
3. How to make it accessible to downstream plugins

## Decision

We will store message metadata in **`Root.data.messageInfo`** only, following the same pattern as delimiter storage (`Root.data.delimiters`).

### Implementation Strategy

1. **Create utility library** (`@rethinkhealth/hl7v2-util-message-info`)

   - Provides on-demand extraction functions
   - Can be used independently without unified pipeline
   - Implements `getMessageInfo()`, `getVersion()`, etc.

2. **Create annotator plugin** (`@rethinkhealth/hl7v2-annotate-message`)

   - Unified transformer plugin
   - Extracts metadata once and stores in `Root.data.messageInfo`
   - Uses TypeScript module augmentation for type safety
   - Preserves existing `Root.data` properties

3. **Update existing plugins** to demonstrate usage pattern

   - Modify `hl7v2-lint-message-version` as reference implementation
   - Use pattern: `tree.data?.messageInfo?.version ?? value(tree, "MSH-12")`
   - Maintains backward compatibility

### Storage Location Rationale

We chose `Root.data` over `VFile.data` for these reasons:

#### Document-Intrinsic Nature

Message metadata is intrinsic to the HL7v2 document structure, not processing metadata:

- Version defines the message schema
- Message type/trigger/structure define the message semantics
- These properties describe "what the message is", not "how we're processing it"

This aligns with how delimiters are stored—they're also document-intrinsic.

#### Standalone Tool Support

Many tools operate on the tree without VFile context:

```typescript
import { toHl7v2 } from '@rethinkhealth/hl7v2-to-hl7v2';

// Called standalone, no VFile available
const output = toHl7v2(tree);
```

The compiler pulls delimiters from `Root.data` (line 31 in `hl7v2-to-hl7v2/src/index.ts`):

```typescript
const d = {
  ...DEFAULT_DELIMITERS,
  ...delimiters,
  ...(node.type === "root" && node.data?.delimiters),
};
```

Message metadata should follow this same pattern for consistency.

#### Tree Serialization

When ASTs are serialized (to JSON, for storage, etc.), `Root.data` is preserved. Tools that reconstruct trees can access the metadata without re-parsing.

#### Ecosystem Consistency

The remark/rehype ecosystems follow similar patterns:
- `remark-frontmatter` stores YAML/TOML in `node.data`
- `remark-gfm` stores table metadata in `node.data`
- Node-specific metadata goes in `node.data`, not `file.data`

#### Simpler Mental Model

One storage location (vs. hybrid approach) simplifies the API:

- Plugins know exactly where to look
- No synchronization concerns
- Clear ownership (tree owns its metadata)

### Type Safety

We use TypeScript module augmentation to extend the `RootData` interface:

```typescript
declare module "@rethinkhealth/hl7v2-ast" {
  interface RootData {
    messageInfo?: MessageInfo;
  }
}
```

This provides type-safe access across the entire ecosystem without circular dependencies.

## Consequences

### Positive

1. **Performance**: Metadata extracted once, cached for all downstream plugins
2. **Consistency**: Single source of truth for message metadata
3. **Type Safety**: Full TypeScript support via augmentation
4. **Backward Compatibility**: Existing plugins work unchanged (can opt-in)
5. **Flexibility**: Plugins can use annotator OR utility based on needs
6. **Ecosystem Alignment**: Matches patterns from remark/rehype
7. **Simpler Design**: One storage location, no hybrid complexity

### Negative

1. **Plugin Dependency**: Pipelines should include annotator early for best performance
2. **Data Initialization**: Plugins must handle `undefined` when annotator not used
3. **AST Size**: Adds small amount of data to every Root node (minimal impact)

### Neutral

1. **Migration Path**: Existing plugins continue working, can gradually adopt
2. **Documentation**: Need to document both annotator and utility patterns

## Alternatives Considered

### Alternative 1: VFile.data Storage

**Rejected** because:

- Not accessible in standalone tool usage (e.g., `toHl7v2()`)
- Lost during tree serialization
- Inconsistent with delimiter storage pattern
- File data better suited for processing metadata (stats, timing, etc.)

### Alternative 2: Hybrid Storage (Both Root.data and VFile.data)

**Rejected** because:

- Adds complexity without clear benefit
- Synchronization concerns (which is source of truth?)
- Larger API surface area
- Users confused about which to use when

### Alternative 3: Always Extract On-Demand

**Rejected** because:

- Poor performance when multiple plugins need metadata
- Code duplication across plugins
- Misses opportunity for caching
- Though we provide utility for this use case

### Alternative 4: Separate Message Info Node

**Rejected** because:

- Requires changing AST structure
- Breaking change to existing parsers
- Over-engineering for simple metadata storage
- Node.data is designed exactly for this purpose

## Plugin Development Best Practices

Based on this decision, we establish these patterns for plugin developers:

### Pattern 1: Use Annotated Data with Fallback

```typescript
import { getMessageInfo } from '@rethinkhealth/hl7v2-util-message-info';

const myPlugin: Plugin<[], Root, Root> = () => {
  return (tree: Root) => {
    const info = tree.data?.messageInfo ?? getMessageInfo(tree);
    // Now guaranteed to have info, works with or without annotator
  };
};
```

### Pattern 2: Require Annotator (for performance)

```typescript
const myPlugin: Plugin<[], Root, Root> = () => {
  return (tree: Root, file) => {
    if (!tree.data?.messageInfo) {
      file.fail('This plugin requires hl7v2AnnotateMessage to run first');
    }
    const info = tree.data.messageInfo;
    // Type-safe, performant, explicit dependency
  };
};
```

### Pattern 3: Extract Specific Field Only

```typescript
import { getVersion } from '@rethinkhealth/hl7v2-util-message-info';

const myPlugin: Plugin<[], Root, Root> = () => {
  return (tree: Root) => {
    const version = tree.data?.messageInfo?.version ?? getVersion(tree);
    // Extract only what you need
  };
};
```

### Pattern 4: Standalone Tools

```typescript
import { getMessageInfo } from '@rethinkhealth/hl7v2-util-message-info';

export function analyzeMessage(tree: Root): Analysis {
  // Works without unified pipeline
  const info = getMessageInfo(tree);
  return { info, /* ... */ };
}
```

## References

- [unist specification](https://github.com/syntax-tree/unist)
- [unified documentation](https://unifiedjs.com/learn/)
- [remark-frontmatter](https://github.com/remarkjs/remark-frontmatter) - Similar metadata pattern
- Existing delimiter storage: `packages/hl7v2-to-hl7v2/src/index.ts:31`
- TypeScript module augmentation: [hl7v2-ast/index.d.ts:56-65](../../packages/hl7v2-ast/index.d.ts)

## History

- 2025-11-01: Initial proposal and acceptance
- Implemented in packages:
  - `@rethinkhealth/hl7v2-util-message-info`
  - `@rethinkhealth/hl7v2-annotate-message`
- Updated `@rethinkhealth/hl7v2-lint-message-version` as reference implementation
