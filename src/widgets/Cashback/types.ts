type Title = {
  content: string;
  priority: number;
};

type CashbackDetailsFromAPI = {
  name: string;
  title: Title;
  texts: string[];
  buttonText: string;
};

export type CashbackProps = {
  className?: string;
  details: CashbackDetailsFromAPI;
  theme: string;
};
