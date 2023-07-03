import { useState } from "react"
import { useSelector } from "react-redux"
import { Table, DataTableForm } from "./components"

export const DataTableApp = () => {

  const [isEditingRow, setIsEditingRow] = useState(false)

  const { active: row } = useSelector( (state) => state.table );

  const onEditRow = () => {
    setIsEditingRow(true);
  }

  const editRowDone = () => {
    setIsEditingRow(false)
  }

  return (
    <div style={{margin:'3rem', my:'auto', mx:'auto'}}>
      <h1 style={{marginBottom: '10px'}}>Data Table</h1>
      <Table onEditRow={onEditRow} />

      <DataTableForm activeRow={row} isEditingRow={isEditingRow} editRowDone={editRowDone}/>
    </div>
  )
}
