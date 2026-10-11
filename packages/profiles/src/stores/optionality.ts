/**
 * HL7v2 optionality, the OPT column of a segment attribute table or a
 * component table: required, required but may be empty, optional,
 * conditional, not used, backward compatible, or withdrawn.
 */
export type Optionality = "R" | "RE" | "O" | "C" | "X" | "B" | "W";
