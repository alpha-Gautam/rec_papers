import React, { useState } from 'react';
import './SearchBox.css'; // Optional: Add styles

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="search-box ">
      <input
      className=''
        type="text"
        placeholder="Search for papers or authors or mentors..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;