---
"@rethinkhealth/hl7v2-profiles": patch
"@rethinkhealth/hl7v2": patch
"@rethinkhealth/hl7v2-parser": patch
"@rethinkhealth/hl7v2-builder": patch
"@rethinkhealth/hl7v2-config": patch
"@rethinkhealth/hl7v2-jsonify": patch
"@rethinkhealth/hl7v2-to-hl7v2": patch
"@rethinkhealth/hl7v2-mllp": patch
"@rethinkhealth/hl7v2-mllp-ack": patch
"@rethinkhealth/hl7v2-ack": patch
"@rethinkhealth/hl7v2-cli": patch
"@rethinkhealth/hl7v2-decode-escapes": patch
"@rethinkhealth/hl7v2-encode-escapes": patch
"@rethinkhealth/hl7v2-utils": patch
"@rethinkhealth/hl7v2-util-query": patch
"@rethinkhealth/hl7v2-util-visit": patch
"@rethinkhealth/hl7v2-util-semver": patch
"@rethinkhealth/hl7v2-util-timestamp": patch
"@rethinkhealth/hl7v2-annotate-profile-context": patch
"@rethinkhealth/hl7v2-annotate-profile-fields": patch
"@rethinkhealth/hl7v2-annotate-profile-fields-code-systems": patch
"@rethinkhealth/hl7v2-annotate-profile-datatypes": patch
"@rethinkhealth/hl7v2-lint-max-message-size": patch
"@rethinkhealth/hl7v2-lint-message-version": patch
"@rethinkhealth/hl7v2-lint-no-trailing-empty-field": patch
"@rethinkhealth/hl7v2-lint-required-message-header": patch
"@rethinkhealth/hl7v2-lint-segment-header-length": patch
"@rethinkhealth/hl7v2-lint-profile-events-segments-order": patch
"@rethinkhealth/hl7v2-lint-profile-extra-components": patch
"@rethinkhealth/hl7v2-lint-profile-extra-fields": patch
"@rethinkhealth/hl7v2-lint-profile-field-max-length": patch
"@rethinkhealth/hl7v2-lint-profile-field-repetition": patch
"@rethinkhealth/hl7v2-lint-profile-required-components": patch
"@rethinkhealth/hl7v2-lint-profile-required-fields": patch
"@rethinkhealth/hl7v2-lint-profile-table-values": patch
"@rethinkhealth/hl7v2-preset-lint-recommended": patch
"@rethinkhealth/hl7v2-preset-lint-profile-recommended": patch
"@rethinkhealth/hl7v2-preset-annotate-profile-recommended": patch
---

Migrate build toolchain from tsup to tsdown

- Switched JS bundler from tsup (esbuild) to tsdown (Rolldown) across all packages
- `hl7v2-profiles` now uses Rolldown's `codeSplitting` to merge ~10,800 tiny chunks into ~170 larger ones, significantly improving install and build performance
- No public API changes — this is a build internals change only
