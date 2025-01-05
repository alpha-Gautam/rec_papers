import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="flex justify-center items-center mx-auto mt-5 mb-12 max-w-lg">
      <input
        className="w-4/5 p-2 text-base text-black border border-black rounded-l-md outline-none focus:ring-2 focus:ring-white"
        type="text"
        placeholder="Search for papers, authors, or mentors..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="px-4 py-2 text-base text-white bg-blue-600 rounded-r-md hover:bg-blue-700 transition duration-300 ease-in-out"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
