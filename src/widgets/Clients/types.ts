import { ClientsDetailsFromAPI } from 'shared/hooks/types';

export type ClientsProps = {
  className?: string;
  details: ClientsDetailsFromAPI;
  theme: string;
};
