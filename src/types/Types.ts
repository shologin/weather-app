// props types
export type badgePrimaryProps = {
  searchOpen: boolean;
  handleOpenSearch: () => void;
  locationState: LocationState;
  weatherState: WeatherState;
};

export type ForecastOptionsProps = {
  handleOpenForecast: () => void;
};

export type SearchProps = {
  locationState?: LocationState;
  setLocationState: Function;
  handleOpenForecast: () => void;
};

export type ForecastBadgesContainerProps = {
  weatherState: WeatherState;
};

export type BadgeSecondaryProps = {
  date: string;
  weatherState: WeatherState;
};

// API response types
export type geoApiResponse = {
  id: number;
  name: string;
  region: string;
  country: string;
  [key: string]: unknown;
};

export type CityAPIData = {
  id: number;
  name: string;
  region: string;
  country: string;
  [key: string]: unknown;
};

export type WeatherAPIResponse = {
  current: CurrentWeatherAPIResponse;
  forecast: { forecastday: ForecastFeatherAPIResponse[] };
  [key: string]: unknown;
};

export type CurrentWeatherAPIResponse = {
  condition: { code: number; icon: string; text: string };
  feelslike_c: number;
  feelslike_f: number;
  humidity: number;
  is_day: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  wind_kph: number;
  [key: string]: unknown;
};

export type ForecastFeatherAPIResponse = {
  date: string;
  day: {
    avgtemp_c: number;
    avgtemp_f: number;
    condition: { code: number; icon: string; text: string };
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    [key: string]: unknown;
  };
  hour: {
    condition: { code: number; icon: string; text: string };
    is_day: number;
    temp_c: number;
    temp_f: number;
    time: string;
    [key: string]: unknown;
  }[];
  [key: string]: unknown;
};

// state types
export type LocationState = {
  locationLoading: boolean;
  locationData: { id: number; city: string; region: string; country: string } | null;
  locationError: { errorText: string } | null;
};

export type WeatherState = {
  loading: boolean;
  data: WeatherAPIResponse | null;
  error: string | null;
};
