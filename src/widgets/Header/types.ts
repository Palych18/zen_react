import { HeaderDetailsFromAPI, LangState, ThemeState } from 'shared/hooks/types';

export type HeaderProps = {
  className?: string;
  details: HeaderDetailsFromAPI;
  langState: LangState;
  themeState: ThemeState;
};
