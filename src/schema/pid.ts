import { z } from "zod";

import { xpnSchema } from "./xpn";

export const pidSchema = z.object({
  "1": z.string(),
  "2": z.string().optional(),
  "3": z.array(z.any()).optional(),
  "4": z.string().optional(),
  "5": xpnSchema.optional(),
});
