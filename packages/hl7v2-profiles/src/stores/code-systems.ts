import { utgCodeSystemImports } from "../profiles/utg/manifest.js";
import type { ProfileStoreConfig } from "../store.js";
import type {
  CodeSystemDefinition,
  UtgCodeEntry,
  UtgCodeSystemModule,
} from "./types.js";

/** Compile raw UTG code system module into indexed definition. */
const compileCodeSystem = (raw: UtgCodeSystemModule): CodeSystemDefinition => {
  const codes = new Map<string, UtgCodeEntry>();

  for (const code of raw.codes) {
    codes.set(code.code, code);
  }

  const result: CodeSystemDefinition = {
    id: raw.id,
    url: raw.url,
    name: raw.name,
    title: raw.title,
    codes,
  };

  if (raw.oid !== undefined) {
    return { ...result, oid: raw.oid };
  }

  return result;
};

/** Store configuration for UTG code system profiles. */
export const codeSystemsConfig: ProfileStoreConfig<
  UtgCodeSystemModule,
  CodeSystemDefinition
> = {
  namespace: "codeSystems",
  manifest: utgCodeSystemImports,
  compile: compileCodeSystem,
};
