import React from "react";
import "./Dropdown.styles.css";

const Dropdown = ({ filteredCountry }) => {
  return (
    <div className="dropdown">
      {filteredCountry.map((fc) => (
        <p>{fc.Country}</p>
      ))}
    </div>
  );
};

export default Dropdown;
