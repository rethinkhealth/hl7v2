// Generated table profile for 0278 (v2.7.1)

export const id = "0278";
export const description = "Filler status codes";
export const type = "user";
export const codes = [
  {
    description: "The indicated time slot(s) is(are) blocked",
    name: "Blocked",
  },
  { description: "The indicated appointment is booked", name: "Booked" },
  {
    description:
      "The indicated appointment was stopped from occurring (canceled prior to starting)",
    name: "Cancelled",
  },
  {
    description:
      "The indicated appointment has completed normally (was not discontinued, canceled, or deleted)",
    name: "Complete",
  },
  {
    description:
      "The indicated appointment was discontinued (DC'ed while in progress, discontinued parent appointment, or discontinued child appointment)",
    name: "Dc",
  },
  {
    description:
      "The indicated appointment was deleted from the filler application",
    name: "Deleted",
  },
  {
    description: "The patient did not show up for the appointment",
    name: "Noshow",
  },
  {
    description:
      "The appointment has been confirmed; however it is confirmed in an overbooked state",
    name: "Overbook",
  },
  { description: "Appointment has not yet been confirmed", name: "Pending" },
  {
    description:
      "The indicated appointment has begun and is currently in progress",
    name: "Started",
  },
  {
    description:
      "Appointment has been placed on a waiting list for a particular slot, or set of slots",
    name: "Waitlist",
  },
] as const;
