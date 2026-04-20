---
"@glion/hl7v2": patch
"@glion/ast": patch
"@glion/parser": patch
"@glion/builder": patch
"@glion/jsonify": patch
"@glion/to-hl7v2": patch
"@glion/ack": patch
"@glion/mllp": patch
"@glion/mllp-ack": patch
"@glion/decode-escapes": patch
"@glion/encode-escapes": patch
"@glion/annotate-delimiters": patch
"@glion/annotate-profile-context": patch
"@glion/annotate-profile-datatypes": patch
"@glion/annotate-profile-fields": patch
"@glion/annotate-profile-fields-code-systems": patch
"@glion/annotate-profile-segments": patch
"@glion/config": patch
"@glion/lint-max-message-size": patch
"@glion/lint-message-version": patch
"@glion/lint-no-trailing-empty-field": patch
"@glion/lint-profile-events-segments-order": patch
"@glion/lint-profile-extra-components": patch
"@glion/lint-profile-extra-fields": patch
"@glion/lint-profile-field-max-length": patch
"@glion/lint-profile-field-repetition": patch
"@glion/lint-profile-required-components": patch
"@glion/lint-profile-required-fields": patch
"@glion/lint-profile-table-values": patch
"@glion/lint-required-message-header": patch
"@glion/lint-segment-header-length": patch
"@glion/preset-annotate-profile-recommended": patch
"@glion/preset-lint-profile-recommended": patch
"@glion/preset-lint-recommended": patch
"@glion/profiles": patch
"@glion/util-query": patch
"@glion/util-semver": patch
"@glion/util-timestamp": patch
"@glion/util-visit": patch
"@glion/utils": patch
"@glion/cli": patch
---

Rename ecosystem from `@rethinkhealth/hl7v2-*` to `@glion/*`. Drop `hl7v2-` prefix from package names (except `@glion/hl7v2`). The `@rethinkhealth/hl7v2-cli` package is removed; its functionality may return as subcommands of `glion` CLI in a future release. Old `@rethinkhealth/*` packages are deprecated with pointers to the new names. No runtime or API changes.
