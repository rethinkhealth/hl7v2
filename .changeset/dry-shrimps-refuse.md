---
"@rethinkhealth/hl7v2-parser": patch
---

Updates to the HL7v2 parser and tokenizer to improve how the MSH segment is tokenized and parsed, specifically separating the field delimiter (MSH.1) from the encoding characters (MSH.2). It also simplifies the tokenizer API and updates related tests for correctness.
