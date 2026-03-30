---
date: 2026-03-30
topic: profile-context-plugin
---

# Centralize Profile Loading into a Context Plugin

## Problem Frame

Profile loading (field definitions, datatype definitions, table definitions) is duplicated across 9+ packages. Each lint rule and annotation plugin independently:

1. Extracts the HL7v2 version from MSH-12.1
2. Visits the tree to collect segment names
3. Loads field definitions (async) for each segment
4. Optionally derives and loads datatype or table definitions

This creates two costs: boilerplate when creating new packages (copy-paste the same loading helpers), and redundant work when multiple plugins run in a single pipeline (each one repeats the same version extraction, tree traversal, and profile loading).

## Requirements

- R1. Create `@rethinkhealth/hl7v2-annotate-profile-context`, a unified plugin that resolves profile data and attaches it to `file.data` for downstream consumers.
- R2. The plugin extracts the version from MSH-12.1, collects all segment names from the tree, and loads field definitions, datatype definitions, and table definitions in a single pass.
- R3. Resolved profiles are attached to `file.data` as sync-accessible Maps (e.g., `file.data.fields`, `file.data.datatypes`, `file.data.tables`, `file.data.version`).
- R4. Unknown profiles (Z-segments, unrecognized datatypes/tables) are silently omitted from the Maps. No VFile messages are emitted.
- R5. All existing profile-based lint rules (`required-fields`, `field-max-length`, `field-repetition`, `required-components`, `table-values`) are refactored to read from `file.data` instead of loading profiles themselves. They drop their `hl7v2-profiles` dependency.
- R6. All existing profile-based annotation plugins (`annotate-profile-fields`, `annotate-profile-datatypes`) are refactored to read from `file.data` instead of loading profiles themselves. They drop their `hl7v2-profiles` dependency.
- R7. The `annotate-profile-fields-code-systems` plugin is NOT included in this refactor — it loads code systems (unversioned, different axis) and depends on annotation output from the fields annotator.
- R8. The `lint-profile-events-segments-order` plugin is NOT included — event/message structure resolution has unique logic (MSH-9.3 with MSH-9.1+9.2 fallback) that differs from segment-based loading.
- R9. The presets (`preset-lint-profile-recommended`, `preset-annotate-profile-recommended`) must include `hl7v2-annotate-profile-context` before their existing plugins to ensure ordering.

## Success Criteria

- Profile loading (version extraction, tree traversal, async store calls) exists in exactly one package: `hl7v2-annotate-profile-context`.
- Consumer packages have zero imports from `@rethinkhealth/hl7v2-profiles`.
- All existing tests continue to pass without behavioral changes.
- Adding a new profile-based lint rule requires no async loading code — just reading from `file.data`.

## Scope Boundaries

- Event/message structure resolution stays in `lint-profile-events-segments-order` (R8).
- Code system loading stays in `annotate-profile-fields-code-systems` (R7).
- The async nature of the `hl7v2-profiles` store is not changed — it is contained to the context plugin.
- No changes to the profile store API (`profiles.fields.load()`, etc.).

## Key Decisions

- **Centralize, not eliminate**: Async profile loading is inherent to ESM dynamic imports. The goal is to contain it to one plugin, not remove it entirely.
- **Silent skip on errors**: Unknown profiles are omitted from Maps rather than reported to VFile. Consumers handle missing entries as they do today.
- **Exclude events and code systems**: These have sufficiently unique loading patterns (unversioned code systems, MSH-9 fallback resolution) that centralizing them would add complexity without reducing meaningful duplication.
- **Plugin naming**: `hl7v2-annotate-profile-context` follows the `annotate-` convention since it enriches `file.data`.

## Outstanding Questions

### Deferred to Planning

- [Affects R3][Needs research] What is the exact `file.data` type shape? Need to determine how to type-augment `VFile.data` for TypeScript consumers (module augmentation pattern).
- [Affects R5, R6][Technical] Should consumers fail gracefully when the context plugin is missing from the pipeline (check `file.data.fields` existence), or is the ordering contract strict?
- [Affects R9][Technical] Should the context plugin be added to both presets independently, or should the presets depend on each other to avoid double-loading?

## Next Steps

→ `/ce:plan` for structured implementation planning
