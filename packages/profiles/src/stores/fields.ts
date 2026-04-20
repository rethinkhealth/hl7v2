import { fieldImports } from "../profiles/field-manifest.js";
import type { ProfileStoreConfig } from "../store.js";
import type { FieldDefinition, FieldModule } from "./types.js";

/** Compile raw field module into indexed definition. */
const compileFields = (raw: FieldModule): FieldDefinition => {
  const bySequence = new Map<number, (typeof raw.fields)[number]>();
  const requiredSequences = new Set<number>();

  for (const field of raw.fields) {
    bySequence.set(field.sequence, field);
    if (field.required) {
      requiredSequences.add(field.sequence);
    }
  }

  return {
    segmentId: raw.segmentId,
    bySequence,
    requiredSequences,
  };
};

/** Store configuration for segment field profiles. */
export const fieldsConfig: ProfileStoreConfig<FieldModule, FieldDefinition> = {
  namespace: "fields",
  manifest: fieldImports,
  compile: compileFields,
};
