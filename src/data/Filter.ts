import type { FilterData } from "@/types/Filters";

export const FILTERTYPE: FilterData = {
  title: "Types",
  options: [
    {
      option: "All",
    },
    {
      option: "ทาสี",
      extends: [
        "สีภายใน",
        "สีภายนอก",
        "สีพื้นอีพ๊อกซี่งานตีเส้นพื้น",
        "สีจราจร",
        "สีงานไม้",
        "สีงานป้าย",
        "สีโครงเหล็ก",
        "สีเครื่องจักร",
      ],
    },
    {
      option: "งานออกแบบ",
    },
  ],
};

export const FILTERLOCATION: FilterData = {
  title: "Location",
  options: [
    {
      option: "All",
    },
    {
      option: "บ้าน",
    },
    {
      option: "โรงงาน",
    },
    {
      option: "อาคารสำนักงาน",
    },
  ],
};
