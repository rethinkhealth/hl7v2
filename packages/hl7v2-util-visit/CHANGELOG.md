# @rethinkhealth/hl7v2-util-visit

## 0.4.2

### Patch Changes

- 5c6109e: Refactor visitor to wrap unist-util-visit-parents with HL7v2-specific context

  **BREAKING CHANGE**: The visitor callback signature has changed from `(node, path)` to `(node, ancestors, info)`.

  ### Architecture Change

  The implementation now wraps `unist-util-visit-parents` (battle-tested with 50M+ weekly downloads) instead of implementing custom traversal. This provides:

  - ✅ Proven traversal logic (EXIT/SKIP handling, edge cases)
  - ✅ Mutation support (inherited from unist)
  - ✅ Reverse traversal support (available via underlying library)
  - ✅ Smaller, cleaner codebase (~120 lines vs ~180 lines)
  - ✅ Ecosystem compatibility (works with other unist utilities)

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
    - `ancestors`: Array of ancestor nodes from root to parent (no wrapper objects)
    - `info`: Pre-computed HL7v2 context `{ index, sequence, depth, metadata }`
  - **Delegates core traversal**: Built on top of `unist-util-visit-parents`
  - **Removed PathEntry**: No longer wraps nodes in PathEntry objects
  - **Direct ancestor access**: `ancestors.at(-1)` gives parent node directly
  - **Optimized index computation**: O(n) pre-computed map instead of O(n²) indexOf calls
  - **VisitInfo structure**:
    - `index`: 0-based index among siblings (tree position, not filtered position)
    - `sequence`: 1-based sequence (segment-header = 0, fields = 1,2,3...)
    - `depth`: 1-based depth in tree (root = 1)
    - `metadata`: Extracted metadata (header for segments, name for groups)

  ### Performance Improvements

  - **O(n) index pre-computation**: One-time upfront cost for child index map
  - **O(1) index lookups**: Avoids O(n²) `indexOf()` anti-pattern
  - **Battle-tested traversal**: Inherits optimizations from unist ecosystem

  ### Migration Guide

  | Old API                                | New API                                     |
  | -------------------------------------- | ------------------------------------------- |
  | `path.at(-1)?.node`                    | `ancestors.at(-1)` or just use `node`       |
  | `path.at(-1)?.level`                   | `info.depth`                                |
  | `path.at(-1)?.index`                   | `info.sequence`                             |
  | `path.at(-1)?.data?.header`            | `info.metadata?.header`                     |
  | `path.filter(e => e.type === 'group')` | `ancestors.filter(n => n.type === 'group')` |

  ### Important Note

  `info.index` and `info.sequence` represent the node's **position in the tree**, not its position among filtered results. For example:

  ```typescript
  // Structure: MSH with fields 1,2,3,4 - filter matches only field 3
  visit(
    ast,
    (n) => n.type === "field" && hasContent(n),
    (node, ancestors, info) => {
      console.log(info.sequence); // => 3 (tree position, not "1st match")
    }
  );
  ```

  This is correct because HL7v2 paths like `PID.3` refer to tree positions.

## 0.4.1

## 0.4.0

## 0.3.4

### Patch Changes

- 4a4b4ba: Updated the dynamic typing of the HL7v2 packages.

## 0.3.3

### Patch Changes

- 6fb9f25: Added a new package, which provides a type-safe, pure functional visitor pattern for traversing HL7v2 AST trees.
