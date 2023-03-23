import React from 'react'
import { useForm } from '../../hooks/useForm'


const initialValue = {
    account: 012345, // 6 numbers
    no_division: 22, // 2 numbers
    country: 'US', // only valids countries
    legacy: 11, // 2 numbers
    no_legacy_division: 456 //3 numbers
}

const fromValidations = {
    account: [ 'test', 'errorMessage' ],
    no_division: [ 'test', 'errorMessage' ],
    country: [ 'test', 'errorMessage' ],
    legacy: [ 'test', 'errorMessage' ],
    no_legacy_division: [ 'test', 'errorMessage' ],
}

export const DataTableForm = () => {

    const { account, no_division, country, legacy, no_legacy_division,
        onInputChange, accountValid, no_divisionValid, countryValid,
        legacyValid, no_legacy_divisionValid } = useForm(initialValue, fromValidations)

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('Submit');
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text"
                value={account}
                name='account'
                onChange={onInputChange}
                error={!!accountValid}
                helperText={!!accountValid ? accountValid : ''}
                placeholder='Account' />
            <input type="text"
                value={no_division}
                name='no_division'
                onChange={onInputChange}
                error={!!no_divisionValid}
                helperText={!!no_divisionValid ? no_divisionValid : ''}
                placeholder='No Division' />
            <input type="text"
                value={country}
                name='country'
                onChange={onInputChange}
                error={!!countryValid}
                helperText={!!countryValid ? countryValid : ''}
                placeholder='Country' />
            <input type="text"
                value={legacy}
                name='legacy'
                onChange={onInputChange}
                error={!!legacyValid}
                helperText={!!legacyValid ? legacyValid : ''}
                placeholder='Legacy' />
            <input type="text"
                value={no_legacy_division}
                name='no_legacyDivision'
                onChange={onInputChange}
                error={!!no_legacy_divisionValid}
                helperText={!!no_legacy_divisionValid ? no_legacy_divisionValid : ''}
                placeholder='No DivisionLegacy' />
        </form>
    )
}
