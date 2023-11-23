import { BadgeSecondaryProps } from "../types/Types";

export const BadgeSecondaryHourly = ({ hour, weatherState }: BadgeSecondaryProps) => {
  const formatHour = (hour: string) => {
    return hour?.split(" ")[1];
  };

  const findCurrentHour = (hour: string) => {
    if (!weatherState.data) {
      throw new Error("Cannot get forecast data");
    }
    const index = weatherState.data?.forecast.forecastday[0].hour.filter((el) => el.time === hour);

    return index[0];
  };

  const checkIsNow = (hour: string) => {
    const today = new Date();
    const hoursNow = today.getHours().toString();
    const hourData = hour?.split(" ")[1].split(":")[0];

    if (hoursNow === hourData) return true;
    else return false;
  };

  const isNow = checkIsNow(hour!);
  const formattedHour = formatHour(hour!);
  const currentHour = findCurrentHour(hour!);
  

  return (
    <div className="badge-secondary glass-effect flex-center flex-col gap-1 w-[70px] border-[1px] border-slate-500 border-opacity-50 rounded-lg p-2 min-w-fit text-sm text-autumn">
      {isNow ? (
        <div className="glass-effect text-center w-full">Now</div>
      ) : (
        <div className="badgeSecondary-date">{formattedHour}</div>
      )}
      <div className="badgeSecondary-icon">
        <img src={currentHour.condition.icon} alt="icon" width="48px" />
      </div>
      <div className="text-xs max-w-[50px] truncate">{currentHour.condition.text}</div>
      <h3 className="text-xl">{currentHour.temp_c.toFixed(0)}&deg;C</h3>
    </div>
  );
};
