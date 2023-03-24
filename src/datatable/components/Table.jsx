import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../../store/dataTableSlice";

export const Table = ({ onEditRow }) => {
  const { tableRows } = useSelector((state) => state.table);
  const dispatch = useDispatch();

  const onActiveRow = (event) => {
    event.preventDefault();

    let snActive = event.target.accessKey;
    onEditRow();
    dispatch(setActive(tableRows[snActive]));
  };

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

      <tbody onClick={onActiveRow}>
        {tableRows.map(
          ({
            sn,
            account,
            no_division,
            country,
            legacy,
            no_legacy_division,
          }) => (
            <tr
              key={sn}
              style={{
                borderSpacing: "2px",
              }}
            >
              <th
                accessKey={sn}
                style={{ borderBottom: "1px solid #dee2e6" }}
                scope="row"
              >
                {sn}
              </th>
              <td accessKey={sn} style={{ borderBottom: "1px solid #dee2e6" }}>
                {account}
              </td>
              <td accessKey={sn} style={{ borderBottom: "1px solid #dee2e6" }}>
                {no_division}
              </td>
              <td accessKey={sn} style={{ borderBottom: "1px solid #dee2e6" }}>
                {country}
              </td>
              <td accessKey={sn} style={{ borderBottom: "1px solid #dee2e6" }}>
                {legacy}
              </td>
              <td accessKey={sn} style={{ borderBottom: "1px solid #dee2e6" }}>
                {no_legacy_division}
              </td>
            </tr>
          )
        )}
        {/* <tr
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
        </tr> */}
      </tbody>
    </table>
  );
};
