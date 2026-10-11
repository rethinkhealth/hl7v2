import { Optionality } from "@glion/utils";

import type { ProfileStore } from "../profiles";
import { memoize } from "../utils";
import { lazyImport } from "./utils";

/** Raw shape exported by generated field modules. */
export type FieldModule = Readonly<{
  segmentId: string;
  fields: readonly FieldProfile[];
}>;

/**
 * HL7v2 repetition of a field, the RP/# column of a segment attribute table:
 * the most occurrences the field may have, or `"unbounded"`.
 */
export type FieldRepetitions = number | "unbounded";

/** A field of a segment, one row of its HL7v2 segment attribute table. */
export type FieldProfile = Readonly<{
  sequence: number;
  id: string;
  /** Absent when the standard records no optionality for the field. */
  optionality?: Optionality;
  /** `1` when the field does not repeat. */
  repetitions: FieldRepetitions;
  /** Absent on a withdrawn field the standard gives no datatype. */
  datatype?: string;
  maxLength?: number;
  table?: string;
  name?: string;
  item?: string;
}>;

/**
 * Compiled field definition for a segment.
 * Returned by `profiles.fields.load()`.
 */
export type FieldDefinition = Readonly<{
  segmentId: string;
  /** O(1) lookup of field profile by sequence number. */
  bySequence: ReadonlyMap<number, FieldProfile>;
  /** The sequences of the fields whose optionality is `R`. */
  requiredSequences: ReadonlySet<number>;
  /** The sequences of the fields whose optionality is `B`. */
  backwardCompatibleSequences: ReadonlySet<number>;
  /** The sequences of the fields whose optionality is `W`. */
  withdrawnSequences: ReadonlySet<number>;
}>;

const index = memoize((raw: FieldModule): FieldDefinition => {
  const bySequence = new Map<number, (typeof raw.fields)[number]>();
  const requiredSequences = new Set<number>();
  const backwardCompatibleSequences = new Set<number>();
  const withdrawnSequences = new Set<number>();

  for (const field of raw.fields) {
    bySequence.set(field.sequence, field);
    switch (field.optionality) {
      case Optionality.Required: {
        requiredSequences.add(field.sequence);
        break;
      }
      case Optionality.BackwardCompatible: {
        backwardCompatibleSequences.add(field.sequence);
        break;
      }
      case Optionality.Withdrawn: {
        withdrawnSequences.add(field.sequence);
        break;
      }
      case Optionality.RequiredButMayBeEmpty:
      case Optionality.Optional:
      case Optionality.Conditional:
      case Optionality.NotUsed:
      case undefined: {
        break;
      }
    }
  }

  return {
    backwardCompatibleSequences,
    bySequence,
    requiredSequences,
    segmentId: raw.segmentId,
    withdrawnSequences,
  };
});

/** The loader of segment field profiles. */
export const fields: ProfileStore<FieldDefinition> = {
  load: async (version, segmentId) => {
    const raw = await lazyImport<FieldModule>(
      `../profiles/v${version}/fields/${segmentId}.json`
    );
    return raw === undefined ? undefined : index(raw);
  },
};
