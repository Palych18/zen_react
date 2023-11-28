type Title = {
  content: string;
  priority: number;
};

type LinkDetails = {
  type: 'apple' | 'google' | string;
  url: string;
  icon: string;
};

type LinksDetails = {
  apple: LinkDetails;
  google: LinkDetails;
};

type Image = {
  description: string;
  source: string;
};

type DownloadDetailsFromAPI = {
  name: 'download';
  title: Title;
  texts: string[];
  links: LinksDetails;
  image: Image;
};

export type DownloadProps = {
  className?: string;
  details: DownloadDetailsFromAPI;
};
