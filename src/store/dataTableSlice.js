import { createSlice } from '@reduxjs/toolkit';

export const dataTableSlice = createSlice({

    name: 'table',
    initialState: {
        isSaving: false,
        messageSaved: '',
        deleteMessage: '',
        tableRows: [],
        active: null
        // active: {
        //     sn: 0,//1 number uniqueIndex
        //     account: 012345, // 6 numbers
        //     no_division: 22, // 2 numbers
        //     country: 'US', // only valids countries
        //     legacy: 11, // 2 numbers
        //     no_legacy_division: 456 //3 numbers
        // }
    } ,
    reducers:  {
        setIsSaving: (state) => {
            state.isSaving = true;
        },
        editRow: (state, { payload }) => {
            state.active = {
                ...active,
                ...payload
            }
            state.tableRows = state.tableRows.map((row) => {
                if( active.sn !== row.sn ) return row

                return payload;
            })
            state.isSaving = false;
        },
        addRow: ( state, { payload } ) => {
            state.tableRows = [...state.tableRows, payload]
            state.isSaving = false;
        },
        deleteRowBySn: ( state, { payload } ) => {
            state.tableRows = state.tableRows.filter( row => row.sn !== payload );
            state.active = null;
            state.isSaving = false;
        }
    } ,
});



export const {setIsSaving, editRow, addRow, deleteRowBySn} = dataTableSlice.actions;