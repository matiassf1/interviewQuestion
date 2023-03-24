import { useState } from "react"
import { useSelector } from "react-redux"
import { Table, DataTableForm } from "./components"

export const DataTableApp = () => {

  const [isEditingRow, setIsEditingRow] = useState(false)

  const { active: row } = useSelector( (state) => state.table );

  const onEditRow = () => {
    setIsEditingRow(true);
  }

  return (
    <div style={{margin:'3rem', my:'auto', mx:'auto'}}>
      <h1>Hello guys!</h1>
      <Table onEditRow={onEditRow} />

      <DataTableForm  isEditingRow={isEditingRow}/>
    </div>
  )
}
