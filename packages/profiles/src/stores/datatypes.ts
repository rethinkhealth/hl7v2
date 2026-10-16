import { Optionality } from "@glion/utils";

import type { ProfileStore } from "../profiles";
import { memoize } from "../utils";
import { lazyImport } from "./utils";

/** Raw shape exported by generated datatype modules. */
export type DatatypeModule = Readonly<{
  id: string;
  version: string;
  kind: string;
  title?: string;
  components: readonly ComponentProfile[];
}>;

/** A component of a composite datatype, one row of its HL7v2 component table. */
export type ComponentProfile = Readonly<{
  sequence: number;
  name: string;
  /** Absent when the standard records none, as before v2.5. */
  optionality?: Optionality;
  /** Absent on a withdrawn component the standard gives no datatype. */
  datatypeId?: string;
  table?: string;
  maxLength?: number;
}>;

/**
 * Compiled datatype definition.
 * Returned by `profiles.datatypes.load()`.
 */
export type DatatypeDefinition = Readonly<{
  id: string;
  version: string;
  kind: string;
  title?: string;
  /** O(1) lookup of component profile by sequence number. */
  componentsBySequence: ReadonlyMap<number, ComponentProfile>;
  /** The sequences of the components whose optionality is `R`. */
  requiredSequences: ReadonlySet<number>;
}>;

const index = memoize((raw: DatatypeModule): DatatypeDefinition => {
  const componentsBySequence = new Map<number, ComponentProfile>();
  const requiredSequences = new Set<number>();

  for (const component of raw.components) {
    componentsBySequence.set(component.sequence, component);
    if (component.optionality === Optionality.Required) {
      requiredSequences.add(component.sequence);
    }
  }

  return {
    componentsBySequence,
    id: raw.id,
    kind: raw.kind,
    requiredSequences,
    title: raw.title,
    version: raw.version,
  };
});

/** The loader of datatype profiles. */
export const datatypes: ProfileStore<DatatypeDefinition> = {
  load: async (version, datatypeId) => {
    const raw = await lazyImport<DatatypeModule>(
      `../profiles/v${version}/datatypes/${datatypeId}.json`
    );
    return raw === undefined ? undefined : index(raw);
  },
};
