import { useTranslations } from "@/i18n/utils";
import type { lang } from "@/types";
import type { Tags } from "@/types/Filters";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type TagsMapping = Tags | "painting";

export function mappingTags(tags: TagsMapping, lang: lang = "th") {
  const t = useTranslations(lang);

  switch (tags) {
    case "painting":
      return t("type.painting");
    case "interior_painting":
      return t("type.painting.interior");
    case "exterior_painting":
      return t("type.painting.exterior");
    case "epoxy_painting":
      return t("type.painting.epoxy");
    case "traffic_painting":
      return t("type.painting.traffic");
    case "wood_painting":
      return t("type.painting.wood");
    case "sign_painting":
      return t("type.painting.sign");
    case "steel_painting":
      return t("type.painting.steel");
    case "machinery_painting":
      return t("type.painting.machinery");
    case "design":
      return t("type.design");
    case "house":
      return t("location.home");
    case "factory":
      return t("location.factory");
    case "office":
      return t("location.office");
    case "all":
      return t("type.all");
    default:
      return tags;
  }
}
