export type geoApiResponse = {
  city: string;
  countryName: string;
  [key: string]: unknown;
};

export type badgePrimaryProps = {
  searchOpen: boolean;
  handleOpenSearch: () => void;
  locationState: LocationState;
};

export type ForecastOptionsProps = {
  handleOpenForecast: () => void;
};

export type LocationState = {
  locationLoading: boolean;
  locationData: { city: string; country: string } | null;
  locationError: { errorText: string } | null;
};

export type SearchProps = {
  locationState?: LocationState;
  setLocationState: Function;
  handleOpenForecast: () => void;
};

export type CityAPIData = {
  id: number;
  name: string;
  country: string
  [key: string]: unknown;
};
