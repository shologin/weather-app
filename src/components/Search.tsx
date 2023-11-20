import { FiGlobe } from "react-icons/fi";

export const Search = () => {
  return (
    <div className="search mt-2 w-2/4 relative">
      <div className="search-bar flex justify-between items-center bg-gray-500 py-2 px-4 rounded-full">
        <input type="text" className="w-full bg-transparent focus:outline-none text-gray-100" maxLength={30} />
        <FiGlobe style={{ marginLeft: "10px", width: "18px", height: "18px", color: "#f3f4f6" }} />
      </div>
      <ul className="search-results mt-2 p-1 rounded-lg max-h-[200px] absolute top-full w-full overflow-y-auto">
        <li className="block bg-gray-300 p-2 cursor-pointer hover:bg-gray-400">
          City De La Grua La Bianka
        </li>
        <li className="block bg-gray-300 p-2 cursor-pointer hover:bg-gray-400">
          City De La Grua La Bianka
        </li>
        <li className="block bg-gray-300 p-2 cursor-pointer hover:bg-gray-400">
          City De La Grua La Bianka
        </li>
        <li className="block bg-gray-300 p-2 cursor-pointer hover:bg-gray-400">
          City De La Grua La Bianka
        </li>
        <li className="block bg-gray-300 p-2 cursor-pointer hover:bg-gray-400">
          City De La Grua La Bianka
        </li>
        <li className="block bg-gray-300 p-2 cursor-pointer hover:bg-gray-400">
          City De La Grua La Bianka
        </li>
        
      </ul>
    </div>
  );
};
