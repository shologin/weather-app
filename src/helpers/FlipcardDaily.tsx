import { FlipcardProps } from "../types/Types";

export const FlipcardDaily = ({ children, currentDate }: FlipcardProps) => {
  return (
    <div className="flipcard group w-full h-full [perspective:1000px]">
      <div className="relative h-full w-full transition-all duration-500 rounded-xl shadow-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* front */}
        <div className="absolute inset-0 flex-center flex-col gap-1 px-2">{children}</div>
        {/* back */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-slate-700 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="content p-2 text-xs text-left">
            <p className="mb-1">{currentDate?.day.condition.text}</p>
            <div className="flex justify-between">
              <span>Min. temp.</span>
              <span>{currentDate?.day.mintemp_c}&deg;C</span>
            </div>
            <div className="flex justify-between">
              <span>Max. temp.</span>
              <span>{currentDate?.day.maxtemp_c}&deg;C</span>
            </div>
            <div className="flex justify-between">
              <span>Avg. humidity</span>
              <span>{currentDate?.day.avghumidity}%</span>
            </div>
            <div className="flex justify-between">
              <span>Max wind</span>
              <span>{currentDate?.day.maxwind_kph} kph</span>
            </div>
            <div className="flex justify-between">
              <span>Chance of rain</span>
              <span>{currentDate?.day.daily_chance_of_rain} %</span>
            </div>
            <div className="flex justify-between">
              <span>Chance of snow</span>
              <span>{currentDate?.day.daily_chance_of_snow} %</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
