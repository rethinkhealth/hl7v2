---
"@glion/annotate-profile-fields-code-systems": patch
"@glion/lint-message-version": patch
"@glion/lint-required-message-header": patch
"@glion/lint-segment-header-length": patch
"@glion/lint-no-trailing-empty-field": patch
"@glion/lint-profile-backward-compatible": patch
"@glion/lint-profile-extra-components": patch
"@glion/lint-profile-extra-fields": patch
"@glion/lint-profile-field-max-length": patch
"@glion/lint-profile-field-repetition": patch
"@glion/lint-profile-required-components": patch
"@glion/lint-profile-required-fields": patch
"@glion/lint-profile-segment-order": patch
"@glion/lint-profile-table-values": patch
"@glion/lint-profile-timestamps": patch
"@glion/lint-profile-withdrawn": patch
---

Lint findings describe the node they are placed on, never name it, and never contain content from the message (ADR 0030). ``Field `PID-5` (Patient Name) is 300 characters long; it allows at most 250.`` is now `The value is 300 characters long; the field allows at most 250.` The finding's `place` and `ancestors` locate the node, and `actual` carries the content. Findings about a field, component, or segment the message does not contain still name it from the profile or event schema. The `ruleId` of every finding is unchanged; only the text changes.

- No value, part of a value, version, or Segment ID from the message appears in a finding's text: `lint-profile-withdrawn`, `lint-profile-backward-compatible`, `lint-profile-table-values`, `lint-profile-timestamps`, `lint-message-version`, `lint-required-message-header`, and `lint-segment-header-length` describe the content instead (`The day is past the end of its month; …`, `The Segment ID is 4 characters long; …`).
- `lint-profile-segment-order` reports every out-of-place segment with one message, whatever its Segment ID or segment group.
- `lint-no-trailing-empty-field` and `lint-required-message-header` report a segment with an empty Segment ID with the same message as any other.
- `lint-profile-field-max-length`, `lint-profile-field-repetition`, `lint-profile-extra-components`, `lint-profile-withdrawn`, and `lint-profile-backward-compatible` check an element whose data has no `id`, such as one a site's own annotator sets.
- `annotate-profile-fields-code-systems` reports a code system it cannot load in one sentence.
