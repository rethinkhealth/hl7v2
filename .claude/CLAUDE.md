# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript monorepo for HL7v2 message processing built on the `unified` framework. The project parses, transforms, validates, and serializes HL7v2 messages using Abstract Syntax Trees (ASTs). It provides a modular ecosystem of packages organized into core functionality, plugins, linting rules, and utilities.

**Key architectural principle**: HL7v2 messages are parsed into ASTs (Abstract Syntax Trees) that conform to the `unist` specification, enabling powerful composition of transformation and validation plugins using the `unified` ecosystem.

## Development Commands

### Building
```bash
pnpm build                    # Build all packages (uses turbo for caching)
pnpm check-types              # Type-check all packages without emitting
```

### Testing
```bash
pnpm test                     # Run all tests (uses vitest)
pnpm test:coverage            # Run tests with coverage reports
pnpm test:watch               # Run tests in watch mode
```

For individual package tests:
```bash
cd packages/<package-name>
pnpm test                     # Run tests for this package
pnpm test:watch               # Watch mode for this package
```

### Linting & Formatting
```bash
pnpm lint                     # Check code with Ultracite (Biome-based)
pnpm format                   # Format and auto-fix code
npx ultracite check           # Same as lint
npx ultracite fix             # Same as format
```

The project uses **Ultracite**, a zero-config Biome preset that enforces strict code quality. Most issues are auto-fixable.

### Package Management
```bash
pnpm syncpack                 # Check dependency version alignment
pnpm syncpack:fix             # Auto-fix version mismatches across packages
```

### Dependency Installation
This project uses `pnpm` exclusively. The `only-allow` pre-install hook enforces this.

```bash
pnpm install                  # Install all dependencies
pnpm ci:install               # Install without frozen lockfile (CI mode)
```

## Architecture

### Monorepo Structure

This is a **pnpm workspace** managed by **Turborepo**. Packages live in `packages/` and follow these categories:

1. **Core Packages** (`hl7v2-ast`, `hl7v2-parser`, `hl7v2`, `hl7v2-builder`, `hl7v2-to-hl7v2`, `hl7v2-jsonify`)
2. **Plugins** (`hl7v2-decode-escapes`, `hl7v2-annotate-message`, `hl7v2-annotate-message-structure`)
3. **Linting** (`hl7v2-lint-*` packages and `hl7v2-preset-lint-recommended`)
4. **Utilities** (`hl7v2-utils`, `hl7v2-util-query`, `hl7v2-util-visit`, `hl7v2-util-semver`, `hl7v2-util-message-info`)
5. **Tooling** (`hl7v2-cli`, `hl7v2-config`, `testing`, `tsconfig`)

### Core Architecture Concepts

#### Unified Pipeline

The main entry point (`@rethinkhealth/hl7v2`) creates a pre-configured `unified` processor pipeline (see `packages/hl7v2/src/index.ts`):

```typescript
unified()
  .use(hl7v2Parser)                     // Parse HL7v2 text → AST
  .use(hl7v2AnnotateMessage)            // Extract metadata from MSH segment
  .use(hl7v2AnnotateMessageStructure)   // Infer message structure if missing
  .use(hl7v2DecodeEscapes)              // Decode escape sequences
  .use(hl7v2PresetLintRecommended)      // Apply all recommended lint rules
  .use(hl7v2Jsonify)                    // Serialize to JSON
  .freeze()
```

Plugins are **composable** and can be used independently or in custom combinations.

#### AST Structure

The AST is defined in `@rethinkhealth/hl7v2-ast` and implements the `unist` spec. The hierarchy is:

- **Root** - top-level node representing the entire message
- **Segment** - a single HL7v2 segment (e.g., MSH, PID)
- **Field** - a field within a segment
- **Component** - a component within a field (delimited by `^`)
- **SubComponent** - a sub-component within a component (delimited by `&`)
- **Repetition** - field repetitions (delimited by `~`)

Position tracking and delimiter information are preserved throughout the tree.

#### Package Build System

Packages use a **dual build** approach:
- **tsup** - Bundles ESM JavaScript (`format: ["esm"]`, target `es2022`)
- **tsc** - Generates TypeScript declarations with source maps (for IDE go-to-definition)

This is because tsup cannot generate the `.d.ts.map` files required for proper IDE navigation.

Each package's `package.json` has:
```json
{
  "type": "module",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": "./dist/index.js"
  }
}
```

All packages are **ESM-only** and require Node.js 18+.

### Workspace Dependencies

Packages use `workspace:*` protocol for internal dependencies. Before publishing, changesets resolves these to actual version numbers.

## Code Style & Quality

This project follows strict **Ultracite** standards (see `.cursor/rules/ultracite.mdc` and `.github/copilot-instructions.md`):

- **No TypeScript enums** - use const objects or union types
- **No namespace imports** - use specific imports
- **Use `for...of`** instead of `.forEach()`
- **Use arrow functions** for callbacks
- **Always handle promises** - no floating promises
- **Type safety** - no `any`, prefer `unknown` if type is genuinely unknown
- **Use `as const`** for literal types instead of type annotations
- **Export types with `export type`**
- **Import types with `import type`**
- **Don't use non-null assertions (`!`)** unless absolutely necessary
- **Remove `console.log`/`debugger`** before committing

Run `pnpm format` before committing. The pre-commit hook (`.husky/pre-commit`) runs `lint-staged` to enforce this.

## Testing Guidelines

- Tests use **Vitest** with the config in `packages/testing/src/vitest.config.ts`
- Test files: `**/*.test.ts`, `**/*.test.tsx`
- Use `vitest.config.ts` in each package for package-specific configuration
- Coverage reporters: text, html, json
- Assertions use `expect()` inside `it()` or `test()` blocks
- Don't commit `.only` or `.skip` in tests
- Use `async/await` instead of done callbacks

## Publishing & Versioning

This project uses **Changesets** for version management:

```bash
pnpm changeset                # Create a new changeset
pnpm ci:version               # Bump versions based on changesets
pnpm ci:publish               # Publish packages to npm
```

All packages are published to npm under the `@rethinkhealth` scope with public access.

## Common Workflows

### Adding a New Package

1. Create directory in `packages/<new-package-name>/`
2. Set up `package.json` with `workspace:*` for internal deps
3. Add `tsconfig.json` extending `@rethinkhealth/tsconfig/library.json`
4. Add `tsup.config.ts` for build configuration
5. Add `vitest.config.ts` for tests
6. Ensure package scripts include: `build`, `check-types`, `test`, `test:watch`

### Running a Single Test File

```bash
cd packages/<package-name>
pnpm test <test-file-pattern>
```

### Debugging Build Issues

1. Check turbo cache: `turbo run build --force` (skip cache)
2. Clean build artifacts: `pnpm clean`
3. Check type errors: `pnpm check-types`
4. Verify dependencies are installed: `pnpm install`

### Working with Plugins

Plugins follow the `unified` plugin pattern:
- Export a default function that returns a transformer
- Transformer receives the AST tree and optional file
- Use `visit()` from `@rethinkhealth/hl7v2-util-visit` for tree traversal
- Mutate the tree in place or return a new tree

See existing plugins in `packages/hl7v2-decode-escapes/` or `packages/hl7v2-annotate-message/` for reference implementations.

## Important Notes

- **This project is under active development** - not recommended for production workloads
- **ESM-only** - no CommonJS support
- **Requires Node.js 18+**
- **pnpm only** - enforced by `only-allow` preinstall hook
- **Pre-commit hooks** run linting via `lint-staged`
- **Turbo caching** is enabled for `build`, `test`, and `check-types` tasks


# Ultracite Code Standards

This project uses **Ultracite**, a zero-config preset that enforces strict code quality standards through automated formatting and linting.

## Quick Reference

- **Format code**: `pnpm dlx ultracite fix`
- **Check for issues**: `pnpm dlx ultracite check`
- **Diagnose setup**: `pnpm dlx ultracite doctor`

Oxlint + Oxfmt (the underlying engine) provides robust linting and formatting. Most issues are automatically fixable.

---

## Core Principles

Write code that is **accessible, performant, type-safe, and maintainable**. Focus on clarity and explicit intent over brevity.

### Type Safety & Explicitness

- Use explicit types for function parameters and return values when they enhance clarity
- Prefer `unknown` over `any` when the type is genuinely unknown
- Use const assertions (`as const`) for immutable values and literal types
- Leverage TypeScript's type narrowing instead of type assertions
- Use meaningful variable names instead of magic numbers - extract constants with descriptive names

### Modern JavaScript/TypeScript

- Use arrow functions for callbacks and short functions
- Prefer `for...of` loops over `.forEach()` and indexed `for` loops
- Use optional chaining (`?.`) and nullish coalescing (`??`) for safer property access
- Prefer template literals over string concatenation
- Use destructuring for object and array assignments
- Use `const` by default, `let` only when reassignment is needed, never `var`

### Async & Promises

- Always `await` promises in async functions - don't forget to use the return value
- Use `async/await` syntax instead of promise chains for better readability
- Handle errors appropriately in async code with try-catch blocks
- Don't use async functions as Promise executors

### React & JSX

- Use function components over class components
- Call hooks at the top level only, never conditionally
- Specify all dependencies in hook dependency arrays correctly
- Use the `key` prop for elements in iterables (prefer unique IDs over array indices)
- Nest children between opening and closing tags instead of passing as props
- Don't define components inside other components
- Use semantic HTML and ARIA attributes for accessibility:
  - Provide meaningful alt text for images
  - Use proper heading hierarchy
  - Add labels for form inputs
  - Include keyboard event handlers alongside mouse events
  - Use semantic elements (`<button>`, `<nav>`, etc.) instead of divs with roles

### Error Handling & Debugging

- Remove `console.log`, `debugger`, and `alert` statements from production code
- Throw `Error` objects with descriptive messages, not strings or other values
- Use `try-catch` blocks meaningfully - don't catch errors just to rethrow them
- Prefer early returns over nested conditionals for error cases

### Code Organization

- Keep functions focused and under reasonable cognitive complexity limits
- Extract complex conditions into well-named boolean variables
- Use early returns to reduce nesting
- Prefer simple conditionals over nested ternary operators
- Group related code together and separate concerns

### Security

- Add `rel="noopener"` when using `target="_blank"` on links
- Avoid `dangerouslySetInnerHTML` unless absolutely necessary
- Don't use `eval()` or assign directly to `document.cookie`
- Validate and sanitize user input

### Performance

- Avoid spread syntax in accumulators within loops
- Use top-level regex literals instead of creating them in loops
- Prefer specific imports over namespace imports
- Avoid barrel files (index files that re-export everything)
- Use proper image components (e.g., Next.js `<Image>`) over `<img>` tags

### Framework-Specific Guidance

**Next.js:**
- Use Next.js `<Image>` component for images
- Use `next/head` or App Router metadata API for head elements
- Use Server Components for async data fetching instead of async Client Components

**React 19+:**
- Use ref as a prop instead of `React.forwardRef`

**Solid/Svelte/Vue/Qwik:**
- Use `class` and `for` attributes (not `className` or `htmlFor`)

---

## Testing

- Write assertions inside `it()` or `test()` blocks
- Avoid done callbacks in async tests - use async/await instead
- Don't use `.only` or `.skip` in committed code
- Keep test suites reasonably flat - avoid excessive `describe` nesting

## When Oxlint + Oxfmt Can't Help

Oxlint + Oxfmt's linter will catch most issues automatically. Focus your attention on:

1. **Business logic correctness** - Oxlint + Oxfmt can't validate your algorithms
2. **Meaningful naming** - Use descriptive names for functions, variables, and types
3. **Architecture decisions** - Component structure, data flow, and API design
4. **Edge cases** - Handle boundary conditions and error states
5. **User experience** - Accessibility, performance, and usability considerations
6. **Documentation** - Add comments for complex logic, but prefer self-documenting code

---

Most formatting and common issues are automatically fixed by Oxlint + Oxfmt. Run `pnpm dlx ultracite fix` before committing to ensure compliance.


# Ultracite Code Standards

This project uses **Ultracite**, a zero-config preset that enforces strict code quality standards through automated formatting and linting.

## Quick Reference

- **Format code**: `pnpm dlx ultracite fix`
- **Check for issues**: `pnpm dlx ultracite check`
- **Diagnose setup**: `pnpm dlx ultracite doctor`

Biome (the underlying engine) provides robust linting and formatting. Most issues are automatically fixable.

---

## Core Principles

Write code that is **accessible, performant, type-safe, and maintainable**. Focus on clarity and explicit intent over brevity.

### Type Safety & Explicitness

- Use explicit types for function parameters and return values when they enhance clarity
- Prefer `unknown` over `any` when the type is genuinely unknown
- Use const assertions (`as const`) for immutable values and literal types
- Leverage TypeScript's type narrowing instead of type assertions
- Use meaningful variable names instead of magic numbers - extract constants with descriptive names

### Modern JavaScript/TypeScript

- Use arrow functions for callbacks and short functions
- Prefer `for...of` loops over `.forEach()` and indexed `for` loops
- Use optional chaining (`?.`) and nullish coalescing (`??`) for safer property access
- Prefer template literals over string concatenation
- Use destructuring for object and array assignments
- Use `const` by default, `let` only when reassignment is needed, never `var`

### Async & Promises

- Always `await` promises in async functions - don't forget to use the return value
- Use `async/await` syntax instead of promise chains for better readability
- Handle errors appropriately in async code with try-catch blocks
- Don't use async functions as Promise executors

### React & JSX

- Use function components over class components
- Call hooks at the top level only, never conditionally
- Specify all dependencies in hook dependency arrays correctly
- Use the `key` prop for elements in iterables (prefer unique IDs over array indices)
- Nest children between opening and closing tags instead of passing as props
- Don't define components inside other components
- Use semantic HTML and ARIA attributes for accessibility:
  - Provide meaningful alt text for images
  - Use proper heading hierarchy
  - Add labels for form inputs
  - Include keyboard event handlers alongside mouse events
  - Use semantic elements (`<button>`, `<nav>`, etc.) instead of divs with roles

### Error Handling & Debugging

- Remove `console.log`, `debugger`, and `alert` statements from production code
- Throw `Error` objects with descriptive messages, not strings or other values
- Use `try-catch` blocks meaningfully - don't catch errors just to rethrow them
- Prefer early returns over nested conditionals for error cases

### Code Organization

- Keep functions focused and under reasonable cognitive complexity limits
- Extract complex conditions into well-named boolean variables
- Use early returns to reduce nesting
- Prefer simple conditionals over nested ternary operators
- Group related code together and separate concerns

### Security

- Add `rel="noopener"` when using `target="_blank"` on links
- Avoid `dangerouslySetInnerHTML` unless absolutely necessary
- Don't use `eval()` or assign directly to `document.cookie`
- Validate and sanitize user input

### Performance

- Avoid spread syntax in accumulators within loops
- Use top-level regex literals instead of creating them in loops
- Prefer specific imports over namespace imports
- Avoid barrel files (index files that re-export everything)
- Use proper image components (e.g., Next.js `<Image>`) over `<img>` tags

### Framework-Specific Guidance

**Next.js:**
- Use Next.js `<Image>` component for images
- Use `next/head` or App Router metadata API for head elements
- Use Server Components for async data fetching instead of async Client Components

**React 19+:**
- Use ref as a prop instead of `React.forwardRef`

**Solid/Svelte/Vue/Qwik:**
- Use `class` and `for` attributes (not `className` or `htmlFor`)

---

## Testing

- Write assertions inside `it()` or `test()` blocks
- Avoid done callbacks in async tests - use async/await instead
- Don't use `.only` or `.skip` in committed code
- Keep test suites reasonably flat - avoid excessive `describe` nesting

## When Biome Can't Help

Biome's linter will catch most issues automatically. Focus your attention on:

1. **Business logic correctness** - Biome can't validate your algorithms
2. **Meaningful naming** - Use descriptive names for functions, variables, and types
3. **Architecture decisions** - Component structure, data flow, and API design
4. **Edge cases** - Handle boundary conditions and error states
5. **User experience** - Accessibility, performance, and usability considerations
6. **Documentation** - Add comments for complex logic, but prefer self-documenting code

---

Most formatting and common issues are automatically fixed by Biome. Run `pnpm dlx ultracite fix` before committing to ensure compliance.
