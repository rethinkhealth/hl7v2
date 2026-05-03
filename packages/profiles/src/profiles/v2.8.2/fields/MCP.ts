// Generated segment profile for MCP (v2.8.2)

export const segmentId = "MCP";
export const fields = [
  {
    datatype: "SI",
    id: "MCP-1",
    item: "3468",
    maxLength: 4,
    name: "Set ID - MCP",
    repeatable: false,
    required: true,
    sequence: 1,
  },
  {
    datatype: "CWE",
    id: "MCP-2",
    item: "587",
    name: "Producer's Service/Test/Observation ID",
    repeatable: false,
    required: true,
    sequence: 2,
  },
  {
    datatype: "MO",
    id: "MCP-3",
    item: "3469",
    name: "Universal Service Price Range - Low Value",
    repeatable: false,
    required: false,
    sequence: 3,
  },
  {
    datatype: "MO",
    id: "MCP-4",
    item: "3470",
    name: "Universal Service Price Range - High Value",
    repeatable: false,
    required: false,
    sequence: 4,
  },
  {
    datatype: "ST",
    id: "MCP-5",
    item: "3471",
    name: "Reason for Universal Service Cost Range",
    repeatable: false,
    required: false,
    sequence: 5,
  },
] as const;
