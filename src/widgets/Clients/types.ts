type BrandDetails = {
  description: string;
  source: string;
};

type ThemeBrands = {
  dark: BrandDetails[];
  light: BrandDetails[];
};

type Title = {
  content: string;
  priority: number;
};

type ClientsDetails = {
  brands: ThemeBrands;
  title: Title;
  name: string;
};

export type ClientsProps = {
  className?: string,
  details: ClientsDetails;
  theme: string;
};
