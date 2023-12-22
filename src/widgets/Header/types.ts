type Langs = {
  key: string;
  name: string;
};

type Nav = {
  content: string;
  target: string;
  type: string;
};

type HeaderDetailsFromApi = {
  langs: Langs[];
  nav: Nav[];
};

type ThemeDetails = {
  theme: string;
  setTheme: (theme: string) => void;
};

type LangsDetails = {
  langs: string;
  setLangs: (langs: string) => void;
};

export type HeaderProps = {
  className?: string;
  details: HeaderDetailsFromApi;
  langsDetails: LangsDetails;
  themeDetails: ThemeDetails;
};
