/****************************************
  Common Types
****************************************/

export type Title = {
  content: string;
  priority: number;
};

export type Image = {
  description: string;
  source: string;
};

/****************************************
  LangState
****************************************/

export type DataFromAPI = {
  header: HeaderDetailsFromAPI;
  download: DownloadDetailsFromAPI;
  warranty: WarrantyDetailsFromAPI;
  care: CareDetailsFromAPI;
  cashback: CashbackDetailsFromAPI;
  clients: ClientsDetailsFromAPI;
  footer: FooterDetailsFromAPI;
};

export type DataState = {
  data: null | DataFromAPI;
  getData: (lang: string) => void;
};

export type LangState = {
  lang: string;
  setLang: (lang: string) => void;
};

export type DataStateCreator = (set: Function) => DataState;

/****************************************
  HeaderState
****************************************/

export type Lang = {
  key: string;
  name: string;
};

export type NavItem = {
  type: string;
  content: string;
  target: string;
};

export type HeaderDetailsFromAPI = {
  langs: Lang[];
  nav: NavItem[];
};

export type ThemeState = {
  theme: string;
  toggleTheme: () => void;
};

/****************************************
  DownloadState
****************************************/

export type LinkDetails = {
  type: 'apple' | 'google' | string;
  url: string;
  icon: string;
};

export type LinksDetails = {
  apple: LinkDetails;
  google: LinkDetails;
};

export type DownloadDetailsFromAPI = {
  name: 'download' | string;
  title: Title;
  texts: string[];
  links: LinksDetails;
  image: Image;
};

/****************************************
  WarrantyState
****************************************/

export type WarrantyDetailsFromAPI = {
  name: 'warranty';
  title: Title;
  texts: string[];
  image: Image;
};

/****************************************
  CareState
****************************************/

export type CareDetailsFromAPI = {
  name: 'care' | string;
  title: Title;
  texts: string[];
  image: Image;
};

/****************************************
  CashbackState
****************************************/

export type CashbackDetailsFromAPI = {
  name: 'cashback' | string;
  title: Title;
  texts: string[];
  buttonText: string;
};

/****************************************
  ClientsState
****************************************/

export type BrandDetails = {
  description: string;
  source: string;
};

export type ThemeBrands = {
  dark: BrandDetails[];
  light: BrandDetails[];
};

export type ClientsDetailsFromAPI = {
  name: 'clients' | string;
  title: Title;
  brands: ThemeBrands;
};

/****************************************
  FooterState
****************************************/

export type Link = {
  type: string;
  url: string;
  content: string;
};

export type Column = {
  title: Title;
  links: Link[];
};

export type Dev = {
  type: string;
  url: string;
};

export type FooterDetailsFromAPI = {
  columns: Column[];
  texts: string[];
  developer: Dev;
};

/***************************************/
