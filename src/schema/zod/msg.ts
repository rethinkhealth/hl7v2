import { z } from "zod";

export const msgSchema = z.object({
  "1": z.string(),
  "2": z.string(),
  "3": z.string().optional(),
});
