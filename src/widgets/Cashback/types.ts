import {CashbackDetailsFromAPI} from 'shared/hooks/types';

export type CashbackProps = {
  className?: string;
  details: CashbackDetailsFromAPI;
  theme: string;
};
