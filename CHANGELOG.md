# @rethinkhealth/hl7v2

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
