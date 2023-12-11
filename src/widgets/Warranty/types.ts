type Title = {
  content: string;
  priority: number;
};

type Image = {
  description: string;
  source: string;
};

type WarrantyDetailsFromAPI = {
  name: string;
  title: Title;
  texts: string[];
  image: Image;
};

export type WarrantyProps = {
  className?: string;
  details: WarrantyDetailsFromAPI;
};
