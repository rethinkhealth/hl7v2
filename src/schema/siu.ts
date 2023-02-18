import { z } from "zod";

import { msgSchema } from "./msg";
import { pidSchema } from "./pid";

export const siuSchema = z.object({
  MSH: msgSchema.required(),
  PID: pidSchema.required(),
});
