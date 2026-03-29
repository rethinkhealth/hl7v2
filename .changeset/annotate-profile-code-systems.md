---
"@rethinkhealth/hl7v2-annotate-profile-fields-code-systems": minor
"@rethinkhealth/hl7v2-preset-annotate-profile-recommended": minor
---

Add field-level code systems annotation plugin that enriches coded value subcomponents with UTG display name, status, and code system identity. Scoped to field-level table references only — component-level tables tracked in #494. Also updates the preset to bundle all three annotators (fields + datatypes + fields-code-systems).
