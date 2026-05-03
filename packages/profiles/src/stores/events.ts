import type { Definition } from "../automata/types.js";
import { eventMaps } from "../profiles/event-map-manifest.js";
import type { ProfileModule } from "../profiles/profile-manifest.js";
import { profileImports } from "../profiles/profile-manifest.js";
import type { ProfileStoreConfig } from "../store.js";

/** Store configuration for event (message structure) profiles. */
export const eventsConfig: ProfileStoreConfig<ProfileModule, Definition> = {
  compile: (raw) => raw as unknown as Definition,
  manifest: profileImports,
  namespace: "events",
  resolveId: (version, id) => eventMaps[version]?.[id],
};
