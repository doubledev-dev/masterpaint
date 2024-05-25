export interface FilterData {
  title: string;
  options: FilterOptions[];
}

export interface FilterOptions {
  option: string;
  extends?: string[];
}
