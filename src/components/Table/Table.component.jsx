import React from "react";
import "./Table.styles.css";
const Table = ({ data }) => {
  return (
    <div className="scrollable">
      <table>
        <tr>
          <th>Date</th>
          <th>Active</th>
          <th>Confirmed</th>
          <th>Recovered</th>
          <th>Death</th>
        </tr>
        {data.map((info) => (
          <tr>
            <td>{new Date(info.Date).toLocaleDateString()}</td>
            <td>{info.Active}</td>
            <td>{info.Confirmed}</td>
            <td>{info.Recovered}</td>
            <td>{info.Deaths}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
