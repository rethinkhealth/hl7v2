---
"@glion/lint-profile-extra-fields": patch
---

Report a segment with too many fields once, as one sentence, with the number of fields in `actual`:

- ``Segment `MSH` has 22 fields; it allows at most 21 fields.``

It used to report each extra field, such as `Field MSH-22 is beyond the defined fields for MSH (max: 21 in v2.5)`. The rule has a `url` to its README in this repository.
