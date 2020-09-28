import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './countrypage.style.css'

const CountryPage = () => {
  let { countryId } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.covid19api.com/total/dayone/country/${countryId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {
          console.log(error);
        }
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      
      <div>
        {data.map((dat) => (
          <p>{dat.Active}</p>
        ))}
      </div>
    </div>
  );
};

export default CountryPage;
