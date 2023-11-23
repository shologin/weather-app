import { ForecastOptionsProps } from "../types/Types";
import Popup from "reactjs-popup";
import classNames from "classnames";

export const ForecastOptions = ({ handleOpenForecast, forecastOption }: ForecastOptionsProps) => {
  return (
    <div className="forecast-options glass-effect flex flex-col p-2 text-sm font-bold text-slate-500">
      <Popup
        trigger={
          <button
            className={classNames("block", "px-2", "py-1", "rounded-lg", "hover:bg-slate-600", "hover:text-slate-800", {
              "bg-slate-700": forecastOption === "24h",
            })}
            onClick={() => handleOpenForecast("24h")}
          >
            24H
          </button>
        }
        position="top center"
        on="hover"
        arrowStyle={{ color: "black" }}
      >
        <div className="p-2 rounded-lg bg-black text-gray-100 text-xs">24 hours forecast</div>
      </Popup>

      <div className="separator h-[1px] w-3/4 rounded-full bg-slate-800 mx-auto my-[2px]"></div>

      <Popup
        trigger={
          <button
            className={classNames("block", "px-2", "py-1", "rounded-lg", "hover:bg-slate-600", "hover:text-slate-800", {
              "bg-slate-700": forecastOption === "3d",
            })}
            onClick={() => handleOpenForecast("3d")}
          >
            3D
          </button>
        }
        position="bottom center"
        on="hover"
        arrowStyle={{ color: "black" }}
      >
        <div className="p-2 rounded-lg bg-black text-gray-100 text-xs">3 days forecast</div>
      </Popup>
    </div>
  );
};
