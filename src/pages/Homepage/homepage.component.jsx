import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header.component";
import Footer from "../../components/Footer/Footer.component";

import SearchBar from "../../components/SearchBar/SearchBar.component";
import "./styles.css";
import Card from "../../components/Card/Card.component";
const HomePage = ({ match }) => {
  const [searchField, setSearchField] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountry, setFilteredCountry] = useState([]);
  const [summary, setSummary] = useState([]);
  const handleChange = (e) => {
    setSearchField(e.target.value);

    const filteredCountries = countries.filter((country) =>
      country.Country.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(filteredCountries);
    setFilteredCountry(filteredCountries);
  };
  const getSummary = () => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.Global);
          setSummary(result.Global);
        },
        (error) => {
          console.log(error);
        }
      );
  };

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
    getSummary();
  }, []);

  return (
    <div>
      <Header />
      <div className="search">
        <SearchBar
          handleChange={handleChange}
          filteredCountry={filteredCountry}
          searchField={searchField}
        />
      </div>
      <Card summary={summary} />
      <Footer />
    </div>
  );
};

export default React.memo(HomePage);
