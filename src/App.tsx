import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { LocationState, WeatherState } from "./types/Types";
import { BadgePrimary } from "./components/BadgePrimary";
import { ForecastBadgesContainer } from "./components/ForecastBadgesContainer";
import { ForecastOptions } from "./components/ForecastOptions";
import { Search } from "./components/Search";
import { getWeather } from "./functions/getWeather";

function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [forecastOpen, setForecastOpen] = useState(true);
  const [forecastOption, setForecastOption] = useState("3d");

  const [locationState, setLocationState] = useState<LocationState>({
    locationLoading: false,
    locationData: JSON.parse(localStorage.getItem("preferredCity")!) || {
      id: 2801268,
      city: "London",
      region: "City of London, Greater London",
      country: "United Kingdom",
    },
    locationError: null,
  });

  const [weatherState, setWeatherState] = useState<WeatherState>({
    loading: true,
    data: null,
    error: null,
  });

  const handleOpenSearch = () => {
    setForecastOpen(false);
    setSearchOpen(true);
  };

  const handleOpenForecast = (val: string = "3d") => {
    setSearchOpen(false);
    setForecastOpen(true);
    setForecastOption(val);
  };

  useEffect(() => {
    getWeather(locationState, setWeatherState);
  }, [locationState]);  

  return (
    <div className="app background flex flex-col justify-center items-center py-10 my-5 xs:my-20 mx-auto rounded-md">
      <Toaster />
      <div className="flex-center flex-col gap-5 xs:flex-row">
        <BadgePrimary
          searchOpen={searchOpen}
          handleOpenSearch={handleOpenSearch}
          locationState={locationState}
          weatherState={weatherState}
        />
        <ForecastOptions handleOpenForecast={handleOpenForecast} forecastOption={forecastOption} />
      </div>
      {searchOpen && !forecastOpen && (
        <Search locationState={locationState} setLocationState={setLocationState} handleOpenForecast={handleOpenForecast} />
      )}
      {forecastOpen && !searchOpen && <ForecastBadgesContainer weatherState={weatherState} forecastOption={forecastOption} />}
      <div className="hidden xs:block absolute bottom-1 right-2">
        <p className="text-xs">v1.5</p>
      </div>
    </div>
  );
}

export default App;