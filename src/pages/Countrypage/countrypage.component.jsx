import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import LineChart from "../../components/LineChart/LineChart.component";

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
          console.log(result);

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
  const chartData = data.slice(0, 10);
  const label = chartData.map((date) =>
    new Date(date.Date).toLocaleDateString()
  );
  console.log(label);
  const confirmed = chartData.map((confirmed) => confirmed.Confirmed);
  console.log(confirmed);
  const active = chartData.map((confirmed) => confirmed.Active);
  console.log(active);
  const dead = chartData.map((confirmed) => confirmed.Deaths);
  console.log(dead);
  const recovered = chartData.map((confirmed) => confirmed.Recovered);

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
      {country ? <Table data={data} /> : <h1>No Data for {countryId} </h1>}
      <div className="charts">
        <LineChart
          label={label}
          data={confirmed}
          color={"Blue"}
          desc={"Confirmed"}
          id={"Confirmed"}
        />
        <LineChart
          label={label}
          data={active}
          color={"Orange"}
          desc={"Active"}
          id={"Active"}
        />
        <LineChart
          label={label}
          data={dead}
          color={"Red"}
          desc={"Deaths"}
          id={"Deaths"}
        />
        <LineChart
          label={label}
          data={recovered}
          color={"Green"}
          desc={"Recovered"}
          id={"recovered"}
        />
      </div>
    </div>
  );
};

export default CountryPage;
