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
  const [summary, setSummary] = useState([]);

  const getSummary1 = () => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.Countries);
          console.log(countryId);
          const temp = result.Countries;
          const a = temp.filter((country) => country.Slug === countryId);
          console.log(a);
          setSummary(a[0]);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  useEffect(() => {
    fetch(`https://api.covid19api.com/total/dayone/country/${countryId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result.reverse());

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
    getSummary1();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const chartData = data.slice(0, 10);
  const label = chartData.map((date) =>
    new Date(date.Date).toLocaleDateString()
  );

  const confirmed = chartData.map((confirmed) => confirmed.Confirmed);

  const active = chartData.map((confirmed) => confirmed.Active);

  const dead = chartData.map((confirmed) => confirmed.Deaths);

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

      <div className="card">
        <div className="card-container">
          <h4 style={{ color: "blue" }}>Total Confirmed:</h4>
          <span style={{ color: "blue" }}>{summary.TotalConfirmed}</span>
          <h4 style={{ color: "red" }}>Total Deaths:</h4>
          <span style={{ color: "red" }}>{summary.TotalDeaths}</span>
          <h4 style={{ color: "green" }}>Total Recovered:</h4>
          <span style={{ color: "green" }}>{summary.TotalRecovered}</span>
        </div>
        <div className="card-container">
          <h4 style={{ color: "blue" }}>New Confirmed:</h4>
          <span style={{ color: "blue" }}>{summary.NewConfirmed}</span>
          <h4 style={{ color: "red" }}>New Deaths:</h4>
          <span style={{ color: "red" }}>{summary.NewDeaths}</span>
          <h4 style={{ color: "green" }}>New Recovered:</h4>
          <span style={{ color: "green" }}>{summary.NewRecovered}</span>
        </div>
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
