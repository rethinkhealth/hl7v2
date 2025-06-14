---
"@rethinkhealth/hl7v2": minor
---

Moving to a new HL7v2 architecture

**Minor Changes**:
   - The core message handling has been restructured with a new `HL7v2Message` class that provides a more robust way to handle HL7v2 messages
   - The new architecture includes better support for message parsing and validation
   - Messages now maintain their raw content and provide structured access to segments

These changes represent a significant architectural shift that improves the library's capabilities but may require updates to existing code that uses the library.

Users of the library should review their code for:
1. Message parsing and validation logic
2. Segment access patterns
3. Version-specific handling
4. Schema validation usage
5. Custom delimiter configurations