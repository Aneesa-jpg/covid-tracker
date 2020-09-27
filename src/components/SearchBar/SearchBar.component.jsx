import React from "react";
import "./SearchBar.styles.css";

const SearchBar = ({handleChange}) => {
  return (
    <div className="bar">
      <input
        className="searchbar"
        type="text"
        title="Search"
        placeholder="Country Name....."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
