export interface FilterData {
  title: string;
  options: FilterOptions[];
}

export interface FilterOptions {
  option: string;
  extends?: string[];
}

export type Tags =
  | "All"
  | "interior_painting"
  | "exterior_painting"
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
