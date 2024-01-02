type Link = {
  content: string;
  type: string;
  url: string;
};

type Title = {
  content: string;
  priority: number;
};

type Column = {
  links: Link[];
  title: Title;
};

type Dev = {
  type: string;
  url: string;
};

type FooterDetailsFromAPI = {
  columns: Column[];
  developer: Dev;
  texts: string[];
};

export type FooterProps = {
  className?: string;
  details: FooterDetailsFromAPI;
};
