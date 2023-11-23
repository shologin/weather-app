import { useState, useEffect } from "react";
import { LocationState, WeatherState } from "./types/Types";
import { BadgePrimary } from "./components/BadgePrimary";
import { ForecastBadgesContainer } from "./components/ForecastBadgesContainer";
import { ForecastOptions } from "./components/ForecastOptions";
import { Search } from "./components/Search";
import { getWeather } from "./functions/getWeather";
// mt-52

function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [forecastOpen, setForecastOpen] = useState(true);

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

  const handleOpenForecast = () => {
    setSearchOpen(false);
    setForecastOpen(true);
  };

  console.log(weatherState.data);
  useEffect(() => {
    getWeather(locationState, setWeatherState);
  }, [locationState]);

  // useEffect(() => {
  //   console.log(weatherState);
  // }, [weatherState]);
  return (
    <div className="app background flex flex-col justify-center items-center py-10 mt-10 mx-auto">
      <div className="flex-center gap-5">
        <BadgePrimary
          searchOpen={searchOpen}
          handleOpenSearch={handleOpenSearch}
          locationState={locationState}
          weatherState={weatherState}
        />
        <ForecastOptions handleOpenForecast={handleOpenForecast} />
      </div>
      {searchOpen && !forecastOpen && (
        <Search locationState={locationState} setLocationState={setLocationState} handleOpenForecast={handleOpenForecast} />
      )}
      {forecastOpen && !searchOpen && <ForecastBadgesContainer weatherState={weatherState} />}
    </div>
  );
}

export default App;

// fetch("http://api.weatherapi.com/v1/forecast.json?key=a6a87d8563134d0bace175318232111&days=3&q=id:2506755")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data));
