import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import "./Dropdown.styles.css";

const Dropdown = ({ match, filteredCountry }) => {
  const history = useHistory();
  console.log(match);

  return (
    <div className="dropdown">
      <datalist id="opts" className='ice-cream'>
        {filteredCountry.map((fc) => (
          <option
            key={fc.Country}
            onClick={() => history.push(`${match.url}country/${fc.Slug}`)}
          >
            {fc.Country}
          </option>
        ))}
      </datalist>
    </div>
  );
};

export default withRouter(Dropdown);
