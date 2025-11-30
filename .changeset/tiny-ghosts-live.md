---
"@rethinkhealth/hl7v2-util-visit": patch
---

Refactor visitor pattern with new API and improved performance

**BREAKING CHANGE**: The visitor callback signature has changed from `(node, path)` to `(node, ancestors, info)`.

### Before
```typescript
visit(ast, (node, path) => {
  const entry = path.at(-1);
  console.log(entry?.data?.header, entry?.level);
});
```

### After
```typescript
visit(ast, (node, ancestors, info) => {
  console.log(info.metadata?.header, info.depth);
});
```

### Changes

- **New callback signature**: `(node, ancestors, info)` instead of `(node, path)`
  - `ancestors`: Array of ancestor nodes from root to parent
  - `info`: Object with `{ index, sequence, depth, metadata }`
- **Simplified implementation**: Uses nested visit pattern for O(n) traversal
- **Removed PathEntry**: No longer wraps nodes in PathEntry objects
- **Direct ancestor access**: `ancestors.at(-1)` gives parent node directly
- **VisitInfo structure**:
  - `index`: 0-based index among siblings
  - `sequence`: 1-based sequence (segment-header is 0)
  - `depth`: 1-based depth (root = 1)
  - `metadata`: Extracted metadata (header for segments, name for groups)

### Migration

| Old API | New API |
|---------|---------|
| `path.at(-1)?.node` | `ancestors.at(-1)` or just use `node` |
| `path.at(-1)?.level` | `info.depth` |
| `path.at(-1)?.index` | `info.sequence` |
| `path.at(-1)?.data?.header` | `info.metadata?.header` |
| `path.filter(e => e.type === 'group')` | `ancestors.filter(n => n.type === 'group')` |
