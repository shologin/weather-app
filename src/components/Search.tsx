import { useState } from "react";
import classNames from "classnames";
import { SearchProps, geoApiResponse } from "../types/Types";
import { FiGlobe } from "react-icons/fi";
import { IoMdLocate } from "react-icons/io";

const data = [
  { name: "San Francisco" },
  { name: "Los Angeles" },
  { name: "New York" },
  { name: "London" },
  { name: "Manchester" },
  { name: "Rio De Jeneiro" },
  { name: "Abs On Main On-The-Rampant-River" },
  { name: "Lisboan" },
];

export const Search = ({ locationState, setLocationState, handleOpenForecast }: SearchProps) => {
  const [resultsOpen, setResultsOpen] = useState(false);
  const [filteredData, setFilteredData] = useState<{ name: string }[]>([]);

  const handleChange = (input: string) => {
    if (!resultsOpen) setResultsOpen(true);
    setFilteredData(data.filter((el) => el.name.toLowerCase().includes(input)));
  };

  const handleChoice = (e: string) => {
    console.log(e);
  };

  const findLocation = () => {
    setLocationState({
      locationLoading: true,
      locationData: null,
      locationError: null,
    });
    const success = (position: GeolocationPosition) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`;

      try {
        fetch(geoApiUrl)
          .then((res) => {
            if (!res.ok || res.status !== 200) {
              throw new Error("Cannot get data from server");
            }
            return res.json();
          })
          .then((data: geoApiResponse) => {
            const locatedPlace = {
              city: data.city,
              country: data.countryName,
            };
            setLocationState({
              locationLoading: false,
              locationData: locatedPlace,
              locationError: null,
            });
            handleOpenForecast();
          });
      } catch (err) {
        console.log(err);
        setLocationState({
          locationLoading: false,
          locationData: null,
          locationError: "Oops...something went wrong",
        });
      }
    };
    const failure = (err: GeolocationPositionError) => {
      console.log(err);
      setLocationState({
        locationLoading: false,
        locationData: null,
        locationError: "Denied in location access",
      });
    };
    window.navigator.geolocation.getCurrentPosition(success, failure);
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
            onClick={findLocation}
          >
            <span>Use my location</span>
            <IoMdLocate style={{ width: "22px", height: "22px", color: "#f3f4f6", marginRight: "5px" }} />
          </li>
          {filteredData.map((item, index) => (
            <li
              className="block bg-gray-300 p-2 cursor-pointer hover:bg-gray-400"
              key={index}
              onClick={() => handleChoice(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
