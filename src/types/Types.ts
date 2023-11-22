export type geoApiResponse = {
  id: number
  name: string;
  region: string;
  country: string;
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
  locationData: { id: number, city: string; region: string; country: string } | null;
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
  region: string,
  country: string
  [key: string]: unknown;
};
