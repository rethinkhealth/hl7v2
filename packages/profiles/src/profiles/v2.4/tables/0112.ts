// Generated table profile for 0112 (v2.4)

export const id = "0112";
export const description = "Discharge disposition";
export const type = "user";
export const codes = [
  {
    description: "Discharged to home or self care (routine discharge)",
    name: "01",
  },
  {
    description:
      "Discharged/transferred to another short term general hospital for inpatient care",
    name: "02",
  },
  {
    description: "Discharged/transferred to skilled nursing facility (SNF)",
    name: "03",
  },
  {
    description:
      "Discharged/transferred to an intermediate care facility (ICF)",
    name: "04",
  },
  {
    description:
      "Discharged/transferred to another type of institution for inpatient care or referred for outpatient services to another institution",
    name: "05",
  },
  {
    description:
      "Discharged/transferred to home under care of organized home health service organization",
    name: "06",
  },
  {
    description: "Left against medical advice or discontinued care",
    name: "07",
  },
  {
    description:
      "Discharged/transferred to home under care of Home IV provider",
    name: "08",
  },
  { description: "Admitted as an inpatient to this hospital", name: "09" },
  {
    description: "Discharge to be defined at state level, if necessary",
    name: "10 ...19",
  },
  { description: "Expired (i.e. dead)", name: "20" },
  {
    description: "Expired to be defined at state level, if necessary",
    name: "21 ... 29",
  },
  {
    description:
      "Still patient or expected to return for outpatient services (i.e. still a patient)",
    name: "30",
  },
  {
    description:
      "Still patient to be defined at state level, if necessary  (i.e. still a patient)",
    name: "31 ... 39",
  },
  { description: "Expired (i.e. died) at home", name: "40" },
  {
    description:
      "Expired (i.e. died) in a medical facility; e.g., hospital, SNF, ICF, or free standing hospice",
    name: "41",
  },
  { description: "Expired (i.e. died)  - place unknown", name: "42" },
] as const;
