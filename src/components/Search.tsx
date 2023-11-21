import { useState } from "react";
import classNames from "classnames";
import { CityAPIData, SearchProps } from "../types/Types";
import { FiGlobe } from "react-icons/fi";
import { IoMdLocate } from "react-icons/io";
import { findLocation } from "../functions/findLocation";

export const Search = ({ locationState, setLocationState, handleOpenForecast }: SearchProps) => {
  const [resultsOpen, setResultsOpen] = useState(false);
  const [filteredData, setFilteredData] = useState<CityAPIData[]>([]);

  // on search typing
  const handleChange = (input: string) => {
    if (!resultsOpen) setResultsOpen(true);
    const formattedURL = `http://api.weatherapi.com/v1/search.json?key=a6a87d8563134d0bace175318232111&q=${input}`;
    fetch(formattedURL)
      .then((res) => res.json())
      .then((data) => {
        setFilteredData(data);
      });
  };

  // user clicked on city in dropdown
  const handleChoice = (name: string, country: string) => {    
    setLocationState({
      locationLoading: false,
      locationData: { city: name, country: country},
      locationError: null,
    });
  };

  return (
    <div className="search mt-2 w-2/4 relative">
      <div
        className={classNames(
          "search-bar",
          "flex",
          "justify-between",
          "items-center",
          "bg-gray-500",
          "py-2",
          "px-4",
          "rounded-full",
          {
            "bg-gray-800": locationState?.locationLoading,
          }
        )}
      >
        <input
          type="text"
          placeholder={locationState?.locationLoading ? "Searching..." : "Enter location"}
          disabled={locationState?.locationLoading ? true : false}
          className="w-full bg-transparent focus:outline-none text-gray-100"
          maxLength={30}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={(e) =>
            setTimeout(() => {
              setResultsOpen(false);
              e.target.value = "";
            }, 100)
          }
          autoFocus
        />
        <FiGlobe style={{ marginLeft: "10px", width: "18px", height: "18px", color: "#f3f4f6" }} />
      </div>
      {resultsOpen && (
        <ul className="search-results mt-2 rounded-lg max-h-[200px] absolute top-full w-full overflow-y-auto">
          <li
            className="flex justify-between items-center text-gray-200 bg-gray-500 p-2 cursor-pointer hover:bg-gray-600"
            onClick={() => findLocation(setLocationState, handleOpenForecast)}
          >
            <span>Use my location</span>
            <IoMdLocate style={{ width: "22px", height: "22px", color: "#f3f4f6", marginRight: "5px" }} />
          </li>
          {filteredData.length > 0 &&
            filteredData.map((item) => (
              <li
                className="block bg-gray-300 p-2 cursor-pointer hover:bg-gray-400"
                key={item.id}
                onClick={() => handleChoice(item.name, item.country)}
              >
                {item.name}, {item.country}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
