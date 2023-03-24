import React, {  } from "react";

export const Table = () => {


  const activeRow = (event) => {
    event.preventDefault();
    console.log(event.target);
  }


  return (
    <table
      style={{
        marginBottom: "1rem",
        verticalAlign: "top",
        width: "100%",
        borderCollapse: "separate",
      }}
    >
      <thead>
        <tr
          style={{
            borderSpacing: "2px",
          }}
        >
          <th style={{ borderBottom: "1px solid #dee2e6" }} scope="col">
            SN.
          </th>
          <th style={{ borderBottom: "1px solid #dee2e6" }} scope="col">
            Account.
          </th>
          <th style={{ borderBottom: "1px solid #dee2e6" }} scope="col">
            NoDiv.
          </th>
          <th style={{ borderBottom: "1px solid #dee2e6" }} scope="col">
            Country.
          </th>
          <th style={{ borderBottom: "1px solid #dee2e6" }} scope="col">
            Legacy.
          </th>
          <th style={{ borderBottom: "1px solid #dee2e6" }} scope="col">
            NoLegDiv.
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          onClick={activeRow}
          style={{
            borderSpacing: "2px",
          }}
        >
          <th style={{ borderBottom: "1px solid #dee2e6" }} scope="row">
            1
          </th>
          <td style={{ borderBottom: "1px solid #dee2e6" }}>toFill</td>
          <td style={{ borderBottom: "1px solid #dee2e6" }}>toFill</td>
          <td style={{ borderBottom: "1px solid #dee2e6" }}>toFill</td>
          <td style={{ borderBottom: "1px solid #dee2e6" }}>toFill</td>
          <td style={{ borderBottom: "1px solid #dee2e6" }}>toFill</td>
        </tr>
        <tr
          onClick={activeRow}
          >
          <th style={{ borderBottom: "1px solid #dee2e6" }} scope="row">
            2
          </th>
          <td style={{ borderBottom: "1px solid #dee2e6" }}>toFill</td>
          <td style={{ borderBottom: "1px solid #dee2e6" }}>toFill</td>
          <td style={{ borderBottom: "1px solid #dee2e6" }}>toFill</td>
          <td style={{ borderBottom: "1px solid #dee2e6" }}>toFill</td>
          <td style={{ borderBottom: "1px solid #dee2e6" }}>toFill</td>
        </tr>
      </tbody>
    </table>
  );
};
