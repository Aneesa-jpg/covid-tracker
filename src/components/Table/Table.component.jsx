import React from "react";
import "./Table.styles.css";
const Table = ({ data }) => {
  return (
    <div className="scrollable">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Active</th>
            <th>Confirmed</th>
            <th>Recovered</th>
            <th>Death</th>
          </tr>
        </thead>
        <tbody>
          {data.map((info) => (
            <tr key={info.Date}>
              <td>{new Date(info.Date).toLocaleDateString()}</td>
              <td>{info.Active}</td>
              <td>{info.Confirmed}</td>
              <td>{info.Recovered}</td>
              <td>{info.Deaths}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
