export type geoApiResponse = {
  city: string;
  countryName: string;
  [key: string]: unknown;
};

export type badgePrimaryProps = {
  searchOpen: boolean
  handleOpenSearch: () => void;
};

export type ForecastOptionsProps = {
  handleOpenForecast: () => void;
};
