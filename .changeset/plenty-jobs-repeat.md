---
"@rethinkhealth/hl7v2": patch
---

Update `tsup` configuration and bundling options. The bundle now includes the `hl7v2` schema for `2.8` and `2.5.1`. You can now import the schema directly from the package:

```ts
import { v2_8 } from '@rethinkhealth/hl7v2/schema'

const siu_s12_schema = v2_8.SIU_S12

// ... can be  used to validate a message using json-schema
```
