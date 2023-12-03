import classNames from "classnames";
import Popup from "reactjs-popup";
import { imagesProvider } from "../imagesProvider/imagesProvider";
import { badgePrimaryProps } from "../types/Types";
import { FiMapPin } from "react-icons/fi";
import { Puff, Radio } from "react-loader-spinner";

export const BadgePrimary = ({ handleOpenSearch, searchOpen, locationState, weatherState }: badgePrimaryProps) => {
  
  return (
    <div className="badge-primary py-2 px-2 xs:px-5 glass-effect text-slate-400">
      {weatherState.loading && <Radio width={65} height={65} colors={["#16a34a", "#14532d", "#052e16"]} />}
      {weatherState.data?.current && (
        <div className="badgePrimary-top flex items-center justify-between">
          <div className="badgePrimary-top-temperature">
            <h3 className="text-3xl xs:text-4xl">
              {weatherState.data.current.temp_c.toFixed(0)}
              <span className="text-secondary"> &deg;C</span>
            </h3>
            <p className="text-sm max-w-[150px]">{weatherState.data.current.condition.text}</p>
          </div>
          <div className="badgePrimary-top-icon">
            <img src={imagesProvider(weatherState.data.current.condition.icon)} alt="icon" width="80" className="p-1" />
          </div>
        </div>
      )}
      <div className="flex items-center justify-between text-slate-400">
        <Popup
          trigger={
            <div className="text-xl cursor-pointer">
              <div className="max-w-[200px] truncate">{locationState.locationData?.city}</div>
              <div className="text-sm max-w-[200px] truncate">{locationState.locationData?.country}</div>
            </div>
          }
          position="top center"
          on="hover"
          arrowStyle={{ color: "black" }}
        >
          <div className="p-2 rounded-lg bg-black text-gray-100 text-xs">
            <p className="font-bold">{locationState.locationData?.city}</p>
            <p className="italic text-gray-400">{locationState.locationData?.region}</p>
            <p className="text-gray-400">{locationState.locationData?.country}</p>
          </div>
        </Popup>
        {!locationState.locationLoading ? (
          <button
            className={classNames(
              "inline-block",
              "text-slate-500",
              "ml-2",
              "p-4",
              "xs:p-2",
              "rounded-lg",
              "hover:bg-slate-400",
              "hover:text-slate-800",
              "transition-all",
              "duration-200",
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
