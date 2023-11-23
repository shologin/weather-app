import { BadgeSecondaryProps } from "../types/Types";

export const BadgeSecondary = ({ date, weatherState }: BadgeSecondaryProps) => {
  const formatDate = (val: string) => {
    const arr = val.split("-");
    return `${arr[2]}.${arr[1]}`;
  };

  const findDate = (date: string) => {
    if (!weatherState.data) {
      throw new Error("Cannot get forecast data");
    }
    const index = weatherState.data?.forecast.forecastday.filter((el) => el.date === date);
    return index[0];
  };

  const checkIsToday = (date: string) => {
    if (date == weatherState.data?.forecast.forecastday[0].date) return true;
    else return false;
  };

  const isToday = checkIsToday(date!);
  const formattedData = formatDate(date!);
  const currentDate = findDate(date!);
  

  return (
    <div className="badge-secondary glass-effect flex-center flex-col gap-1 w-[140px] border-[1px] border-slate-500 border-opacity-50 rounded-lg p-2 min-w-fit text-sm text-autumn">
      {isToday ? (
        <div className="glass-effect text-center w-full">Today</div>
      ) : (
        <div className="badgeSecondary-date">{formattedData}</div>
      )}
      <div className="badgeSecondary-icon">
        <img src={currentDate.day.condition.icon} alt="icon" width="48px" />
      </div>
      <div className="text-xs max-w-[120px]">{currentDate.day.condition.text}</div>
      <h3 className="text-xl">{currentDate.day.avgtemp_c.toFixed(0)}&deg;C</h3>
    </div>
  );
};
