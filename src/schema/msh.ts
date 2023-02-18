import { z } from "zod";

import { msgSchema } from "./msg";

export const mshSchema = z.object({
  "1": z.string(),
  "2": z.string(),
  "3": z.string().optional(),
  "4": z.string().optional(),
  "5": z.string().optional(),
  "6": z.string().optional(),
  "7": z.string(),
  "8": z.string().optional(),
  "9": msgSchema,
  "10": z.string(),
  "11": z.string(),
  "12": z.string(),
  "13": z.coerce.number().optional(),
  "14": z.string().optional(),
  "15": z.string().optional(),
  "16": z.string().optional(),
  "17": z.string().optional(),
  "18": z.string().optional(),
  "19": z.string().optional(),
  "20": z.string().optional(),
  "21": z.string().optional(),
});
