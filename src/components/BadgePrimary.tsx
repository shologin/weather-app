import classNames from "classnames";
import { badgePrimaryProps } from "../types/Types";
import rain_strong_2x from "../assets/icons/rain_strong_2x.png";
import { FiMapPin } from "react-icons/fi";
import { Puff } from "react-loader-spinner";

export const BadgePrimary = ({ handleOpenSearch, searchOpen, locationState }: badgePrimaryProps) => {
  return (
    <div className="badge-primary py-2 px-5 glass-effect text-slate-400">
      <div className="badgePrimary-top flex items-center gap-5">
        <div className="badgePrimary-top-temperature">
          <h3 className="text-4xl">
            4 <span className="text-secondary">&deg;C</span>
          </h3>
          <p className="text-lg">Rainy</p>
        </div>
        <div className="badgePrimary-top-icon">
          <img src={rain_strong_2x} alt="icon" width="96px" />
        </div>
      </div>
      <div className="flex items-center justify-between text-slate-400">
        <div className="text-xl">
          {locationState.locationData?.city} <span className="block text-sm max-w-[200px] truncate">{locationState.locationData?.country}</span>
        </div>
        {!locationState.locationLoading ? (
          <button
            className={classNames(
              "inline-block",
              "text-slate-500",
              "ml-2",
              "p-2",
              "rounded-lg",
              "hover:bg-slate-400",
              "hover:text-slate-800",
              {
                "bg-slate-600": searchOpen,
                "text-slate-800": searchOpen,
              }
            )}
            onClick={handleOpenSearch}
          >
            <FiMapPin />
          </button>
        ) : (
          <Puff width={24} height={24} color="#16a34a" wrapperStyle={{ padding: "4px" }} />
        )}
      </div>
    </div>
  );
};
