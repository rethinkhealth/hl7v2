import { datatypeImports } from "../profiles/datatype-manifest.js";
import type { ProfileStoreConfig } from "../store.js";
import type {
  ComponentProfile,
  DatatypeDefinition,
  DatatypeModule,
} from "./types.js";

/** Compile raw datatype module into indexed definition. */
const compileDatatypes = (raw: DatatypeModule): DatatypeDefinition => {
  const componentsBySequence = new Map<number, ComponentProfile>();
  const requiredSequences = new Set<number>();

  for (const component of raw.components) {
    componentsBySequence.set(component.sequence, component);
    if (component.required) {
      requiredSequences.add(component.sequence);
    }
  }

  return {
    id: raw.id,
    version: raw.version,
    kind: raw.kind,
    title: raw.title,
    componentsBySequence,
    requiredSequences,
  };
};

/** Store configuration for datatype profiles. */
export const datatypesConfig: ProfileStoreConfig<
  DatatypeModule,
  DatatypeDefinition
> = {
  namespace: "datatypes",
  manifest: datatypeImports,
  compile: compileDatatypes,
};
