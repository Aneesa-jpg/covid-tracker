import React, { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown/Dropdown.component";
import SearchBar from "../components/SearchBar/SearchBar.component";
import "./styles.css";
const HomePage = () => {
  const [searchField, setSearchField] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountry, setFilteredCountry] = useState([]);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    console.log(loading);
    setSearchField(e.target.value);

    const filteredCountries = countries.filter((country) =>
      country.Country.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(filteredCountries);
    setFilteredCountry(filteredCountries);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <div className="search">
        <SearchBar handleChange={handleChange} />
        {loading && (
          <i
            class="fa fa-refresh fa-spin"
            aria-hidden="true"
            style={{ color: "black", padding: "10px" }}
          ></i>
        )}
      </div>

      {searchField && <Dropdown filteredCountry={filteredCountry} />}
    </div>
  );
};

export default HomePage;
