# 4. Async Visitor Pattern Support

Date: 2025-11-24

## Status

Accepted

## Context

In processing HL7v2 messages, there are scenarios where developers may wish to perform asynchronous operations during AST traversal. Examples include:
- Querying a database to validate a segment against a schema.
- Calling an external API to enrich field data.
- Reading configuration files dynamically based on message content.

Developers familiar with modern JavaScript patterns might intuitively expect an `async/await` compatible visitor (e.g., `visitAsync`) that allows promises to be awaited during the traversal of each node.

However, the `unist` ecosystem (which this library follows) typically only provides synchronous traversal utilities (`unist-util-visit`, `unist-util-visit-parents`). We needed to decide whether to deviate from this pattern to offer native async support.

## Decision

We will **NOT** implement `visitAsync` or support asynchronous iterators in the core `hl7v2-visitor` package. The visitor pattern and traversal logic will remain strictly synchronous.

## Consequences

### Positive

1.  **Performance**:
    - Synchronous traversal is significantly faster. An async visitor would require wrapping every node visit in a `Promise`, introducing microtask scheduling overhead for potentially thousands of nodes in a message, even if no actual async work is done for most of them.
    - This ensures the core library remains suitable for high-throughput environments (e.g., processing streams of millions of messages).

2.  **Simplicity**:
    - The implementation of the traversal logic remains simple recursive functions without complex state management for resolving promise chains.
    - Error handling remains standard (try/catch) without needing to handle Promise rejections across recursive boundaries.

3.  **No "Function Coloring"**:
    - Keeping the visitor synchronous prevents the "async virus" from spreading. If `visit` were async, any function calling it (linters, parsers, transformers) would also have to be async, complicating the entire API surface.

### Negative

-   Developers cannot use `await` directly inside a visitor callback.
-   Code that requires async logic based on node position might look slightly more verbose than a direct `await` loop.

## Mitigation: The "Collect-then-Process" Pattern

To handle asynchronous needs, we recommend the **Collect-then-Process** pattern:

1.  **Collect**: Use the fast, synchronous `visit` function to traverse the tree and collect the specific nodes (and their paths/metadata) that require async processing into an array.
2.  **Process**: Iterate over that array using standard async patterns (`for...of` with `await`, or `Promise.all`).

### Example

```typescript
// ❌ AVOID: Hypothetical slow async visitor
/*
await visitAsync(tree, async (node) => {
  if (node.type === 'segment' && node.name === 'PID') {
    await validatePid(node); // Slows down entire traversal
  }
});
*/

// ✅ RECOMMENDED: Collect then Process
const nodesToValidate: Node[] = [];

// 1. Fast synchronous collection
visit(tree, (node) => {
  if (node.type === 'segment' && extractMetadata(node).name === 'PID') {
    nodesToValidate.push(node);
  }
});

// 2. Async processing
for (const node of nodesToValidate) {
  await validatePid(node);
}
```

