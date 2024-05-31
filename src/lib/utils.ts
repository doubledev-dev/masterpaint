import { useTranslations } from "@/i18n/utils";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Tags =
  | "exterior_painting"
  | "interior_painting"
  | "epoxy_painting"
  | "traffic_painting"
  | "wood_painting"
  | "sign_painting"
  | "steel_painting"
  | "machinery_painting"
  | "design"
  | "house"
  | "factory"
  | "office";

export function mappingTags(tags: Tags, lang: "en" | "th" = "th") {
  const t = useTranslations(lang);

  switch (tags) {
    case "exterior_painting":
      return t("type.painting.exterior");
    case "interior_painting":
      return t("type.painting.interior");
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
    default:
      return "ทั้งหมด";
  }
}
