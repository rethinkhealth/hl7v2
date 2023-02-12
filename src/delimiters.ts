import { z } from "zod";

export const DelimitersSchema = z.object({
  terminator: z.string(),
  fieldSeparator: z.string(),
  componentSeparator: z.string(),
  repeatSeparator: z.string(),
  escapeSeparator: z.string(),
  subComponentSeparator: z.string(),
});

export type IDelimiters = z.infer<typeof DelimitersSchema>;

export const DefaultDelimiters: IDelimiters = {
  terminator: "\n",
  fieldSeparator: String.fromCharCode(124), // |
  componentSeparator: String.fromCharCode(94), // ^
  repeatSeparator: String.fromCharCode(126), // ~
  escapeSeparator: String.fromCharCode(92), // \
  subComponentSeparator: String.fromCharCode(38), // &
};
