import React from "react";
import "./Card.styles.css";

const Card = ({ summary }) => {
  return (
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
        <h4 style={{ color: "green" }}>Total Recovered:</h4>
        <span style={{ color: "green" }}>{summary.NewRecovered}</span>
      </div>
    </div>
  );
};

export default Card;
