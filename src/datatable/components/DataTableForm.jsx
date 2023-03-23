import React from "react";
import { useForm } from "../../hooks/useForm";

const initialValue = {
  account: "", // 6 numbers
  no_division: "", // 2 numbers
  country: "", // only valids countries
  legacy: "", // 2 numbers
  no_legacy_division: "", //3 numbers
};

const fromValidations = {
  account: [(value) => /^\d{6}$/.test(value), "Invalid account"],
  no_division: [(value) => /^\d{2}$/.test(value), "Invalid number of division"],
  country: [(value) => /^[A-Z]{2}$/.test(value), "Invalid country code"],
  legacy: [(value) => /^\d{2}$/.test(value), "Invalid legacy"],
  no_legacy_division: [(value) => /^\d{3}$/.test(value), "Invalid number of legacy division"],
};

export const DataTableForm = () => {
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
  } = useForm(initialValue, fromValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Submit");
  };

  return (
    <form onSubmit={onSubmit} style={{ display: "grid", gridTemplateColumns: "50% 50%", justifyItems:'center', gap: 5}}>
      <div style={{ display:'flex', flexDirection:'column' }}>
        <label> Account </label>
        <input
          type="text"
          value={account}
          name="account"
          onChange={onInputChange}
          error={!!accountValid}
          helperText={!!accountValid ? accountValid : ''}
          placeholder="Account"
        />
      </div>
      <div style={{ display:'flex', flexDirection:'column' }}>
        <label> No Division </label>
        <input
          type="text"
          value={no_division}
          name="no_division"
          onChange={onInputChange}
          error={!!no_divisionValid}
          helperText={!!no_divisionValid ? no_divisionValid : ''}
          placeholder="No Division"
        />
      </div>
      <div style={{ display:'flex', flexDirection:'column' }}>
        <label> Country </label>
        <input
          type="text"
          value={country}
          name="country"
          onChange={onInputChange}
          error={!!countryValid}
          helperText={!!countryValid ? countryValid : ''}
          placeholder="Country"
        />
      </div>
      <div style={{ display:'flex', flexDirection:'column' }}>
        <label> Legacy </label>
        <input
          type="text"
          value={legacy}
          name="legacy"
          onChange={onInputChange}
          error={!!legacyValid}
          helperText={!!legacyValid ? legacyValid : ''}
          placeholder="Legacy"
        />
      </div>
      <div style={{ display:'flex', flexDirection:'column',  gridColumn: '1/3'  }}>
        <label> No Legacy Division </label>
        <input
          type="text"
          value={no_legacy_division}
          name="no_legacyDivision"
          onChange={onInputChange}
          error={!!no_legacy_divisionValid}
          helperText={!!no_legacy_divisionValid ? no_legacy_divisionValid : ''}
          placeholder="No DivisionLegacy"
        />
      </div>
    </form>
  );
};
