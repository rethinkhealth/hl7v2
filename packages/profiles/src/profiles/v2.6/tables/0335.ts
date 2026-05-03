// Generated table profile for 0335 (v2.6)

export const id = "0335";
export const description = "Repeat pattern";
export const type = "user";
export const codes = [
  { description: "Ante (before)", name: "A" },
  { description: "twice a day at institution-specified times", name: "BID" },
  {
    description:
      "service is provided continuously between start time and stop time",
    name: "C",
  },
  { description: "Cibus Diurnus (lunch)", name: "D" },
  { description: "Inter", name: "I" },
  { description: "Cibus Matutinus (breakfast)", name: "M" },
  { description: '<timing>C ("cum"")<meal>"', name: "Meal Related Timings" },
  { description: "one time only.", name: "Once" },
  { description: "Post (after)", name: "P" },
  { description: "given as needed", name: "PRN" },
  { description: "where xxx is some frequency code", name: "PRNxxx" },
  { description: "every <integer> days", name: "Q<integer>D" },
  { description: "every <integer> hours", name: "Q<integer>H" },
  {
    description: "repeats on a particular day of the week,",
    name: "Q<integer>J<day#>",
  },
  { description: "every <integer> months (Lunar cycle)", name: "Q<integer>L" },
  { description: "every <integer> minutes", name: "Q<integer>M" },
  { description: "every <integer> seconds", name: "Q<integer>S" },
  { description: "every <integer> weeks", name: "Q<integer>W" },
  { description: "in the morning at institution-specified time", name: "QAM" },
  { description: "every day before the hour of sleep", name: "QHS" },
  {
    description: "four times a day at institution-specified times",
    name: "QID",
  },
  { description: "every other day", name: "QOD" },
  { description: "in the evening at institution-specified time", name: "QPM" },
  {
    description:
      "during each of three eight-hour shifts at institution-specified times",
    name: "QSHIFT",
  },
  {
    description: "three times a day at institution-specified times",
    name: "TID",
  },
  {
    description:
      "for future use, where <spec> is an interval specification as defined by the UNIX cron specification.",
    name: "U <spec>",
  },
  { description: "Cibus Vespertinus (dinner)", name: "V" },
  { description: ' where X is a numeral 5 or greater."', name: "xID" },
] as const;
