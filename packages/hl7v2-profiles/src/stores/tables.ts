import { tableImports } from "../profiles/table-manifest.js";
import type { ProfileStoreConfig } from "../store.js";
import type { TableCodeEntry, TableDefinition, TableModule } from "./types.js";

/** Compile raw table module into indexed definition. */
const compileTables = (raw: TableModule): TableDefinition => {
  const codes = new Map<string, TableCodeEntry>();

  for (const code of raw.codes) {
    codes.set(code.name, code);
  }

  return {
    id: raw.id,
    description: raw.description,
    type: raw.type as "user" | "hl7",
    codes,
  };
};

/** Store configuration for table profiles. */
export const tablesConfig: ProfileStoreConfig<TableModule, TableDefinition> = {
  namespace: "tables",
  manifest: tableImports,
  compile: compileTables,
};
