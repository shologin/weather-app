import { useState } from "react";
import { FiGlobe } from "react-icons/fi";

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

export const Search = () => {
  const [resultsOpen, setResultsOpen] = useState(false);
  const [filteredData, setFilteredData] = useState<{ name: string }[]>([]);

  const handleChange = (input: string) => {
    if (!resultsOpen) setResultsOpen(true);
    setFilteredData(data.filter((el) => el.name.toLowerCase().includes(input)));
  };

  const handleChoice = (e: string) => {
    console.log(e);
  };

  return (
    <div className="search mt-2 w-2/4 relative">
      <div className="search-bar flex justify-between items-center bg-gray-500 py-2 px-4 rounded-full">
        <input
          type="text"
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
      <ul className="search-results mt-2 p-1 rounded-lg max-h-[200px] absolute top-full w-full overflow-y-auto">
        {resultsOpen &&
          filteredData.map((item, index) => (
            <li
              className="block bg-gray-300 p-2 cursor-pointer hover:bg-gray-400"
              key={index}
              onClick={() => handleChoice(item.name)}
            >
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  );
};
