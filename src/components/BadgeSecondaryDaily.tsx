import { BadgeSecondaryProps } from "../types/Types";
import { FlipcardDaily } from "../helpers/FlipcardDaily";
import { imagesProvider } from "../imagesProvider/imagesProvider";

export const BadgeSecondaryDaily = ({ date, weatherState }: BadgeSecondaryProps) => {
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
  const formattedDate = formatDate(date!);
  const currentDate = findDate(date!);

  return (
    <div className="badge-secondary glass-effect flex-center flex-col gap-1 w-[140px] h-[145px] border-[1px] border-slate-500 border-opacity-50 rounded-lg min-w-fit text-sm text-autumn cursor-pointer">
      <FlipcardDaily currentDate={currentDate}>
        {isToday ? (
          <div className="glass-effect text-center w-full font-bold">Today</div>
        ) : (
          <div className="badgeSecondary-date font-bold">{formattedDate}</div>
        )}
        <div className="badgeSecondary-icon">
          <img src={imagesProvider(currentDate.day.condition.icon)} alt="icon" width="48px" />
        </div>
        <div className="text-xs max-w-[120px]">{currentDate.day.condition.text}</div>
        <h3 className="text-xl">{currentDate.day.avgtemp_c.toFixed(0)}&deg;C</h3>
      </FlipcardDaily>
    </div>
  );
};
