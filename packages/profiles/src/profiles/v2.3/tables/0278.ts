// Generated table profile for 0278 (v2.3)

export const id = "0278";
export const description = "Filler Status Codes";
export const type = "user";
export const codes = [
  {
    description: "The indicated time slot(s) is(are) blocked.",
    name: "BLOCKED",
  },
  { description: "The indicated appointment is booked", name: "BOOKED" },
  {
    description:
      "The indicated appointment was stopped from occurring (cancelled prior to starting)",
    name: "CANCELLED",
  },
  {
    description:
      "The indicated appointment has completed normally (was not discontinued, canceled, or deleted)",
    name: "COMPLETE",
  },
  {
    description:
      "The indicated appointment was discontinued (DC’ed while in progress, discontinued parent appointment, or discontinued child appointment)",
    name: "DC",
  },
  {
    description:
      "The indicated appointment was deleted from the filler application",
    name: "DELETED",
  },
  {
    description:
      "The appointment has been confirmed; however it is confirmed in an overbooked state",
    name: "OVERBOOK",
  },
  { description: "Appointment has not yet been confirmed", name: "PENDING" },
  {
    description:
      "The indicated appointment has begun and is currently in progress",
    name: "STARTED",
  },
  {
    description:
      "Appointment has been placed on a waiting list for a paricular slot, or set of slots",
    name: "WAITLIST",
  },
] as const;
