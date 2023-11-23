import { ForecastBadgesContainerProps } from "../types/Types";
import { BadgeSecondary } from "./BadgeSecondary";

export const ForecastBadgesContainer = ({ weatherState }: ForecastBadgesContainerProps) => {
  return (
    <ul className="forecast-badges-container border-[1px] rounded-3xl border-slate-800 flex gap-2 w-fit max-w-[90%] mt-5 p-2 overflow-x-auto overflow-y-hidden">
      {!weatherState.loading &&
        weatherState.data?.forecast &&
        weatherState.data.forecast.forecastday.map((item, index) => (
          <BadgeSecondary date={item.date} weatherState={weatherState} key={index} />
        ))}
    </ul>
  );
};

// ;
