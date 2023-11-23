import { FlipcardProps } from "../../types/Types";

export const FlipcardHourly = ({ children, currentHour }: FlipcardProps) => {
  return (
    <div className="flipcard group w-full h-full [perspective:1000px]">
      <div className="relative h-full w-full transition-all duration-500 rounded-xl shadow-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* front */}
        <div className="absolute inset-0 flex-center flex-col gap-1 px-2">{children}</div>
        {/* back */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-slate-700 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="content p-2 text-xs text-left">
            <p className="mb-1">{currentHour?.condition.text}</p>
            <div className="flex justify-between">
              <span>Temp.</span>
              <span>{currentHour?.temp_c}&deg;C</span>
            </div>
            <div className="flex justify-between">
              <span>Humidity</span>
              <span>{currentHour?.humidity}%</span>
            </div>
            <div className="flex justify-between">
              <span>Wind kph</span>
              <span>{currentHour?.wind_kph}</span>
            </div>
            <div className="flex justify-between">
              <span>Chance of rain</span>
              <span>{currentHour?.chance_of_rain}%</span>
            </div>
            <div className="flex justify-between">
              <span>Snow of snow</span>
              <span>{currentHour?.chance_of_snow}%</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
