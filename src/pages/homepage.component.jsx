import React, { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown/Dropdown.component";
import SearchBar from "../components/SearchBar/SearchBar.component";

const HomePage = () => {
  const [searchField, setSearchField] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountry, setFilteredCountry] = useState([]);

  useEffect(() => {
    fetch("https://api.covid19api.com/countries")
      .then((res) => res.json())
      .then(
        (result) => {
          setCountries(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const handleChange = (e) => {
    setSearchField(e.target.value);
    console.log(searchField);
    const filteredCountries = countries.filter((country) =>
      country.Country.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(filteredCountries);
    setFilteredCountry(filteredCountries);
  };

  return (
    <div>
      <SearchBar handleChange={handleChange} />
      {searchField && <Dropdown filteredCountry={filteredCountry} />}
    </div>
  );
};

export default HomePage;
