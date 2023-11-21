import { ForecastOptionsProps } from "../types/Types";

export const ForecastOptions = ({ handleOpenForecast }: ForecastOptionsProps) => {
  return (
    <div className="forecast-options glass-effect flex flex-col p-2 text-sm font-bold text-slate-500">
      <button className="block px-2 py-1 rounded-lg hover:bg-slate-600 hover:text-slate-800" onClick={() => handleOpenForecast()}>
        24H
      </button>
      <div className="separator h-[1px] w-3/4 rounded-full bg-slate-800 mx-auto my-[2px]"></div>
      <button className="block px-2 py-1 rounded-lg hover:bg-slate-600 hover:text-slate-800" onClick={() => handleOpenForecast()}>
        7D
      </button>
      <div className="separator h-[1px] w-3/4 rounded-full bg-slate-800 mx-auto my-[2px]"></div>
      <button className="block px-2 py-1 rounded-lg hover:bg-slate-600 hover:text-slate-800" onClick={() => handleOpenForecast()}>
        14D
      </button>
    </div>
  );
};
