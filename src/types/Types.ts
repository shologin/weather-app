// props types
export type badgePrimaryProps = {
  searchOpen: boolean;
  handleOpenSearch: () => void;
  locationState: LocationState;
  weatherState: WeatherState;
};

export type ForecastOptionsProps = {
  handleOpenForecast: (val?: string) => void;
  forecastOption: string;
};

export type SearchProps = {
  locationState?: LocationState;
  setLocationState: Function;
  handleOpenForecast: () => void;
};

export type ForecastBadgesContainerProps = {
  weatherState: WeatherState;
  forecastOption: string;
};

export type BadgeSecondaryProps = {
  date?: string;
  weatherState: WeatherState;
  hour?: string;
};

export type FlipcardProps = {
  children: React.ReactNode;
  currentDate?: ForecastFeatherAPIResponse;
  currentHour?: ForecastHourlyAPIResponse;
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
  date?: string;
  day: {
    avgtemp_c: number;
    avgtemp_f: number;
    condition: { code: number; icon: string; text: string };
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avghumidity: number;
    maxwind_kph: number;
    daily_chance_of_rain: number;
    daily_chance_of_snow: number;
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

export type ForecastHourlyAPIResponse = {
  condition: { code: number; icon: string; text: string };
  is_day: number;
  temp_c: number;
  temp_f: number;
  time: string;
  chance_of_rain?: number;
  chance_of_snow?: number;
  humidity?: number;
  wind_kph?: number;
  feelslike_c?: number;
  feelslike_f?: number;
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
