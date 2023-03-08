# @rethinkhealth/hl7v2

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
