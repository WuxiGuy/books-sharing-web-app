import React from "react";
import { useState } from 'react';
import "../style/searchbar.css";

function SearchBar({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
		setSearchTerm('');
  };

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
				className="searchBar-input"
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button className="searchBar-button" type="submit">Search</button>
    </form>
  );
}

export default SearchBar;