import { configureStore } from '@reduxjs/toolkit'
import { dataTableSlice } from './dataTableSlice'

export const store = configureStore({
  reducer: { 
        table: dataTableSlice.reducer
    },
})