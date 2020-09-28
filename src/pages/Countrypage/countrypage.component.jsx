import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Table from "../../components/Table/Table.component";
import "./countrypage.style.css";

const CountryPage = () => {
  const history = useHistory();
  let { countryId } = useParams();
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("");
  useEffect(() => {
    fetch(`https://api.covid19api.com/total/dayone/country/${countryId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result.reverse());
          console.log(result)

          if (result.length === 0) {
            console.log("no data");
          } else if (result[0].Country) {
            setCountry(result[0].Country);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className="heading">
        <i
          onClick={() => history.push("/")}
          className="fas fa-arrow-left fa-lg	"
        ></i>
        <header>
          <b>{country} Status page</b>
        </header>
      </div>

      {/* <div>
        {data.map((dat) => (
          <p>{dat.Active}</p>
        ))}
      </div> */}

      {country ? <Table data={data} /> : <h1>No Data for {countryId} </h1>}

    
    </div>
  );
};

export default CountryPage;
