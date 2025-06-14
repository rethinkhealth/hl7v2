# @rethinkhealth/hl7v2

## 0.1.0

### Minor Changes

- e6958b9: Moving to a new HL7v2 architecture

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

### Patch Changes

- 968f574: feat: Add HL7v2 message generator

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

- a66b26d: Replaced the HL7v2Message class with the new HL7v2Client class, which provides a cleaner and more extensible API for parsing HL7v2 messages. This includes support for custom delimiters, detailed error handling, and stateless design.

## 0.0.14

### Patch Changes

- 109b466: Resolved a bug when a group has nested groups without an explicit segment.

## 0.0.13

### Patch Changes

- 219f7bf: This update includes fixing some issues with the JSON validation and additional schemas.
  - Schema updates
    - 2.6
    - 2.7
    - 2.7.1
    - 2.8.1
    - 2.8.2
  - Added support to JSON Schema validation. (WIP)

## 0.0.12

### Patch Changes

- 21537f0: This `patch` update includes the following changes
  - Added support to HL7v2 version `2.9`.
  - Updated the schema validator prototype. This is still work in progress.
  - Removed dependency on `Ajv` custom error printing.
  - Added more test coverage.

## 0.0.11

### Patch Changes

- 8693087: fixed an error with duplicate definitions in the schema of the HL7v2 messages.

## 0.0.10

### Patch Changes

- 7f05b54: Added support to Fields schema definition.
- b8c84d9: Added support to `chapter`. HL7v2 is organized into chapters, each of which covers a different aspect of the messaging standard. The chapters describe the various message types, the segments that make up those messages, and the data types used within those segments.
- f07876d: Added support to Message Structure standard table. This helps retrieving the appropriate schema for most messages using the mapping in the standard table. For instance, ADT A04 does not have a defined schema. However, it has the exact definition of ADT A01. That mapping is available through the [standard table](https://terminology.hl7.org/5.1.0/CodeSystem-v2-0354.json.html).

## 0.0.9

### Patch Changes

- 09b8339:
  - Adding Message Structure to the header.
  - Replaced the JSON Schema retrieval to use the Message Structure of the header segment.
- b2e36de: Added `metadata` to each segment in the definition of messages. Metadata includes information about `minOccurs`, `maxOccurs`, `repeatability`, and `optionality`.
- 073f588: Added compatibility with Z segment

## 0.0.8

### Patch Changes

- 8837127: We added browser compatiblity of the package. The package can now be used in the browser.

  ```js
  <script src="https://unpkg.com/@rethinkhealth/hl7v2"></script>
  <script>
    const hl7v2 = window.hl7v2;
    const message = hl7v2.parse('MSH|^~\&|...');

    console.log(message);
  </script>
  ```

## 0.0.7

### Patch Changes

- 4f6e561: Fixed `package.json` to include only `dist` folder in the npm published package.

## 0.0.6

### Patch Changes

- 04b6c9b: Update `tsup` configuration and bundling options. The bundle now includes the `hl7v2` schema for `2.8` and `2.5.1`. You can now import the schema directly from the package:

  ```ts
  import { v2_8 } from "@rethinkhealth/hl7v2/schema";

  const siu_s12_schema = v2_8.SIU_S12;

  // ... can be  used to validate a message using json-schema
  ```

## 0.0.5

### Patch Changes

- 88bde4a: Moved the schema to the root folder. This should enable importing `import * as v2.5  from "@rethinkhealth/hl7v2/schema/2.5"`

## 0.0.4

### Patch Changes

- 9897fac: Fix configuration of `package.json` to include `.d.ts` files.
- 19abe9d: Adding Github Releases and Tags.

## 0.0.3

### Patch Changes

- 2e23c99: - Decrease bundle size from ~12MB to ~3.2MB.
  - Minified Json schemas are now included in the package.
  - Moved `ajv` to a peer dependency.
  - Moved `better-ajv-errors` to a peer dependency.

## 0.0.2

### Patch Changes

- 3b42ba8: 🚀 Draft prototype of an HL7v2 message SDK.
