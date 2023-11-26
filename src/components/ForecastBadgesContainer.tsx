import { ForecastBadgesContainerProps } from "../types/Types";
import { BadgeSecondaryDaily } from "./BadgeSecondaryDaily";
import { BadgeSecondaryHourly } from "./BadgeSecondaryHourly";

export const ForecastBadgesContainer = ({ weatherState, forecastOption }: ForecastBadgesContainerProps) => {
  const date = new Date();
  const currentHour = date.getHours();
  const formattedHour = currentHour < 10 ? `0${currentHour}` : `${currentHour}`;  

  return (
    <>
      {!weatherState.loading && weatherState.data?.forecast && (
        <>
          {forecastOption === "3d" && (
            <ul className="forecast-badges-container border-[1px] rounded-3xl border-slate-800 flex xs:flex-row flex-col gap-2 w-fit max-w-[90%] mt-5 p-2 xs:overflow-x-auto xs:overflow-y-hidden overflow-y-auto">
              {weatherState.data.forecast.forecastday.map((item, index) => (
                <BadgeSecondaryDaily date={item.date} weatherState={weatherState} key={index} />
              ))}
            </ul>
          )}

          {forecastOption === "24h" && (
            <ul className="forecast-badges-container border-[1px] rounded-3xl border-slate-800 flex xs:flex-row flex-col gap-2 w-fit max-w-[90%] max-h-[600px] mt-5 p-2 xs:overflow-x-auto xs:overflow-y-hidden overflow-x-hidden overflow-y-auto">
              {weatherState.data.forecast.forecastday[0].hour
                .filter((el) => el.time.split(" ")[1].split(":")[0] >= formattedHour)
                .map((item, index) => (
                  <BadgeSecondaryHourly hour={item.time} weatherState={weatherState} key={index} />
                ))}
            </ul>
          )}
        </>
      )}
    </>
  );
};
