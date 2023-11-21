import { useState } from "react";
import { BadgePrimary } from "./components/BadgePrimary";
import { ForecastBadgesContainer } from "./components/ForecastBadgesContainer";
import { ForecastOptions } from "./components/ForecastOptions";
import { Search } from "./components/Search";
// mt-52

function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [forecastOpen, setForecastOpen] = useState(true);

  const handleOpenSearch = () => {
    setForecastOpen(false);
    setSearchOpen(true);
  };

  const handleOpenForecast = () => {
    setSearchOpen(false);
    setForecastOpen(true);
  };

  return (
    <div className="app background flex flex-col justify-center items-center py-10 mt-10 mx-auto">
      <div className="flex-center gap-5">
        <BadgePrimary searchOpen={searchOpen} handleOpenSearch={handleOpenSearch} />
        <ForecastOptions handleOpenForecast={handleOpenForecast} />
      </div>
      {searchOpen && !forecastOpen && <Search />}
      {forecastOpen && !searchOpen && <ForecastBadgesContainer />}
    </div>
  );
}

export default App;
