// Generated table profile for 0124 (v2.5)

export const id = "0124";
export const description = "Transportation Mode";
export const type = "hl7";
export const codes = [
  { description: "Cart - patient travels on cart or gurney", name: "CART" },
  {
    description: "The examining device goes to patient's location",
    name: "PORT",
  },
  { description: "Patient walks to diagnostic service", name: "WALK" },
  { description: "Wheelchair", name: "WHLC" },
] as const;
