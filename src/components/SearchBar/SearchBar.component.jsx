import React from "react";
import { useHistory } from "react-router-dom";
import "./SearchBar.styles.css";

const SearchBar = ({
  handleChange,
  handleKeyPress,
  searchField,
  filteredCountry,
}) => {
  const history = useHistory();
  console.log(searchField.length);

  function onInput() {
    var val = document.getElementById("input").value;
    var opts = document.getElementById("opts").childNodes;
    for (var i = 0; i < opts.length; i++) {
      if (opts[i].value === val) {
        // An item was selected from the list!
        // yourCallbackHere()
        const fc = filteredCountry.find((country) => country.Country === val);
        history.push(`/country/${fc.Slug}`);

        break;
      }
    }
  }
  return (
    <div>
      <div className="bar">
        <input
          name="countries"
          className="searchbar"
          type="text"
          title="Search"
          placeholder="Country Name....."
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          list="opts"
          onInput={onInput}
          id="input"
        />
        {(searchField.length > 0) && (
          <i
            className="fa fa-refresh fa-spin"
            aria-hidden="true"
            style={{ color: "black", padding: "10px" }}
          ></i>
        )}
      </div>

      <div className="dropdown">
        <datalist id="opts" className="ice-cream">
          {filteredCountry.map((fc) => (
            <option
              key={fc.Country}
              onClick={() => history.push(`$/country/${fc.Slug}`)}
            >
              {fc.Country}
            </option>
          ))}
        </datalist>
      </div>
    </div>
  );
};

export default SearchBar;
