import type { FilterData } from "@/types/Filters";

export const FILTERTYPE: FilterData = {
  title: "TYPE",
  options: [
    {
      option: "All",
    },
    {
      option: "painting",
      extends: [
        "interior_painting",
        "exterior_painting",
        "epoxy_painting",
        "traffic_painting",
        "wood_painting",
        "sign_painting",
        "steel_painting",
        "machinery_painting",
      ],
    },
    {
      option: "design",
    },
  ],
};

export const FILTERLOCATION: FilterData = {
  title: "LOCATION",
  options: [
    {
      option: "All",
    },
    {
      option: "house",
    },
    {
      option: "factory",
    },
    {
      option: "office",
    },
  ],
};
