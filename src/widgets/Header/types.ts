type Lang = {
  key: string;
  name: string;
};

type NavItem = {
  content: string;
  target: string;
  type: string;
};

type HeaderDetailsFromApi = {
  langs: Lang[];
  nav: NavItem[];
};

type ThemeState = {
  theme: string;
  toggleTheme: () => void;
};

type LangState = {
  lang: string;
  setLang: (lang: string) => void;
};

export type HeaderProps = {
  className?: string;
  details: HeaderDetailsFromApi;
  langState: LangState;
  themeState: ThemeState;
};
