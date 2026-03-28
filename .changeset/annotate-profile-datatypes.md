---
"@rethinkhealth/hl7v2-annotate-profile-datatypes": minor
"@rethinkhealth/hl7v2-preset-annotate-profile-recommended": minor
---

Add profile-based datatype annotation plugin with stop-at-primitive cascade. Annotation flows down the AST (FieldRepetition → Component → Subcomponent) and stops where the primitive value lives. Also adds preset bundling fields + datatypes annotators.
