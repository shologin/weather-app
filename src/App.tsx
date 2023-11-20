import { BadgePrimary } from "./components/BadgePrimary";
import { ForecastBadgesContainer } from "./components/ForecastBadgesContainer";
import { ForecastOptions } from "./components/ForecastOptions";
import { Search } from "./components/Search";

function App() {
  // mt-52
  return (
    <div className="app background flex flex-col justify-center items-center py-10 mt-10 mx-auto">
      <div className="flex-center gap-5">
        <BadgePrimary />
        <ForecastOptions />
      </div>
      {/* <Search /> */}
      <ForecastBadgesContainer />
    </div>
  );
}

export default App;
