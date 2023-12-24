type Title = {
  content: string;
  priority: number;
};

type Image = {
  description: string;
  source: string;
};

type CareDetailsFromAPI = {
  name: string;
  title: Title;
  texts: string[];
  image: Image;
};

export type CareProps = {
  className?: string;
  details: CareDetailsFromAPI;
};
