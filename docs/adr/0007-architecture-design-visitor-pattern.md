# Architecture Analysis: unist-util-visit-parents vs HL7v2 Visitor

## Executive Summary

This document provides a comprehensive architectural comparison between `unist-util-visit-parents` (a mature, widely-used AST visitor from the unified ecosystem) and our HL7v2 visitor implementation. Both implement depth-first tree traversal with ancestor tracking, but differ significantly in their approach to state management, API design, and feature scope.

**Key Finding**: Our implementation trades some flexibility (mutation support, reverse traversal) for simplicity and domain-specific optimizations (HL7v2 indexing conventions, metadata extraction).

---

## 1. Core Architecture Comparison

### 1.1 Traversal Strategy

#### unist-util-visit-parents
```javascript
function factory(node, index, parents) {
  return visit // Returns a thunk

  function visit() {
    // Call visitor
    result = toResult(visitor(node, parents))

    // Traverse children
    if (nodeAsParent.children && result[0] !== SKIP) {
      while (offset > -1 && offset < nodeAsParent.children.length) {
        subresult = factory(child, offset, grandparents)() // Recursive factory + invoke
        if (subresult[0] === EXIT) return subresult
        offset = typeof subresult[1] === 'number' ? subresult[1] : offset + step
      }
    }
  }
}

factory(tree, undefined, [])() // Kick off traversal
```

**Pattern**: **Factory + Thunk Pattern**
- `factory()` creates a closure (`visit()` function) for each node
- Returns the thunk immediately without executing
- Caller invokes the thunk to execute traversal
- Allows dynamic function naming for debugging (line 327-330)

**Benefits**:
- Deferred execution enables instrumentation
- Function names in stack traces show node types
- Can support reverse traversal by changing step direction

**Costs**:
- Two function calls per node (factory + visit)
- Additional closure allocation per node

---

#### HL7v2 Visitor

```typescript
function traverse(node: Nodes, ancestors: Nodes[], info: VisitInfo): VisitorResult {
  // Call visitor if node matches
  if (predicate(node, ancestors)) {
    const result = visitor(node as T, ancestors, info);
    if (result === EXIT) return EXIT;
    if (result === SKIP) skipChildren = true;
  }

  // Traverse children
  const children = getChildren(node);
  if (!children) return;

  const childAncestors = [...ancestors, node];
  for (const [i, child] of children.entries()) {
    const childInfo: VisitInfo = {
      index: computeIndex(node, i),
      sequence: computeSequence(node, i),
      depth: childDepth,
      metadata: extractMetadata(child),
    };
    const result = traverse(child, childAncestors, childInfo);
    if (result === EXIT) return EXIT;
  }
}

traverse(tree, [], rootInfo) // Direct recursive call
```

**Pattern**: **Direct Recursion with Context Passing**
- Single recursive function
- Context (ancestors, info) computed and passed down
- No intermediate thunks

**Benefits**:
- Simpler call stack (one function per node)
- More predictable performance
- Easier to understand and debug

**Costs**:
- Less flexible (no deferred execution)
- Can't easily support reverse traversal
- Stack traces less informative (all frames are "traverse")

---

### 1.2 State Management

#### unist-util-visit-parents

**State Location**: Mixed (parameters + closures)

```javascript
function factory(node, index, parents) {
  // 'node', 'index', 'parents' captured in closure

  function visit() {
    let result = empty        // Local mutable state
    let subresult            // Local mutable state
    let offset               // Local mutable state for iteration
    let grandparents         // Computed ancestor chain

    // parents.concat(nodeAsParent) creates new array
    grandparents = parents.concat(nodeAsParent)
  }
}
```

**Ancestor Management**:

- Immutable: New array created per level via `concat()`
- Passed by value to child factory calls
- Each factory gets its own immutable view

**Iteration State**:

- `offset` tracks current child index
- Can be modified by visitor via return value `[SKIP, newIndex]`
- Enables tree mutation during traversal

---

#### HL7v2 Visitor

**State Location**: Function parameters (pure functional)

```typescript
function traverse(
  node: Nodes,
  ancestors: Nodes[],  // Passed down, immutable per call
  info: VisitInfo      // Computed per node, immutable
): VisitorResult {
  let skipChildren = false  // Only local flag

  // New ancestor array for children
  const childAncestors = [...ancestors, node]

  // Info computed per child
  const childInfo: VisitInfo = { index, sequence, depth, metadata }
}
```

**Ancestor Management**:

- Immutable: New array created per level via spread `[...ancestors, node]`
- Pure: Same ancestors array produces same traversal
- No shared mutable state

**Iteration State**:

- Standard `for...of` loop
- No ability to skip siblings via return value
- Simpler but less flexible

---

### 1.3 Visitor Return Values

#### unist-util-visit-parents

**Rich Return Protocol**:
```typescript
type VisitorResult =
  | void | null | undefined           // Continue normally
  | boolean                           // EXIT (false) | CONTINUE (true)
  | 'skip'                            // Skip children
  | number                            // Jump to sibling index
  | [Action?, Index?]                 // Tuple: action + index

// Normalized via toResult():
type ActionTuple = [(Action | void)?, (Index | void)?]
```

**Capabilities**:
- `EXIT (false)`: Stop entire traversal
- `SKIP ('skip')`: Skip current node's children
- `CONTINUE (true)`: Explicit continue (default)
- `number`: Jump to sibling at index (for tree mutation)
- `[SKIP, index]`: Skip children AND jump to index

**Use Cases**:

- **Mutation Support**: Return index when removing siblings
- **Fine-grained Control**: Can skip ahead after batch operations
- **Defensive Safety**: Can recover from mutations

**Example**:

```javascript
visit(tree, (node, parents) => {
  if (node.type === 'danger') {
    // Remove this node and all following siblings
    const parent = parents[parents.length - 1]
    parent.children.splice(nodeIndex, parent.children.length)
    return parent.children.length // Jump past removed nodes
  }
})
```

---

#### HL7v2 Visitor

**Simple Return Protocol**:

```typescript
type VisitorResult =
  | void | null | undefined  // Continue
  | false                    // EXIT
  | 'skip'                   // SKIP children

// Constants exported from unist-util-visit-parents:
EXIT = false
SKIP = 'skip'
```

**Capabilities**:
- `EXIT`: Stop traversal
- `SKIP`: Skip children
- Default (void): Continue

**Trade-offs**:
- **Simpler**: Only 3 outcomes to reason about
- **Less Powerful**: Can't handle mid-traversal mutations
- **Immutable-Friendly**: Assumes tree isn't mutated
- **Sufficient**: For read-only traversals (our use case)

---

## 2. API Design Patterns

### 2.1 Parameter Overloading

#### unist-util-visit-parents
```typescript
// Overloads:
visitParents(tree, visitor)                    // Visit all
visitParents(tree, test, visitor)              // Visit matching
visitParents(tree, visitor, reverse)           // Visit all in reverse
visitParents(tree, test, visitor, reverse)     // Visit matching in reverse

// Implementation:
function visitParents(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
  } else {
    check = test
  }
}
```

**Pattern**: **Runtime Type Inspection**

- Distinguishes test from visitor by checking subsequent parameter
- Supports 4 different call patterns
- Flexible but requires runtime checks

**Pros**:

- Very ergonomic API
- Supports reverse traversal (rare but valuable)

**Cons**:

- Type guards needed: `typeof visitor !== 'function'`
- Order matters: Can't pass reverse without test
- TypeScript overloads required for type safety

---

#### HL7v2 Visitor

```typescript
// Overloads:
visit(tree, visitor)            // Visit all
visit(tree, test, visitor)      // Visit matching

// Implementation:
function visit<T>(tree: Nodes, arg2: Visitor<T> | Test<T>, arg3?: Visitor<T>) {
  if (arg3 === undefined) {
    visitor = arg2 as Visitor<T>
  } else {
    test = arg2 as Test<T>
    visitor = arg3
  }
}
```

**Pattern**: **Simplified Overloading**

- Only 2 call patterns
- Clearer type discrimination (presence of arg3)
- Documented gotcha: Function as arg2 is always visitor

**Pros**:

- Simpler implementation
- Clear intent
- Fewer edge cases

**Cons**:

- No reverse traversal support
- Test function MUST be paired with visitor

**Design Decision**: Documented explicitly in JSDoc:

```typescript
/**
 * @remarks
 * **Important**: If you pass a function as the second argument, it is always
 * treated as a Visitor, never as a Test.
 */
```

---

### 2.2 Test Predicate Abstraction

#### unist-util-visit-parents

```javascript
import {convert} from 'unist-util-is'

const is = convert(check)
if (!test || is(node, index, parents[parents.length - 1])) {
  result = toResult(visitor(node, parents))
}
```

**Delegation to `unist-util-is`**:

- Converts test to predicate function
- Supports rich test types:
  - String: type matching
  - Function: custom predicate or type guard
  - Array: match any type in array
  - Object: property matching
  - `null`/`undefined`: match all

**Test Signature**:

```typescript
(node, index, parent) => boolean
```

- Receives index and parent for context-aware tests

---

#### HL7v2 Visitor

```typescript
export function createTest(test: Test<Nodes>): Predicate {
  if (test === null) return () => true
  if (typeof test === 'string') return (node) => node.type === test
  if (typeof test === 'function') return test

  // Object property matching
  return (node) => {
    for (const key of Object.keys(test)) {
      if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
        continue // Security: prototype pollution guard
      }
      const testValue = test[key]
      const nodeValue = node[key]

      if (testValue === undefined) {
        if (Object.hasOwn(node, key) && nodeValue !== undefined) return false
      } else if (nodeValue !== testValue) {
        return false
      }
    }
    return true
  }
}
```

**Custom Implementation**:

- In-house predicate creation
- Supports: string, function, object, null
- No array support (less common)

**Test Signature**:

```typescript
(node, ancestors) => boolean
```

- Receives full ancestors array (not just parent)
- No index parameter (can get from info if needed)

**Security Hardening**:

- Guards against prototype pollution
- Explicit `Object.hasOwn()` checks

---

## 3. Context Information

### 3.1 What's Passed to Visitor

#### unist-util-visit-parents

```typescript
visitor(node, ancestors)
```

**Parameters**:
- `node`: Current node
- `ancestors`: Array of parent nodes (NOT including current)

**What's Available**:

- Immediate parent: `ancestors[ancestors.length - 1]`
- Full ancestor chain
- Node itself

**What's NOT Available**:

- Index among siblings (can compute via `parent.children.indexOf(node)` - O(n))
- Depth (can compute via `ancestors.length + 1`)
- Metadata about node (must extract manually)

**Philosophy**: **Minimal Core**

- Provide only what can't be computed
- Let users extract what they need
- Keep API surface small

---

#### HL7v2 Visitor

```typescript
visitor(node, ancestors, info)

interface VisitInfo {
  index: number        // 0-based among siblings
  sequence: number     // 1-based (HL7v2 convention, segment-header = 0)
  depth: number        // 1-based (root = 1)
  metadata: Record<string, unknown> | undefined
}
```

**Parameters**:

- `node`: Current node
- `ancestors`: Array of parent nodes (NOT including current)
- `info`: Pre-computed contextual information

**What's Available**:

- Everything from unist-util-visit-parents
- PLUS pre-computed context
- PLUS domain-specific metadata

**Philosophy**: **Domain-Specific Convenience**

- Pre-compute common operations
- Avoid O(n) `indexOf()` calls per node
- Provide HL7v2-specific context (sequence conventions)
- Extract useful metadata (segment headers, group names)

---

### 3.2 Performance Implications

#### Computing Index

**unist-util-visit-parents** (user must compute):

```javascript
visit(tree, (node, parents) => {
  const parent = parents[parents.length - 1]
  const index = parent.children.indexOf(node) // O(n) per node!
})
```

- If every visitor computes index: **O(n²) total**
- Most visitors don't need it: **O(n)**
- User pays for what they use

**HL7v2** (pre-computed):

```typescript
for (const [i, child] of children.entries()) {
  const childInfo: VisitInfo = {
    index: computeIndex(node, i),  // O(1) - just arithmetic
    sequence: computeSequence(node, i),
    depth: childDepth,
    metadata: extractMetadata(child),
  }
  traverse(child, childAncestors, childInfo)
}
```

- Always computed: **O(n)**
- Passed efficiently down the tree
- Users get it for free

**Trade-off**:

- unist: Pay-per-use (flexible, minimal overhead if unused)
- HL7v2: Always-computed (predictable, convenient, slight overhead if unused)

**Our Decision**: Since HL7v2 fields are indexed and sequence matters, we assume most visitors need this info. Pre-computing saves users from O(n²) mistake.

---

### 3.3 Metadata Extraction

**unist-util-visit-parents**: No metadata extraction

- Generic: Works with any unist-compatible AST
- Users extract what they need

**HL7v2**: Domain-specific metadata

```typescript
function extractMetadata(node: Nodes): Record<string, unknown> | undefined {
  if (node.type === 'group' && 'name' in node) {
    return { name: node.name }
  }
  if (node.type === 'segment' && 'children' in node) {
    const header = node.children[0]
    if (header?.type === 'segment-header') {
      return { header: header.value }  // "MSH", "PID", etc.
    }
  }
  return undefined
}
```

**Benefit**: Direct access to common info

```typescript
visit(ast, 'segment', (node, ancestors, info) => {
  console.log(info.metadata?.header)  // "PID" - no traversal needed
})
```

**Cost**: Couples visitor to HL7v2 domain
- Can't reuse for other AST types
- Extraction logic must be maintained

---

## 4. Advanced Features

### 4.1 Reverse Traversal

#### unist-util-visit-parents: **Supported**

```javascript
visitParents(tree, visitor, true) // Reverse preorder (NRL)

const step = reverse ? -1 : 1
offset = (reverse ? nodeAsParent.children.length : -1) + step

while (offset > -1 && offset < nodeAsParent.children.length) {
  const child = nodeAsParent.children[offset]
  subresult = factory(child, offset, grandparents)()
  offset = typeof subresult[1] === 'number' ? subresult[1] : offset + step
}
```

**Use Case**: When you want to process children right-to-left

- Useful for certain transformations
- Rare but valuable when needed

---

#### HL7v2: **Not Supported**

```typescript
for (const [i, child] of children.entries()) {
  // Always left-to-right
}
```

**Rationale**:

- HL7v2 messages have inherent left-to-right order
- Fields are positional (PID.3 comes before PID.5)
- Reverse traversal would violate domain semantics

**If Needed**: Could add in future:

```typescript
const iterationOrder = reverse
  ? children.slice().reverse().entries()
  : children.entries()
```

---

### 4.2 Tree Mutation Support

#### unist-util-visit-parents: **Full Support**

Visitor can return index to handle mutations:

```javascript
visit(tree, (node, parents) => {
  if (node.type === 'remove-me') {
    const parent = parents[parents.length - 1]
    const index = parent.children.indexOf(node)
    parent.children.splice(index, 1)  // Mutate tree
    return index  // Continue at same index (next sibling shifted down)
  }
})
```

**Mechanism**:

```javascript
offset = typeof subresult[1] === 'number' ? subresult[1] : offset + step
```

- If visitor returns number, use it as next offset
- Handles insertions, deletions, replacements

**Safety**: Visitor must return correct index or risk:

- Skipping nodes
- Infinite loops
- Visiting same node twice

---

#### HL7v2: **No Explicit Support**

```typescript
for (const [i, child] of children.entries()) {
  const result = traverse(child, childAncestors, childInfo)
}
```

**Limitations**:

- Mutating `children` during traversal may skip or double-visit nodes
- No mechanism to communicate index changes

**Philosophy**: **Immutable-First**

- ASTs are treated as immutable during traversal
- Transformations should create new trees
- Aligns with functional programming principles

**If Mutation Needed**: User must:

1. Collect nodes to modify during traversal
2. Apply mutations after traversal completes

```typescript
const toRemove = []
visit(ast, (node, ancestors, info) => {
  if (shouldRemove(node)) {
    toRemove.push({ node, parent: ancestors.at(-1) })
  }
})

// After traversal:
for (const {node, parent} of toRemove) {
  const index = parent.children.indexOf(node)
  parent.children.splice(index, 1)
}
```

---

### 4.3 Stack Trace Debugging

#### unist-util-visit-parents: **Dynamic Function Naming**

```javascript
if (typeof value.type === 'string') {
  const name = typeof value.tagName === 'string'
    ? value.tagName
    : typeof value.name === 'string'
      ? value.name
      : undefined

  Object.defineProperty(visit, 'name', {
    value: 'node (' + color(node.type + (name ? '<' + name + '>' : '')) + ')'
  })
}
```

**Stack Trace**:
```
at node (root)
  at node (paragraph)
    at node (text)
```

**Benefit**: Immediately see where you are in the tree
**Cost**: Extra overhead to set function names

---

#### HL7v2: **Standard Stack Traces**

```
at traverse (index.ts:64)
  at traverse (index.ts:109)
    at traverse (index.ts:109)
```

**Benefit**: Lower overhead
**Cost**: Less informative stack traces

**Possible Enhancement**: Could add function naming:

```typescript
function traverse(...) {
  // Set function name for debugging
  Object.defineProperty(traverse, 'name', {
    value: `traverse(${node.type})`
  })
}
```

---

## 5. Type System Design

### 5.1 Type-Level Filtering

#### unist-util-visit-parents

**Advanced TypeScript Wizardry**:

```typescript
type InclusiveDescendant<Tree, Max = 10, Depth = 0> =
  Tree extends UnistParent
    ? Depth extends Max
      ? Tree
      : Tree | InclusiveDescendant<Tree['children'][number], Max, Increment<Depth>>
    : Tree

type Matches<Value, Check> =
  Check extends null | undefined ? Value
  : Value extends {type: Check} ? Value
  : Value extends Check ? Value
  : Check extends Function ? Predicate<Check, Value> extends Value ? Predicate<Check, Value> : never
  : never

type BuildVisitor<Tree, Check> = Visitor<
  Matches<InclusiveDescendant<Tree>, Check>,
  Ancestor<Tree, Matches<InclusiveDescendant<Tree>, Check>>
>
```

**Capabilities**:

- Infers which node types match test at compile time
- Narrows visitor `node` parameter to matching types
- Narrows `parents` to possible ancestors of matching nodes

**Example**:

```typescript
visitParents(mdast, 'heading', (node, parents) => {
  node.depth  // ✓ TypeScript knows this is Heading
  node.children  // ✓ Knows children are PhrasingContent[]
})
```

**Cost**: Very complex type system usage

- Hard to understand
- Long compilation times
- Requires deep TypeScript knowledge

---

#### HL7v2

**Simpler Type Approach**:

```typescript
export function visit<Type extends Nodes["type"]>(
  tree: Nodes,
  test: Type,
  visitor: Visitor<Extract<Nodes, { type: Type }>>
): void

export function visit<T extends Nodes>(
  tree: Nodes,
  test: Test<T>,
  visitor: Visitor<T>
): void
```

**Capabilities**:

- String literal types narrow node type
- Generic `Test<T>` allows user-defined narrowing
- Simpler type inference

**Example**:

```typescript
visit(ast, 'segment', (node, ancestors, info) => {
  node  // Segment type
  info.metadata?.header  // string | undefined
})

visit(ast, (n): n is Field => n.type === 'field', (node, ancestors, info) => {
  node  // Field type (narrowed by type guard)
})
```

**Trade-off**:

- Less sophisticated type narrowing
- Much simpler to understand and maintain
- Faster type-checking

---

## 6. Key Architectural Decisions

| Aspect | unist-util-visit-parents | HL7v2 Visitor | Rationale |
|--------|--------------------------|---------------|-----------|
| **Traversal Pattern** | Factory + Thunk | Direct Recursion | We chose simplicity and performance over deferred execution |
| **Return Values** | Rich (5 types + tuples) | Simple (3 types) | We don't support mutation, so simple protocol suffices |
| **Reverse Traversal** | Supported | Not supported | HL7v2 has inherent left-to-right order |
| **Index Computation** | User computes (O(n²) trap) | Pre-computed O(n) | HL7v2 visitors often need index/sequence |
| **Metadata** | None | Domain-specific | Common operations (get segment header) optimized |
| **Mutation** | Fully supported | Discouraged | Immutable transformations preferred |
| **Test Delegation** | External (`unist-util-is`) | Internal | Fewer dependencies, security hardening |
| **Type Complexity** | Very high | Moderate | Maintainability vs sophistication |
| **Debugging** | Dynamic function names | Standard stack | Simplicity over debuggability |

---

## 7. Lessons Learned

### 7.1 From unist-util-visit-parents

**1. The Factory + Thunk Pattern**
- Enables powerful instrumentation and debugging
- Consider for libraries where observability matters
- **Our take**: Overkill for our use case, but worth knowing

**2. Rich Return Protocol**
- Mutation support via index returns is elegant
- Tuple returns `[action, index]` are flexible but complex
- **Our take**: YAGNI - we don't need mutation

**3. Type-Level Programming**
- Sophisticated types enable amazing DX
- But: maintenance burden and compilation time
- **Our take**: Pragmatic middle ground - type safety without wizardry

**4. Delegating to Focused Libraries**
- `unist-util-is` handles test conversion
- Separation of concerns
- **Our take**: Simpler to inline for our needs, fewer deps

**5. Reverse Traversal**
- Rare but valuable feature
- Costs almost nothing to support (just a direction flag)
- **Our take**: Don't need it for HL7v2, but easy to add later

---

### 7.2 Our Innovations

**1. Pre-Computed Context (VisitInfo)**
- Prevents O(n²) `indexOf()` anti-pattern
- Assumes context is usually needed (good for HL7v2)
- **Learning**: Know your domain - generic libs can't make this trade-off

**2. Domain-Specific Metadata**
- Extracting segment headers is a common operation
- Metadata extraction is extensible
- **Learning**: Don't be afraid to optimize for your use case

**3. Simplified Return Protocol**
- Only 3 return values: void, EXIT, SKIP
- Easier to reason about
- **Learning**: Resist feature creep - only add complexity if truly needed

**4. Security Hardening in Test Creation**
- Prototype pollution guards
- Explicit property ownership checks
- **Learning**: Generic libs serve everyone, domain libs can be stricter

**5. Explicit HL7v2 Conventions**
- Sequence numbering (segment-header = 0, fields = 1,2,3...)
- Index adjustments for segment children
- **Learning**: Encode domain rules in the library, not user code

---

## 8. Recommendations

### 8.1 Improvements to Consider

**1. Add Reverse Traversal** *(Low Priority)*
- Cost: ~5 lines of code
- Benefit: Feature parity with unist
- Risk: Low
```typescript
export function visit(tree, test, visitor, reverse = false) {
  const iterateChildren = reverse
    ? (children) => children.slice().reverse()
    : (children) => children
}
```

**2. Dynamic Function Naming** *(Medium Priority)*
- Cost: ~10 lines
- Benefit: Better debugging experience
- Risk: Slight performance overhead
```typescript
Object.defineProperty(traverse, 'name', {
  value: `visit(${node.type}${info.metadata?.header ? `:${info.metadata.header}` : ''})`
})
```

**3. Optional CONTINUE Constant** *(Low Priority)*
- Export `CONTINUE = true` for symmetry with unist
- Current API uses `undefined` which is fine but less explicit

**4. Consider Index Return for Mutations** *(Future)*
- If we ever need mutation support:
```typescript
if (typeof result === 'number') {
  // Jump to specific child index
  i = result - 1 // Will be incremented by loop
}
```

---

### 8.2 What to Keep

**1. Simple Return Protocol**
- Don't add tuple returns unless truly needed
- Current EXIT/SKIP/undefined is clear

**2. Pre-Computed Context**
- VisitInfo is a win for HL7v2
- Users appreciate not having to compute index/depth

**3. Domain-Specific Metadata**
- Segment headers and group names are commonly needed
- Keep this, potentially add more metadata types

**4. Direct Recursion**
- Simpler than factory + thunk
- Performance is good
- No need to change

**5. Security Hardening**
- Prototype pollution guards should stay
- We serve healthcare - security matters

---

## 9. Conclusion

Both libraries accomplish the same core goal (AST traversal with ancestors) but make different trade-offs:

**unist-util-visit-parents** is a **generic, flexible, feature-rich** library:
- Supports any unist-compatible AST
- Full mutation support
- Reverse traversal
- Sophisticated types
- Part of a large ecosystem

**HL7v2 Visitor** is a **domain-specific, opinionated, streamlined** library:
- Optimized for HL7v2 AST
- Pre-computed context (index, sequence, depth)
- Domain metadata extraction
- Immutable-friendly
- Simpler implementation

**Our architecture is appropriate for our needs**. We've made conscious trade-offs:
- Traded flexibility for simplicity
- Traded generality for domain optimization
- Traded sophisticated types for maintainability

**Key Insight**: Generic libraries must serve everyone. Domain libraries can make opinionated choices that delight their specific users. Our pre-computed context and metadata extraction would be inappropriate for unist (too opinionated), but they're perfect for HL7v2 (where these conventions are standardized).

**Moving Forward**:
1. Keep our core architecture
2. Consider adding reverse traversal (low-hanging fruit)
3. Consider dynamic function naming (better DX)
4. Document our design decisions (this analysis!)
5. Monitor for use cases that need mutation (unlikely)

**Final Verdict**: Our implementation is well-designed for HL7v2. We've learned from unist's maturity while making appropriate domain-specific choices.

---

## Appendix: Performance Characteristics

| Operation | unist-util-visit-parents | HL7v2 Visitor |
|-----------|--------------------------|---------------|
| Traversal | O(n) | O(n) |
| Ancestor array | O(d) per level (concat) | O(d) per level (spread) |
| Index lookup | O(n) per node if user computes | O(1) - pre-computed |
| Metadata | User extracts | O(1) - pre-computed |
| Function calls | 2 per node (factory + visit) | 1 per node (traverse) |
| Memory | Parents array + closures | Ancestors array + info objects |

**Both are O(n) for traversal**, but our approach is more predictable and avoids the O(n²) trap of repeated `indexOf()` calls.
