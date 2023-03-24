import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { addRow, editRow, setIsSaving } from "../../store/dataTableSlice";

import { ErrorMessage } from "../../ui/ErrorMessage";
import { LabelForm } from "../../ui/LabelForm";

const initialValue = {
  account: "", // 6 numbers
  no_division: "", // 2 numbers
  country: "", // only valids countries
  legacy: "", // 2 numbers
  no_legacy_division: "", //3 numbers
};

const formValidations = {
  account: [(value) => /^\d{6}$/.test(value), "Invalid account"],
  no_division: [(value) => /^\d{2}$/.test(value), "Invalid number of division"],
  country: [(value) => /^[A-Z]{2}$/.test(value), "Invalid country code"],
  legacy: [(value) => /^\d{2}$/.test(value), "Invalid legacy"],
  no_legacy_division: [
    (value) => /^\d{3}$/.test(value),
    "Invalid number of legacy division",
  ],
};

export const DataTableForm = ({ isEditingRow, editRowDone }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { isSaving, active, tableRows } = useSelector((state) => state.table);
  const dispatch = useDispatch();

  const {
    account,
    no_division,
    country,
    legacy,
    no_legacy_division,
    onInputChange,
    accountValid,
    no_divisionValid,
    countryValid,
    legacyValid,
    no_legacy_divisionValid,
    isFormValid,
    formState,
    onResetForm,
  } = useForm(initialValue, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return new Error("Algo salio mal");

    dispatch(setIsSaving());

    if (!isEditingRow) {
      let nextSn = tableRows.length;
      while (nextSn == tableRows[tableRows.length - 1]?.sn) {
        nextSn++;
      }
      dispatch(addRow({ ...formState, sn: nextSn }));
    } else {
      dispatch(editRow(formState));
    }
    setFormSubmitted(false);
    editRowDone();
    onResetForm();
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "grid",
        gridTemplateColumns: "50% 50%",
        justifyItems: "center",
        gap: 5,
        marginTop:'15px'
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <LabelForm> Account </LabelForm>
        <input
          type="text"
          value={account}
          name="account"
          onChange={onInputChange}
          error={!!accountValid && formSubmitted ? "true" : "false"}
          placeholder="Account"
        />
        {!!accountValid && formSubmitted ? (
          <ErrorMessage>{accountValid}</ErrorMessage>
        ) : (
          ""
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <LabelForm> No Division </LabelForm>
        <input
          type="text"
          value={no_division}
          name="no_division"
          onChange={onInputChange}
          error={!!no_divisionValid && formSubmitted ? "true" : "false"}
          placeholder="No Division"
        />
        {!!no_divisionValid && formSubmitted ? (
          <ErrorMessage>{no_divisionValid}</ErrorMessage>
        ) : (
          ""
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <LabelForm> Country </LabelForm>
        <input
          type="text"
          value={country}
          name="country"
          onChange={onInputChange}
          error={!!countryValid && formSubmitted ? "true" : "false"}
          placeholder="Country"
        />
        {!!countryValid && formSubmitted ? (
          <ErrorMessage>{countryValid}</ErrorMessage>
        ) : (
          ""
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <LabelForm> Legacy </LabelForm>
        <input
          type="text"
          value={legacy}
          name="legacy"
          onChange={onInputChange}
          error={!!legacyValid && formSubmitted ? "true" : "false"}
          placeholder="Legacy"
        />
        {!!legacyValid && formSubmitted ? (
          <ErrorMessage>{legacyValid}</ErrorMessage>
        ) : (
          ""
        )}
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", gridColumn: "1/3" }}
      >
        <LabelForm> No Legacy Division </LabelForm>
        <input
          type="text"
          value={no_legacy_division}
          name="no_legacy_division"
          onChange={onInputChange}
          error={!!no_legacy_divisionValid && formSubmitted ? "true" : "false"}
          placeholder="No DivisionLegacy"
        />
        {!!no_legacy_divisionValid && formSubmitted ? (
          <ErrorMessage>{no_legacy_divisionValid}</ErrorMessage>
        ) : (
          ""
        )}
      </div>

      <button
        type="submit"
        style={{
          fontWeight: "bold",
          color: "#F0F2F2",
          placeSelf: "center",
          gridColumn: "2",
          borderRadius: "10px",
          backgroundColor: "#285911",
          opacity: 0.9,
          border: "none",
          padding: "5px",
          paddingLeft: "calc(20% - 20px)",
          paddingRight: "calc(20% - 20px)",
        }}
        disabled={isSaving}
      >
        Save
      </button>
    </form>
  );
};
