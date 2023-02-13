import { z } from "zod";

export const ConformanceSchema = z.object({
  optionality: z.string(),
  cardinality: z.string(),
  length: z.string(),
  table: z.string(),
});

export type Conformance = z.infer<typeof ConformanceSchema>;
