import { z } from "zod";

export const AssignmentAuthroriySchema = z.object({
  /**
   * The namespaceId of the authority.
   */
  namespaceId: z.string(),
  /**
   * The universalId of the authority.
   */
  universalId: z.string(),
  /**
   * The universalIdType of the authority.
   */
  universalIdType: z.string(),
});

export type AssignmentAuthroriy = z.infer<typeof AssignmentAuthroriySchema>;
