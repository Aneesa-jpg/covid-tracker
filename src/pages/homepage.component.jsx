import React, { useEffect, useState } from "react";
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
    <React.Fragment>
      <SearchBar handleChange={handleChange} />
      {searchField && filteredCountry.map((fc) => (
        <p>{fc.Country}</p>
      ))}
    </React.Fragment>
  );
};

export default HomePage;
