---
"@glion/profiles": minor
---

`@glion/profiles/hl7v2.schema.json` is the JSON Schema of every profile file, with `$id` `https://glion.dev/schemas/hl7v2/v1.json` and one definition per kind of profile: `Event`, `Fields`, `Datatype`, `Table`, and `CodeSystem`. Every bundled profile file names its definition in `$schema`, such as `https://glion.dev/schemas/hl7v2/v1.json#/definitions/Fields`. Its root accepts a file of any kind; `ajv.getSchema("https://glion.dev/schemas/hl7v2/v1.json#/definitions/Event")` selects one kind. The event map and segment list of each version are lookups, not profiles, and are not in the schema.

**Breaking:** `@glion/profiles/hl7v2.schema.json` replaces the `@glion/profiles/event-schema.schema.json` export, and bundled event schemas name `https://glion.dev/schemas/hl7v2/v1.json#/definitions/Event` in `$schema` in place of `https://glion.dev/schemas/event-schema/v2.json`.
