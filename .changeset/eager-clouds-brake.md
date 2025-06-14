---
"@rethinkhealth/hl7v2": patch
---

feat: Add HL7v2 message generator

Added a new `generate` method to the `HL7v2Client` class that converts JSON objects to HL7v2 messages. The generator:

- Supports custom delimiters through MSH.1 and MSH.2 fields
- Handles components and repeating fields
- Maintains field order and adds empty fields for missing positions
- Validates MSH segment structure and delimiter fields
- Preserves segment repetition

Example usage:

```typescript
const client = new HL7v2Client();
const json = {
  MSH: {
    "3": "HOSP",
    "4": "FAC",
    "9": { "1": "ADT", "2": "A01" },
  },
};
const message = client.generate(json);
// Result: MSH|^~\&|HOSP|FAC|||ADT^A01\r
```
