---
"@glion/annotate-profile-fields-code-systems": patch
"@glion/lint-message-version": patch
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
"@glion/lint-profile-withdrawn": patch
---

A lint finding describes the node it is placed on and no longer names it (ADR 0030): ``Field `PID-5` (Patient Name) is 300 characters long; it allows at most 250.`` is now `The value is 300 characters long; the field allows at most 250.` The finding's `place` and `ancestors` locate the node. Findings about a field, component, or segment the message does not contain still name it. The `ruleId` of every finding is unchanged; only the text changes.

- `lint-profile-segment-order` reports every out-of-place segment with one message, whatever its Segment ID or segment group; `actual` still carries the Segment ID.
- `lint-no-trailing-empty-field` reports a segment with an empty Segment ID with the same message as any other.
- `lint-profile-withdrawn` and `lint-profile-backward-compatible` quote the value they report.
- `lint-profile-table-values` reports ``The value `ZZZ` is not in table `HL70003` (Event type); the field requires a code from it.``
- An element whose profile gives it no name gets the same message as any other.
- `annotate-profile-fields-code-systems` reports a code system it cannot load in one sentence.
