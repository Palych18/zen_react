import { Dispatch, SetStateAction } from "react";

export type SetDataFromAPI = Dispatch<SetStateAction<DataFromAPI | null>>

/****************************************
  Common Types
****************************************/

type Title = {
  content: string;
  priority: number;
};

type Image = {
  description: string;
  source: string;
};

/****************************************
  HeaderDetailsFromAPI
****************************************/

type Lang = {
  key: string;
  name: string;
};

type NavItem = {
  type: string;
  content: string;
  target: string;
};

type HeaderDetailsFromAPI = {
  langs: Lang[];
  nav: NavItem[];
};

/****************************************
  DownloadDetailsFromAPI
****************************************/

type LinkDetails = {
  type: 'apple' | 'google' | string;
  url: string;
  icon: string;
};

type LinksDetails = {
  apple: LinkDetails;
  google: LinkDetails;
};

type DownloadDetailsFromAPI = {
  name: 'download';
  title: Title;
  texts: string[];
  links: LinksDetails;
  image: Image;
};

/****************************************
  WarrantyDetailsFromAPI
****************************************/

type WarrantyDetailsFromAPI = {
  name: 'warranty';
  title: Title;
  texts: string[];
  image: Image;
};

/****************************************
  CareDetailsFromAPI
****************************************/

type CareDetailsFromAPI = {
  name: 'care';
  title: Title;
  texts: string[];
  image: Image;
};

/****************************************
  CashbackDetailsFromAPI
****************************************/

type CashbackDetailsFromAPI = {
  name: 'cashback';
  title: Title;
  texts: string[];
  buttonText: string;
};

/****************************************
  ClientsDetailsFromAPI
****************************************/

type BrandDetails = {
  description: string;
  source: string;
};

type ThemeBrands = {
  dark: BrandDetails[];
  light: BrandDetails[];
};

type ClientsDetailsFromAPI = {
  name: 'clients';
  title: Title;
  brands: ThemeBrands;
};

/****************************************
  FooterDetailsFromAPI
****************************************/

type Link = {
  type: string;
  url: string;
  content: string;
};

type Column = {
  title: Title;
  links: Link[];
};

type Dev = {
  type: string;
  url: string;
};

type FooterDetailsFromAPI = {
  columns: Column[];
  texts: string[];
  developer: Dev;
};

/****************************************
  LangDataFromAPI
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

/***************************************/
